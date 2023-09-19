import { redirect } from 'next/navigation'

export default function Home () {
  redirect('/pricing')
  return (
    <main>
      <h1 className='text-2xl font-bold'>Hola Mundo</h1>
    </main>
  )
}
