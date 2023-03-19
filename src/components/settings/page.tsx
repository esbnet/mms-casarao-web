import Link from "next/link"
import { VscSettings } from "react-icons/vsc"

export default function Settings() {
  return (
    <div className='bg-yellow-500/40 rounded-full flex flex-col justify-center items-center w-14 h-14 cursor-pointer  hover:shadow-lg hover:shadow-slate-500/40'>
      <Link href={'/settings'}>
      <VscSettings size={32} title="Configurações"/>
      </Link>
    </div>
  )
}
