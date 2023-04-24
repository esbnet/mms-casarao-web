import Image from "next/image"
import { Inter } from "@next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

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
    <>
      <div className='text-orange-400 bg-gray-900 min-h-screen'>
        Aluguel!
        <ul className='divide-y divide-gray-200'>
          {people.map((person) => (
            <li key={person.email} className='py-4 flex'>
              <Image className="rounded-full" src={person.image} width={50} height={50} alt=''/>

              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-900'>
                  {person.name}
                </p>
                <p className='text-sm text-gray-500'>{person.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
