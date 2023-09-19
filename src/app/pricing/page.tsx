// type Props = {}

import PlanCard from '@/components/plan-card'
import { type Plan } from '@/types/types'

const fetchPlans = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/prices`,
    {
      cache: 'no-cache',
      next: {
        tags: ['prices']
      }
    }
  )
  const data: Plan[] = await response.json()
  return data.sort((a, b) => a.unit_amount - b.unit_amount)
}

export default async function PricingPage () {
  const plans = await fetchPlans()
  return (
    <section className="h-screen gap-24 flex flex-col items-center justify-center">
      <header>
        <h1 className="text-4xl font-bold text-center">Pricing</h1>
      </header>
      {/* <pre>{JSON.stringify(prices, null, 2)}</pre> */}
      <div className="flex flex-row gap-x-10">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  )
}
