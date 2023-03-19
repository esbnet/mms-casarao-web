"use client"

import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()

  return (
    <div className=' mt-48  flex flex-col justify-center items-center'>
      <h1 className=' font-semibold text-2xl my-4'>Login</h1>
      <div className='w-full max-w-xs'>
        <form
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
          onSubmit={(e) => {
            router.push("/")
            e.preventDefault()
          }}
        >
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Email'
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Senha
            </label>
            <input
              className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='Senha'
            />
            <p className='text-red-500 text-xs italic'>
              Por favor, digite sua senha.
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Entrar
            </button>
            <a
              className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
              href='#'
            >
              Esqueceru a Senha?
            </a>
          </div>
        </form>
        <p className='text-center text-gray-500 text-xs mb-4'>
          &copy;2023 Quarkscode All rights reserved.
        </p>
      </div>
    </div>
  )
}
