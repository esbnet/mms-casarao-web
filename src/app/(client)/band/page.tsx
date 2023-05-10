import ChildrenTitle from "@/components/children-title/page"

import Image from "next/image"
import Link from "next/link"

import { HiOutlineUserGroup } from "react-icons/hi"

export const metadata = {
  title: "Bandas",
  description: "Página de cadastro de bandas",
}

export default function Band() {
  return (
    <div className='min-h-screen'>
      <ChildrenTitle
        title='Bandas'
        iconName={<HiOutlineUserGroup size={54} />}
      />
    </div>
  )
}
