import Image from "next/image"

import LogoImg from "../../assets/images/logo.png"

import { GiExitDoor } from "react-icons/gi"
import Link from "next/link"

interface ProfileProps {
  name: string
  age: number
}

export default function Logout({ name, age }: ProfileProps) {
  return (
    <Link href={'/profile'}>
      <div className='bg-yellow-500/50 rounded-full flex flex-col justify-center items-center h-14 w-14 cursor-pointer hover:shadow-lg hover:shadow-slate-500/40'>
        <GiExitDoor size={32} title="Perfil"/>
        {/* <span className='inline-block whitespace-nowrap rounded-full bg-success-100 px-[0.65em] pt-[0.35em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-success-700 mt-1'>
          {name}
        </span>
        {age} */}
      </div>
    </Link>
  )
}
