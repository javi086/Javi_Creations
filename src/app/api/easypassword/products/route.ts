import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || '';
const stripe = new Stripe(stripeSecretKey);

export async function GET() {
  if (!stripeSecretKey) {
    console.error('Missing Stripe secret key');
    return NextResponse.json(
      { error: 'Missing Stripe secret key. Set STRIPE_SECRET_KEY in your environment.' },
      { status: 500 }
    );
  }

  try {
    const products = await stripe.products.list({
      limit: 3,
      expand: ['data.default_price'],
    });

    return NextResponse.json(products.data, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Stripe products error:', message);
    return NextResponse.json(
      { error: message || 'Failed to fetch Stripe products' },
      { status: 500 }
    );
  }
}

