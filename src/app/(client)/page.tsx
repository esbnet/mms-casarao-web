"use client"

import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"

import { AiOutlineSchedule } from "react-icons/ai"
import { FaExchangeAlt, FaTheaterMasks } from "react-icons/fa"
import { VscTools } from "react-icons/vsc"

import LogoImg from "../../assets/images/logo.png"

export default function Home() {
  return (
    <section className='flex flex-col justify-center items-center gap-20'>
      <motion.div
        className="mt-[-150px]"
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
          width={256}
          height={256}
          className='rounded-full m-8'
        />
      </motion.div>

      <div className='text-2xl grid grid-cols-4 gap-10 flex-wrap text-yellow-300'>
        <Link href={"/appointment"} className='hover:text-gray-900'>
          <motion.div
            className='w-52 h-52 bg-gray-600 bg-opacity-20 backdrop-blur-lg rounded-full drop-shadow-lg flex flex-col justify-center items-center hover:bg-yellow-300 hover:animate-pulse '
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              rotate: [0, 5, -5, 5, 0],
              transition: { duration: 1, repeat: 0 },
            }}
            title='Realizar agendamento'
          >
            <AiOutlineSchedule size={120} className=""/>
            <h1>Ensaio</h1>
          </motion.div>
        </Link>
        <Link href={"/rent"} className='hover:text-gray-900'>
          <motion.div
            className='w-52 h-52 bg-gray-600 bg-opacity-20 backdrop-blur-lg rounded-full drop-shadow-lg flex flex-col justify-center items-center hover:bg-yellow-300 hover:animate-pulse'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              rotate: [0, 5, -5, 5, 0],
              transition: { duration: 1, repeat: 0 },
            }}
            title='Realizar aluguél de equipamentos'
          >
            <FaExchangeAlt size={120} />
            <h1>Aluguél</h1>
          </motion.div>
        </Link>
        <Link href={"/luthier"} className='hover:text-gray-900'>
          <motion.div
            className='w-52 h-52 bg-gray-600 bg-opacity-20 backdrop-blur-lg rounded-full drop-shadow-lg flex flex-col justify-center items-center hover:bg-yellow-300 hover:animate-pulse'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              rotate: [0, 5, -5, 5, 0],
              transition: { duration: 1, repeat: 0 },
            }}
            title='Manutenção de instrumentos de corda'
          >
            <VscTools size={120} />
            <h1>Luthier</h1>
          </motion.div>
        </Link>
        <Link href={"/community"} className='hover:text-gray-900'>
          <motion.div
            className='w-52 h-52 bg-gray-600 bg-opacity-20 backdrop-blur-lg rounded-full drop-shadow-lg flex  flex-col justify-center items-center hover:bg-yellow-300 hover:animate-pulse'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              rotate: [0, 5, -5, 5, 0],
              transition: { duration: 1, repeat: 0 },
            }}
            title='Comunidade dos Artistas da Música'
          >
            <FaTheaterMasks size={120} />
            <h1>Comunidade</h1>
          </motion.div>
        </Link>
      </div>

    </section>
  )
}
