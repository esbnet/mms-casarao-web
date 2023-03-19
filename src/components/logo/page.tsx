import Image from "next/image"
import Link from "next/link"

import LogoImg from "../../assets/images/logo.png"

export function Logo() {
  return (
    <div className='bg-slate-900 rounded-full  hover:shadow-lg hover:shadow-slate-500/40'>
      <Link href={"/"}>
        <Image
          src={LogoImg}
          alt='Logo'
          width={60}
          height={60}
          className='rounded-full'
        />
      </Link>
    </div>
  )
}
