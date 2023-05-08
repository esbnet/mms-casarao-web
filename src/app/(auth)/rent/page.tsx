import Image from "next/image"
import { Inter } from "@next/font/google"
import Link from "next/link"

import ChildrenTitle from "@/components/children-title/page"
import { BsArrowLeftRight } from "react-icons/bs"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'Casarão | Aluguéis',
  description: 'Generated by Next.js',
}

const people = [
  {
    name: "Calvin Hawkins",
    email: "calvin.hawkins@example.com",
    image: "/images/photo-1550525811-e5869dd03032.avif",
  },
  {
    name: "Kristen Ramos",
    email: "kristen.ramos@example.com",
    image: "/images/photo-1550525811-e5869dd03032.avif",
  },
  {
    name: "Ted Fox",
    email: "ted.fox@example.com",
    image: "/images/photo-1550525811-e5869dd03032.avif",
  },
]

export default function Aluguel() {
  return (
    <div className='min-h-screen'>
      <ChildrenTitle title="Aluguéis" iconName={<BsArrowLeftRight size={54}/>}/>
    </div>

  )
}