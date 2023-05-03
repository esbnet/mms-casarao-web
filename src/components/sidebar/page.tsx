// * React icons
import { IoIosArrowBack } from "react-icons/io"
import { SlSettings } from "react-icons/sl"
import { AiFillSound } from "react-icons/ai"
import { BsPerson, BsDoorOpen } from "react-icons/bs"
import { HiOutlineUserGroup } from "react-icons/hi"
import { GiExitDoor, GiHamburgerMenu } from "react-icons/gi"
import { FaTheaterMasks } from "react-icons/fa"
import { MdOutlineSettings } from "react-icons/md"

import { Disclosure } from "@headlessui/react"
import Link from "next/link"

export default function Sidear() {
  return (
    <div className='flex'>
      <Disclosure as='nav'>
        <div className='p-6 w-1/2 h-screen bg-white z-20 top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
          <Disclosure.Button className='absolute top-4 right-4 inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white group hover:bg-white'>
            <GiHamburgerMenu
              className='block md:hidden h-6 w-6'
              aria-hidden='true'
            />
          </Disclosure.Button>

          <div className='flex flex-col justify-start items-center h-full'>
            <h1 className='text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full'>
              Casarão Estúdios
            </h1>

            {/* section add item */}
            <div className='my-4 border-b border-gray-200 pb-4 w-full'>
              <Link href={"/user"}>
                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                  <BsPerson className='text-2xl text-gray-600 group-hover:text-white' />
                  <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
                    Usuários
                  </h3>
                </div>
              </Link>

              <Link href={"/role"}>
                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                  <SlSettings className='text-2xl text-gray-600 group-hover:text-white' />
                  <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
                    Papéis
                  </h3>
                </div>
              </Link>

              <Link href={"/artist"}>
                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                  <FaTheaterMasks className='text-2xl text-gray-600 group-hover:text-white' />
                  <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
                    Artistas
                  </h3>
                </div>
              </Link>

              <Link href={"/band"}>
                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                  <HiOutlineUserGroup className='text-2xl text-gray-600 group-hover:text-white' />
                  <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
                    Bandas
                  </h3>
                </div>
              </Link>

              <Link href={"/environment"}>
                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                  <BsDoorOpen className='text-2xl text-gray-600 group-hover:text-white' />
                  <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
                    Ambientes
                  </h3>
                </div>
              </Link>

              <Link href={"/equipament"}>
                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                  <AiFillSound className='text-2xl text-gray-600 group-hover:text-white' />
                  <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
                    Equipamentos
                  </h3>
                </div>
              </Link>
            </div>

            {/* section settings */}
            <div className='my-4 border-b border-gray-200 pb-4 w-full'>
              <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                <MdOutlineSettings className='text-2xl text-gray-600 group-hover:text-white' />
                <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
                  Configurações
                </h3>
              </div>
            </div>

            {/* section logout */}
            <div className='p-2 fixed bottom-0 mb-4 '>
              <div className='flex mb-2 justify-start items-center gap-4 px-5 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto  w-full'>
                <GiExitDoor className='text-2xl text-gray-600 group-hover:text-white' />
                <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
                  Sair
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  )
}
