import Image from "next/image"
import { Inter } from "@next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function Settings() {
  return (
    <section>
      <div className='text-orange-400 bg-gray-900 min-h-screen'>Profile!</div>
    </section>
  )
}
