export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    plans: {
      free: {
        priceId: 'price_1QIfKLIyG1Uq324Pm0s1qtGY',
        quota: {
          TASKS: 0,
        },
      },
      pro: {
        priceId: 'price_1QIfKxIyG1Uq324P56ZSbVXJ',
        quota: {
          TASKS: -1,
        },
      },
    },
  },
};
