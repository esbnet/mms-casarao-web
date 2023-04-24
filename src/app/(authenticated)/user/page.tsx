"use client"

import { useState } from "react"

import toast from "react-hot-toast"

import { FaUserCog } from "react-icons/fa"
import { AiOutlineUserAdd } from "react-icons/ai"
import Form from "./form/page"
import Table from "./table/page"

export default function User() {
  const [visible, setVisible] = useState(false)

  const handler = () => {
    setVisible(!visible)
  }

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
  // }

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
    <main className=' min-h-screen'>
      <h1 className='text-xl md:text-5xl font-bold py-10 flex items-center'>
        <div className='mr-4 p-4 rounded-full bg-slate-400'>
          <FaUserCog size={54} />
        </div>
        <div>Usuários</div>
      </h1>

      <div className='mx-auto flex justify-between py-5 border-b mb-4'>
        <div className='left flex gap-3'>
          <button
            onClick={handler}
            className=' flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800'
          >
            Add Usuário
            <span className='px-1'>
              <AiOutlineUserAdd size={23} />
            </span>
          </button>
        </div>
      </div>

      {/* collapsable */}
      {visible ? <Form /> : <></>}
      {/* table */}
      <div className='container mx-auto mb-4'>
        <Table />
      </div>
    </main>
  )
}
