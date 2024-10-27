'use server';

import { getUser } from '@/services/actions/user.actions';
import { auth } from '@/services/auth';
import { createCheckoutSession } from '@/services/stripe/stripe';
import { redirect } from 'next/navigation';

export async function createCheckoutSessionAction () {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: 'Not authorized',
      data: null,
    };
  }

  const user = await getUser();

  const checkoutSession = await createCheckoutSession(
    session.user.id,
    session.user.email as string,
    user?.stripeSubscriptionId as string
  );

  if (!checkoutSession.url) return;

  redirect(checkoutSession.url);
};
