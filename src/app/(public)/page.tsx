"use client"

import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"

import { AiOutlineSchedule } from "react-icons/ai"
import { FaExchangeAlt, FaTheaterMasks } from "react-icons/fa"
import { VscTools } from "react-icons/vsc"

import LogoImg from "../../assets/images/logo.png"
import { getSession } from "next-auth/react"

const messagens = [
  'Encontre seu ritmo em nossas salas de ensaio profissionais! Com equipamentos de qualidade e ambiente acolhedor, você pode aprimorar suas habilidades musicais e se preparar para arrasar em seu próximo show. Agende agora e faça seu som ecoar em nossos estúdios de áudio de alta qualidade!',
  'Descubra o poder da música em nossas salas de ensaio profissionais! Aperfeiçoe seu som e desfrute da melhor qualidade de áudio em um ambiente confortável e acolhedor. Reserve agora e transforme sua música em uma experiência inesquecível. Venha fazer parte da nossa comunidade musical!',
  'Faça a música acontecer! Nossas salas de ensaio foram projetadas para dar vida à sua criatividade. Com equipamentos de alta qualidade e um ambiente profissional, você poderá tocar suas músicas em alto e bom som. Reserve agora e sinta a emoção de tocar em um ambiente projetado para músicos como você!',
  'Transforme seu som em uma experiência épica! Agende seu ensaio em nossas salas de áudio profissionais e explore todo o potencial da sua música. Equipamentos de ponta, ambiente acústico perfeito e suporte técnico especializado - tudo isso para você alcançar o som dos seus sonhos. Não espere mais, comece agora a fazer história com sua música!',
]

const slogan = [
  'Seu som, nossa paixão: juntos criamos música de impacto.',
  'Ensaie, toque, conquiste - sua música em alta performance!',
  'Desperte sua música interior. Ensaios profissionais para músicos apaixonados.',
  'Potencialize seu som, eleve sua música!',
]

export default function Home() {

  const session = getSession()
  
  if(!session) {
    return {
      redirect: {
        destination: "/login"
      }
    }
   }
 

  return (
    <section className='flex flex-col justify-center items-center gap-20'>

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
          width={200}
          height={200}
          className='rounded-full m-8'
        />
      </motion.div>

      <div className='text-2xl grid grid-cols-3 gap-10 flex-wrap text-yellow-300'>
        <Link href={"/schedule"} className='hover:text-gray-900'>
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
            <AiOutlineSchedule size={120} className='' />
            <h1>Agenda</h1>
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
            <h1>Aluguel</h1>
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
        {/* <Link href={"/community"} className='hover:text-gray-900'>
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
        </Link> */}
      </div>

      <div className='w-auto bg-black/70 text-white p-4'>
        <h1 className='text-4xl font-bold mb-4'>
          {slogan[Math.floor(Math.random() * slogan.length)]}
        </h1>
        <p className="text-yellow-300">{messagens[Math.floor(Math.random() * messagens.length)]}</p>
      </div>

    </section>
  )
}

