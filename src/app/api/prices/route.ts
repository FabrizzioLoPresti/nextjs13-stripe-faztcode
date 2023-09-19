import { NextResponse } from 'next/server'
import { Stripe } from 'stripe'

export const dynamic = 'force-dynamic'

export const GET = async () => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
      apiVersion: '2023-08-16'
    })
    const prices = await stripe.prices.list()
    return NextResponse.json(prices.data)
  } catch (error) {
    return NextResponse.error()
  }
}
