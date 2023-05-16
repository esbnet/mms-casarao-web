import { GiExitDoor } from "react-icons/gi"
import Link from "next/link"

import { signOut } from "next-auth/react"

interface ProfileProps {
  name: string
  age: number
}

export default function Logout({ name, age }: ProfileProps) {

  return (
    <Link href="">
      <div onClick={_ => signOut()} className='bg-yellow-500/50 rounded-full flex flex-col justify-center items-center h-14 w-14 cursor-pointer hover:shadow-lg hover:shadow-slate-500/40'>
        <GiExitDoor size={32} title="Sair"/>
      </div>
    </Link>
  )
}
