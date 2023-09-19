import { type Plan } from '@/types/types'
import ButtonCheckout from './button-checkout'

interface Props {
  plan: Plan
}

const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

const PlanCard = ({ plan }: Props) => {
  return (
    <div
      key={plan.id}
      className="bg-slate-600 px-4 py-12 rounded-md text-center min-w-[400px] min-h-[200px] flex flex-col justify-between"
    >
      <h3>{plan.nickname}</h3>
      <p className="font-bold text-2xl">
        {USDollar.format(plan.unit_amount / 100)}
      </p>
      <ButtonCheckout planId={plan.id} />
    </div>
  )
}

export default PlanCard
