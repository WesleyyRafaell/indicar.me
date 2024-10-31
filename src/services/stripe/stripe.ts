import { prisma } from '@/services/database';
import { config } from '@/services/stripe/config';
import Stripe from 'stripe';

export const stripe = new Stripe(config.stripe.secretKey || '', {
  apiVersion: '2024-09-30.acacia',
  httpClient: Stripe.createFetchHttpClient(),
});

export const getStripeCustomerByEmail = async (email: string) => {
  const customers = await stripe.customers.list({ email });
  return customers.data[0];
};

export const createStripeCustomer = async (
  input: {
    name?: string,
    email: string
  }
) => {
  const customer = await getStripeCustomerByEmail(input.email);
  if (customer) return customer;

  const createdCustomer = await stripe.customers.create({
    email: input.email,
    name: input.name,
  });

  const createCustomerSubscription = await stripe.subscriptions.create({
    customer: createdCustomer.id,
    items: [ { price: config.stripe.plans.free.priceId } ],
  });

  await prisma.user.update({
    where: {
      email: input.email,
    },
    data: {
      stripeCustomerId: createdCustomer.id,
      stripeSubscriptionId: createCustomerSubscription.id,
      stripeSubscriptionStatus: createCustomerSubscription.status,
      stripePriceId: config.stripe.plans.free.priceId,
    },
  });

  return createdCustomer;
};

export const createCheckoutSession = async (
  userId: string,
  userEmail: string,
  userStripeSubscriptionId: string
) => {
  try {
    const customer = await createStripeCustomer({
      email: userEmail,
    });

    const subscription = await stripe.subscriptionItems.list({
      subscription: userStripeSubscriptionId,
      limit: 1,
    });

    const session = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: 'http://localhost:3000/system/dashboard/my-plan',
      flow_data: {
        type: 'subscription_update_confirm',
        after_completion: {
          type: 'redirect',
          redirect: {
            return_url:
              'http://localhost:3000/system/dashboard/my-plan?success=true',
          },
        },
        subscription_update_confirm: {
          subscription: userStripeSubscriptionId,
          items: [
            {
              id: subscription.data[0].id,
              price: config.stripe.plans.pro.priceId,
              quantity: 1,
            },
          ],
        },
      },
    });

    return {
      url: session.url,
      // url: 'http://localhost:3000/system/dashboard/my-plan',
    };
  } catch (error) {
    throw new Error('Error to create checkout session');
  }
};

export const handleProcessWebhookUpdatedSubscription = async (event: {
  object: Stripe.Subscription
}) => {
  const stripeCustomerId = event.object.customer as string;
  const stripeSubscriptionId = event.object.id as string;
  const stripeSubscriptionStatus = event.object.status;
  const stripePriceId = event.object.items.data[0].price.id;

  const userExists = await prisma.user.findFirst({
    where: {
      OR: [
        {
          stripeSubscriptionId,
        },
        {
          stripeCustomerId,
        },
      ],
    },
    select: {
      id: true,
    },
  });

  if (!userExists) {
    throw new Error('user of stripeCustomerId not found');
  }

  await prisma.user.update({
    where: {
      id: userExists.id,
    },
    data: {
      stripeCustomerId,
      stripeSubscriptionId,
      stripeSubscriptionStatus,
      stripePriceId,
    },
  });
};

type Plan = {
  priceId: string
  quota: {
    TASKS: number
  }
}

type Plans = {
  [key: string]: Plan
}

interface PlansKey {
  free: string;
  pro: string;
}

export const getPlanByPrice = (priceId: string) => {
  const { plans } = config.stripe;

  const planKey = Object.keys(plans).find(
    (key) => plans[key as keyof PlansKey].priceId === priceId
  ) as keyof Plans | undefined;

  const plan = planKey ? plans[planKey as keyof PlansKey] : null;

  if (!plan) {
    throw new Error(`Plan not found for priceId: ${priceId}`);
  }

  return {
    name: planKey,
    quota: plan.quota,
  };
};

export const getUserCurrentPlan = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      stripePriceId: true,
    },
  });

  if (!user || !user.stripePriceId) {
    throw new Error('User or user stripePriceId not found');
  }

  const plan = getPlanByPrice(user.stripePriceId);

  const availableTasks = plan.quota.TASKS;
  const currentTasks = 0;
  const usage = (currentTasks / availableTasks) * 100;

  return {
    name: plan.name as string,
    quota: {
      TASKS: {
        available: availableTasks,
        current: currentTasks,
        usage,
      },
    },
  };
};
