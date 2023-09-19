import { NextResponse } from 'next/server'
import { Stripe } from 'stripe'

export const POST = async (request: Request) => {
  try {
    const { planId } = await request.json()
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
      apiVersion: '2023-08-16'
    })

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: planId,
          quantity: 1
        }
      ],
      success_url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/pricing`
    })
    // TODO: Add redirect to checkout using redirect from Route Handlers
    return NextResponse.json({ url: session.url })
  } catch (error) {
    return NextResponse.error()
  }
}
