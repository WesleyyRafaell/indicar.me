export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    plans: {
      free: {
        priceId: 'price_1QEaBqIyG1Uq324P996TWq5N',
        quota: {
          TASKS: 0,
        },
      },
      pro: {
        priceId: 'price_1QEaD7IyG1Uq324PrEilUez6',
        quota: {
          TASKS: -1,
        },
      },
    },
  },
};
