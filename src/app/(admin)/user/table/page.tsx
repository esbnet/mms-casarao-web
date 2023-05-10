"use client"

import toast from "react-hot-toast"
import { BiEdit, BiTrashAlt } from "react-icons/bi"
import { TbZoomMoney } from "react-icons/tb"
import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../../../../lib/helper"
import Image from "next/image"
import moment from "moment"

interface IUserData {
  id?: string
  name: string
  email: string
  password: string
  status: string
  avatar_url: string
  createdAt: string
  updatedAt: string
}
;[]

export default function Table() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["usersData"],
    queryFn: getUsers,
  })

  if (error) {
    toast("An error has occurred: " + error)
  }
  if (isLoading) {
    return <div>Carregando...</div>
  } else {
    return (
      <table className='min-w-full table-fixed rounded px-8 py-6 mb-4 border-separate shadow-lg'>
        <thead className='text-xs font-semibold uppercase text-gray-400'>
          <tr className='bg-gray-800'>
            <th className='px-16 p-2'>
              <span className='font-semibold'>Name</span>
            </th>
            <th className='p-2 '>
              <div className='font-semibold'>Email</div>
            </th>
            <th className='p-2 '>
              <div className='font-semibold'>Status</div>
            </th>
            <th className='p-2 '>
              <div className='font-semibold text-center'>Último Acesso</div>
            </th>
            <th className='p-2 '>
              <div className='font-semibold text-center'>Ações</div>
            </th>
          </tr>
        </thead>

        <tbody className='bg-gray-200 text-sm divide-y divide-gray-100'>
          {data?.map((user: IUserData) => (
            <tr key={user.id} className='bg-gray-50 text-center'>
              <td className='px-2 py-1 flex items-center gap-4 bg-rose-500'>
                <Image
                  className='h-8 w-8 rounded-full object-cover'
                  src='https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg'
                  width='32'
                  height='32'
                  alt='Alex Shatov'
                />
                <span className='  text-gray-800'>{user.name}</span>
              </td>
              <td className='px-16 bg-slate-300 '>
                <span className=''>{user.email}</span>
              </td>
              <td className='px-16 '>
                {user.status == "ATIVO" ? (
                  <span className='text-left font-medium text-white bg-green-500 px-5 py-1 rounded-full cursor-pointer'>
                    ativo
                  </span>
                ) : (
                  <span className='text-left font-medium text-white bg-rose-500/70 px-5 py-1 rounded-full cursor-pointer'>
                    cancelado
                  </span>
                )}
              </td>
              <td className='px-16 '>
                <span className='text-center'>
                  {moment(user.updatedAt).format("DD/MM/YYYY hh:mm")}
                </span>
              </td>
              <td className='px-16'>
                <div className='flex justify-around gap-5'>
                  <button>
                    <TbZoomMoney
                      size={25}
                      color={"#2467ec"}
                      title='Financeiro'
                    />
                  </button>
                  <button>
                    <BiEdit size={25} color={"#22c55e"} title='Editar' />
                  </button>
                  <button>
                    <BiTrashAlt size={25} color={"#f43f5e"} title='Excluir' />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}
