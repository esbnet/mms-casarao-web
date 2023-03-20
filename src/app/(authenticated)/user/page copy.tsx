"use client"

import React, { useState, useReducer } from "react"
import useSwr from "swr"

import toast from "react-hot-toast"

import { FaUserCog, FaPlus } from "react-icons/fa"
import { AiOutlineUserAdd } from "react-icons/ai"
import Table from "@/app/(authenticated)/user/table/page"

interface UserProps {
  id: string
  name: string
  email: string
  password: string
}
;[]

interface FormData {
  name: string
  email: string
  password: string
}

const formReducer = (
  state: any,
  event: { target: { name: any; value: any } }
) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  }
}

export default function User() {
  const [formData, setFormData] = useReducer(formReducer, {})

  // const fetcher = (url: string) => fetch(url).then((r) => r.json())
  // const { data, error, isLoading } = useSwr("/api/userAPI", fetcher)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(formData)

    /*     if (isLoading) return <div>carregando...</div>

    const formData = new FormData(e.currentTarget)

    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    await fetch("/api/userAPI", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
      cache: "force-cache",
    })

    if (error) {
      toast.error("Erro ao cadastrar usuário!")
    } else {
      toast.success(`Usuário ${name} criado!`)
    } */
  }

  /*   const handleDelete = async () => {
    const id = ""
    const data = await fetch(`/api/userAPI/${id}`, { method: "DELETE" })
    if (error) {
      toast.error("Erro ao deletar usuário!")
    } else {
      toast.success("Usuário deletado!")
    }
  }

  const handleUpdate = async () => {
    const id = ""
    const data = await fetch(`/api/userAPI/${id}`, { method: "PUT" })
    if (error) {
      toast.error("Erro ao deletar usuário!")
    } else {
      toast.success("Usuário deletado!")
    }
  }

  const handleChange = () => {}
 */
  return (
    <main className='py-5 flex flex-col justify-center items-center  bg-gray-900 min-h-screen'>
      <h1 className='flex text-xl md:text-5xl text-center font-bold py-10'>
        Usuários{" - "}
        <span>
          {" "}
          <FaUserCog />{" "}
        </span>
      </h1>

      <div className='container mx-auto flex justify-between py-5 border-b'>
        <div className='left flex gap-3'>
          <button className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800'>
            Add Usuário{" "}
            <span className='px-1'>
              <AiOutlineUserAdd size={23} />
            </span>
          </button>
        </div>
      </div>

      {/*       <div className=' flex flex-col justify-center items-center'>
        <div className='w-full max-w-xs'>
          <form
            className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
            onSubmit={handleSubmit}
          >
            <div className='mb-4'>
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
                placeholder='Nome'
                name='name'
                // onChange={}
                // value={form.name}
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
                placeholder='Email'
                name='email'
                // value={form.email}
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
                name='password'
                // value={form.password}
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
                Cadastrar
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
 */}

      {/* collapsable */}

        <Table/>

      {/* table */}

{/*       <section className='flex flex-col justify-center antialiased bg-gray-100 text-gray-600 p-4'>
        <div className='h-full'>

          <div className='w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200'>
            <header className='px-5 py-4 border-b border-gray-100'>
              <h2 className='font-semibold text-gray-800'>Customers</h2>
            </header>
            <div className='p-3'>
              <div className='overflow-x-auto'>
                <table className='table-auto w-full'>
                  <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
                    <tr>
                      <th className='p-2 whitespace-nowrap'>
                        <div className='font-semibold text-left'>Name</div>
                      </th>
                      <th className='p-2 whitespace-nowrap'>
                        <div className='font-semibold text-left'>Email</div>
                      </th>
                      <th className='p-2 whitespace-nowrap'>
                        <div className='font-semibold text-left'>Spent</div>
                      </th>
                      <th className='p-2 whitespace-nowrap'>
                        <div className='font-semibold text-center'>Country</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className='text-sm divide-y divide-gray-100'>
                    {data?.map((user: UserProps) => (
                      <tr key={user.id}>
                        <td className='p-2 whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3'>
                              <img
                                className='rounded-full'
                                src='https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg'
                                width='40'
                                height='40'
                                alt='Alex Shatov'
                              />
                            </div>
                            <div className='font-medium text-gray-800'>
                              {user.id}
                            </div>
                          </div>
                        </td>
                        <td className='p-2 whitespace-nowrap'>
                          <div className='text-left'>{user.name}</div>
                        </td>
                        <td className='p-2 whitespace-nowrap'>
                          <div className='text-left font-medium text-green-500'>
                            {user.email}
                          </div>
                        </td>
                        <td className='p-2 whitespace-nowrap'>
                          <div className='text-lg text-center'>
                            {user.password}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
 */}      
    </main>
  )
}
