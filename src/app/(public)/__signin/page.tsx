"use client"

import providers from "@/components/providers"
import { getSession, signIn, getCsrfToken } from "next-auth/react"

import { NextApiRequest, NextApiResponse } from "next"

import Image from "next/image"
import { motion } from "framer-motion"
import LogoImg from "../../../assets/images/logo.png"
import Tilt from "react-parallax-tilt"

import user from "@/pages/api/user"
import { useRef } from "react"

export default function SignIn() {
  const userName = useRef("")
  const password = useRef("")

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/",
    })
  }

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='justify-around w-full h-full'>
        <div className='flex flex-col justify-center items-center '>
          <Tilt>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                rotate: [0, 5, -5, 5, 0],
                transition: { duration: 1, repeat: Infinity },
              }}
              className='m-8'
            >
              {/* /https://www.youtube.com/shorts/BTQHO-yP-CA */}
              <Image
                src={LogoImg}
                alt='Logo'
                width={120}
                height={120}
                className='rounded-full'
              />
            </motion.div>
          </Tilt>
        </div>

        <div className=' bg-gray-900 relative overflow-hidden flex justify-center items-center bg-opacity-10 rounded-2xl'>
          <div className=' h-128 w-96 bg-yellow-200 bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm'>
            <form className='h-full w-auto flex flex-col justify-evenly items-center'>
              <div className='text-white font-poppins text-2xl tracking-widest'>
                Acessar o Casarão
              </div>

              <input
                type='text'
                placeholder='email'
                className='input-text  rounded-md'
                onChange={(e) => (userName.current = e.target.value)}
              />
              <input
                type='password'
                placeholder='senha'
                className='input-text rounded-md'
                onChange={(e) => (password.current = e.target.value)}
              />

              <input
                type='Submit'
                className='cursor-pointer font-poppins rounded-md px-5 py-2 bg-gray-300 bg-opacity-20 hover:bg-yellow-300 hover:bg-opacity-80 hover:text-black'
                value={"Acessar"}
              />

              <div className='mt-16 grid space-y-4'>
                <button className='group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100'>
                  <div className='relative flex items-center space-x-4 justify-center'>
                    <img
                      src='https://tailus.io/sources/blocks/social/preview/images/google.svg'
                      className='absolute left-0 w-5'
                      alt='google logo'
                    />
                    <span className='block w-max tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base'>
                      Entrar com Google
                    </span>
                  </div>
                </button>
                <button
                  className='group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100'
                >
                  <div className='relative flex items-center space-x-4 justify-between'>
                    <img
                      src='https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg'
                      className='absolute left-0 w-5'
                      alt='Facebook logo'
                    />
                    <span className='block w-max tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base'>
                      Entrar com Facebook
                    </span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

