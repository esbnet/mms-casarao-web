import Image from "next/image"
import Link from "next/link"

import ChildrenTitle from "@/components/children-title/page"

import { GiExitDoor } from "react-icons/gi"

export const metadata = {
  title: "Ambientes",
  description: "Página de cadastro de ambientes",
}

export default function Environiment() {
  return (
    <div className='min-h-screen'>
      <ChildrenTitle title='Ambientes' iconName={<GiExitDoor size={54} />} />
    </div>
  )
}
