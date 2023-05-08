import Image from "next/image"
import Link from "next/link"

import LogoImg from "../../assets/images/logo.png"

export function Logo() {
  return (
    <div className='bg-yellow-300 rounded-full  hover:shadow-lg hover:shadow-slate-50/40'>
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
