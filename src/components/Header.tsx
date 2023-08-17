import Link from 'next/link'
import RegisterLogin from './RegisterLogin'

export default function Header() {
  return (
    <div className={`inline-flex flex-wrap text-2xl p-6 justify-between text-gray-100 bg-gradient-to-b from-gray-800 to-gray-950 w-screen border-solid border-b-2 border-slate-50`}>
      <Link href={`/`}>Home</Link>
      <RegisterLogin/>
      <Link href={`/about`}>About</Link>
    </div>
  )
}