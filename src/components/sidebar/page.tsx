'use client'

// * React icons
import { Disclosure } from "@headlessui/react"

import Link from "next/link"

import { SlSettings } from "react-icons/sl"
import { AiFillSound } from "react-icons/ai"
import { BsPerson, BsDoorOpen } from "react-icons/bs"
import { HiOutlineUserGroup } from "react-icons/hi"
import {
  GiExitDoor,
  GiHamburgerMenu,
  GiDrumKit,
  GiMusicalScore,
} from "react-icons/gi"
import { FaTheaterMasks } from "react-icons/fa"
import { MdOutlineSettings } from "react-icons/md"
import { Logo } from "../logo/page"
import { ReactNode } from "react"

const menuStyle = "text-2xl text-gray-600 group-hover:text-white"

type menuProps = {
  link: string
  title: string
  icon: ReactNode
}[]

const Menu: menuProps = [
  {
    link: "/user",
    title: "Usuários",
    icon: <BsPerson className={menuStyle} />,
  },
  { link: "/role", title: "Papel", icon: <SlSettings className={menuStyle} /> },
  {
    link: "/artist",
    title: "Artistas",
    icon: <FaTheaterMasks className={menuStyle} />,
  },
  {
    link: "/band",
    title: "Bandas",
    icon: <HiOutlineUserGroup className={menuStyle} />,
  },
  {
    link: "/environment",
    title: "Ambientes",
    icon: <BsDoorOpen className={menuStyle} />,
  },
  {
    link: "/equipament",
    title: "Equipamentos",
    icon: <AiFillSound className={menuStyle} />,
  },
  {
    link: "/instrument",
    title: "Instrumentos",
    icon: <GiDrumKit className={menuStyle} />,
  },
  {
    link: "/music",
    title: "Músicas",
    icon: <GiMusicalScore className={menuStyle} />,
  },
]

export default function Sidear() {
  return (
    <Disclosure as='nav'>
      {/* <Disclosure.Button className=' absolute top-4 right-4 inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group hover:bg-white'>
          <GiHamburgerMenu
            className='block md:hidden h-6 w-6'
            aria-hidden='true'
          />
        </Disclosure.Button> */}
      <div className='bg-gray-50 p-4 w-1/2 h-screen z-20 top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
        {/* <div className='border-b border-gray-800 pb-4 w-full'></div> */}
        <div className="flex flex-col justify-between h-full">
          <Logo />
          <div className='flex flex-col justify-between items-center h-full'>
            {/* section add item */}
            <div className='my-4 border-b border-gray-200 pb-4 w-full'>
              {Menu.map((menu, index) => {
                return (
                  <Link href={menu.link} key={index}>
                    <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                      {menu.icon}
                      <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
                        {menu.title}
                      </h3>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* section settings */}
          {/* <div className='my-4 border-b border-gray-200 pb-4 w-full'></div> */}

          {/* section logout */}
          <div className='p-2 bottom-0 w-full '>
            <div className='flex mb-2 justify-start items-center gap-4 px-5 border border-gray-200 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto w-full'>
              <GiExitDoor className='text-2xl text-gray-600 group-hover:text-white' />
              <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
                Sair
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}
