"use client"

import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"

import { FaExchangeAlt, FaTheaterMasks } from "react-icons/fa"
import { VscTools } from "react-icons/vsc"
import { AiOutlineSchedule } from "react-icons/ai"

import LogoImg from "../../assets/images/logo.png"

export default function Home() {
  return (
    <section className='flex flex-col justify-center items-center  pb-56'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          rotate: [0, 5, -5, 5, 0],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        <Image
          src={LogoImg}
          alt='Logo'
          width={320}
          height={320}
          className='rounded-full m-8'
        />
      </motion.div>
      <div className=' grid grid-cols-4 gap-4 flex-wrap'>
        <Link href={"/appointment"} className='hover:text-2xl'>
          <motion.div
            className='w-64 h-64 bg-gray-600 bg-opacity-20 backdrop-blur-lg rounded-full drop-shadow-lg flex flex-col justify-center items-center'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              rotate: [0, 5, -5, 5, 0],
              transition: { duration: 1, repeat: 0 },
            }}
          >
            <AiOutlineSchedule
              size={164}
              className=' hover:text-yellow-400 hover:animate-pulse'
            />

            <h1>Ensaio</h1>
          </motion.div>
        </Link>
        <Link href={"/rent"} className='hover:text-2xl'>
          <motion.div
            className='w-64 h-64 bg-gray-600 bg-opacity-20 backdrop-blur-lg rounded-full drop-shadow-lg flex flex-col justify-center items-center'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              rotate: [0, 5, -5, 5, 0],
              transition: { duration: 1, repeat: 0 },
            }}
          >
            <FaExchangeAlt
              size={164}
              className=' hover:text-yellow-400 hover:animate-pulse'
            />
            <h1>Aluguél</h1>
          </motion.div>
        </Link>
        <Link href={"/luthier"} className=' hover:text-2xl'>
          <motion.div
            className='w-64 h-64 bg-gray-600 bg-opacity-20 backdrop-blur-lg rounded-full drop-shadow-lg flex flex-col justify-center items-center'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              rotate: [0, 5, -5, 5, 0],
              transition: { duration: 1, repeat: 0 },
            }}
          >
            <VscTools
              size={164}
              className='hover:text-yellow-400   hover:animate-pulse'
            />
            <h1>Luthier</h1>
          </motion.div>
        </Link>
        <Link href={"/community"} className='hover:text-2xl'>
          <motion.div
            className='w-64 h-64 bg-gray-600 bg-opacity-20 backdrop-blur-lg rounded-full drop-shadow-lg flex  flex-col justify-center items-center'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              rotate: [0, 5, -5, 5, 0],
              transition: { duration: 1, repeat: 0 },
            }}
          >
            <FaTheaterMasks
              size={164}
              className='hover:text-yellow-400 hover:animate-pulse'
            />
            <h1>Comunidade</h1>
          </motion.div>
        </Link>
      </div>
    </section>
  )
}
