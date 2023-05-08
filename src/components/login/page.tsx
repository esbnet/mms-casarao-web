import { GiEntryDoor } from "react-icons/gi"
import Link from "next/link"

export default function Login() {
  return (
    <Link href={'/public/login'}>
      <div className='bg-yellow-500/50 rounded-full flex flex-col justify-center items-center h-14 w-14 cursor-pointer hover:shadow-lg hover:shadow-slate-500/40'>
        <GiEntryDoor size={32} title="Acessar"/>
      </div>
    </Link>
  )
}
