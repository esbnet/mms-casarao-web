"use client"
import React, { useState, useReducer } from "react"
import useSwr from "swr"

import toast from "react-hot-toast"

import { FaUserCog, FaPlus } from "react-icons/fa"
import { AiOutlineUserAdd } from "react-icons/ai"

import Table from "@/app/(authenticated)/user/table/page"
import Form from "@/app/(authenticated)/user/form/page"

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
    <main className=''>
      <h1 className='text-xl md:text-5xl font-bold py-10 flex items-center'>
        <div className='mr-4 p-4 rounded-full bg-slate-400'>
          <FaUserCog size={54} />
        </div>
        <div>Usuários</div>
      </h1>

      <div className='mx-auto flex justify-between py-5 border-b'>
        <div className='left flex gap-3'>
          <button className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800'>
            Add Usuário
            <span className='px-1'>
              <AiOutlineUserAdd size={23} />
            </span>
          </button>
        </div>
      </div>

      {/* collapsable */}
      <div className='container mx-auto'>
        <Form />
      </div>
      {/* table */}
      <Table />
    </main>
  )
}
