import { buffer } from 'micro';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
  apiVersion: '2024-09-30.acacia',
});
const webhookSecret = 'secret';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const rawBody = await buffer(req);
  const sig = req.headers['stripe-signature']!;

  let stripeEvent;
  try {
    stripeEvent = stripe.webhooks.constructEvent(rawBody.toString(), sig, webhookSecret);
    res.status(200).send('OK');
  } catch (err) {
    if (err instanceof Error)
      return res.status(400).send(`Webhook Error: ${err.message}`);
    return res.status(400).send('Signature Webhook Error');
  }

  console.log(stripeEvent);
}
