"use client"

import { signIn } from "next-auth/react"

import Image from "next/image"
import { motion } from "framer-motion"
import LogoImg from "../../../assets/images/logo.png"
import Tilt from "react-parallax-tilt"

import { useForm } from "react-hook-form"

export default function SignIn() {
  const { register, handleSubmit } = useForm()

  function handleSignIn(data: any) {
    console.log(data)
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='justify-center items-center'>
        <div className='flex justify-center items-center m-auto'>
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

        <div className='flex justify-center items-center'>
          <div className='z-10 w-96 bg-black-200 bg-opacity-10 shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-md rounded-md'>
            <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
              <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight'>
                  Acessar sua conta
                </h2>
              </div>

              <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form
                  className='space-y-6'
                  action='#'
                  method='POST'
                  onSubmit={handleSubmit(handleSignIn)}
                >
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium leading-6'
                    >
                      Email address
                    </label>
                    <div className='mt-2'>
                      <input
                        {...register("email")}
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div>
                    <div className='flex items-center justify-between'>
                      <label
                        htmlFor='password'
                        className='block text-sm font-medium leading-6'
                      >
                        Password
                      </label>
                      <div className='text-sm'>
                        <a
                          href='#'
                          className='font-semibold text-yellow-300 hover:text-yellow-200 hover:border-b hover:border-spacing-1'
                        >
                          Esqueceu a senha?
                        </a>
                      </div>
                    </div>
                    <div className='mt-2'>
                      <input
                        {...register("password")}
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type='submit'
                      className='flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-300 hover:text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300'
                    >
                      Entrar
                    </button>
                  </div>
                </form>

                <p className='mt-10 text-center text-sm'>
                  Não é membro?{" "}
                  <a
                    href='#'
                    className='font-semibold leading-6 text-yellow-300 hover:text-yellow-200 hover:border-b hover:border-spacing-1'
                  >
                    Registrar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
