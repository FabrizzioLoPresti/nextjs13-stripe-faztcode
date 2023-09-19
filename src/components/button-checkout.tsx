'use client'

import { useRouter } from 'next/navigation'
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

interface Props {
  planId: string
}

const checkoutStripe = async (planId: string, router: AppRouterInstance) => {
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ planId })
    })
    const { url } = await response.json()
    router.push(url)
  } catch (error) {
    console.error(error)
  }
}

const ButtonCheckout = ({ planId }: Props) => {
  const router = useRouter()

  return (
    <button
      className="bg-amber-400 text-black w-fit px-8 py-2 rounded-md mt-6 self-center hover:bg-amber-600 transition-colors ease-in-out duration-300"
      onClick={async () => {
        await checkoutStripe(planId, router)
      }}
    >
      Buy
    </button>
  )
}

export default ButtonCheckout
