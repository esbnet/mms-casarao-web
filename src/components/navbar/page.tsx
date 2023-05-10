import Link from "next/link"

export function Navbar() {
  return (
    <nav className='flex flex-col justify-center px-4'>
      <ul className='flex items- items-center justify-around gap-2 p-4'>
        <li className=' border-b-4 border-white/0 hover:border-b-4 hover:border-slate-700'>
          <Link href={"/"}>Home</Link>
        </li>
        <li className='border-b-4 border-white/0 hover:border-b-4 hover:border-slate-700'>
          <Link href={"/schedule"}>Agenda</Link>
        </li>
        <li className='border-b-4 border-white/0 hover:border-b-4 hover:border-slate-700'>
          <Link href={"/rent"}>Aluguel</Link>
        </li>
        <li className=' border-b-4 border-white/0 hover:border-b-4 hover:border-slate-700'>
          <Link href={"/luthier"}>Luthier</Link>
        </li>
        {/* <li className=' border-b-4 border-white/0 hover:border-b-4 hover:border-slate-700'>
          <Link href={"/community"}>Comunidade</Link>
        </li> */}
      </ul>
    </nav>
  )
}
