import Image from "next/image"
import { Inter } from "@next/font/google"
import Link from "next/link"
import ChildrenTitle from "@/components/children-title/page"
import { FaTheaterMasks } from "react-icons/fa"

export const metadata = {
  title: "Artistas",
  description: "Página de criação de artistas",
}

export default function Artist() {
  return (
    <div className='min-h-screen'>
      <ChildrenTitle title='Artistas' iconName={<FaTheaterMasks size={54} />} />
    </div>
  )
}
