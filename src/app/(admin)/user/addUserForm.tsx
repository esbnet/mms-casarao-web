"use client"

import { Prisma } from "@prisma/client"

import { BiPlus } from "react-icons/bi"

import { useReducer } from "react"
import Bug from "@/components/bug/page"

const formReducer = (
  state: any,
  event: { target: { name: string; value: any } }
) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  }
}

const prisma = Prisma

export default function AddUserForm() {
  const [formData, setFormData] = useReducer(formReducer, {})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (Object.keys(formData).length == 0) {
      return console.log("Não tem dados no formulário...")
    }
  }

  if (Object.keys(formData).length > 0) return <Bug message='Usuário cadastrado com sucesso!'/>

  return (
    <form
      className='grid lg:grid-cols-2 w-4/6 gap-4  bg-white shadow-lg rounded px-8 py-6 mb-4'
      onSubmit={handleSubmit}
    >
      <div className='mb-4 input-type'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='name'
        >
          Name
        </label>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='name'
          type='text'
          placeholder='Informe seu nome'
          name='name'
          onChange={setFormData}
          value={formData.name}
        />
      </div>

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
          placeholder='Informe seu melhor Email'
          name='email'
          onChange={setFormData}
          // value={form.email}
        />
      </div>

      <div className='mb-4'>
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
          placeholder='Informe sua senha'
          name='password'
          onChange={setFormData}
          // value={form.password}
        />
        <p className='text-red-500 text-xs italic'>
          Por favor, digite sua senha.
        </p>
      </div>

      <div className='flex gap-2 mb-6'>
        <div className='flex flex-col justify-center items-center'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='status-field'
          >
            Situação
          </label>
        </div>

        <div className='ml-12 flex flex-col justify-between'>
          <div className='form-check'>
            <input
              type='radio'
              value={"Active"}
              id='radioDefault1'
              name='status'
              className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
              onChange={setFormData}
            />
            <label
              htmlFor='radioDefault1'
              className='inline-block text-gray-800'
            >
              Ativo
            </label>
          </div>
          <div className='form-check'>
            <input
              type='radio'
              value={"Inactive"}
              id='radioDefault2'
              name='status'
              className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
              onChange={setFormData}
            />
            <label
              htmlFor='radioDefault2'
              className='inline-block text-gray-800'
            >
              Inativo
            </label>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <button
          className='flex justify-center items-center text-md w-2/6 bg-green-500  text-white font-bold py-2 px-4 border rounded-md focus:outline-none focus:shadow-outline hover:bg-gray-50 hover:border-green-500 hover:text-green-500'
          type='submit'
        >
          Adicionar
          <span>
            <BiPlus size={24}></BiPlus>
          </span>
        </button>
        <a
          className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
          href='#'
        >
          Esqueceru a Senha?
        </a>
      </div>
    </form>
  )
}
