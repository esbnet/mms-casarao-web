import { BiEdit, BiTrashAlt } from "react-icons/bi"
import { TbZoomMoney } from "react-icons/tb"

export default function Table() {
  return (
    <main>
      <table className='min-w-full table-fixed bg-gray-200 border-separate '>
        <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
          <tr className='bg-gray-800'>
            <th className='px-16 p-2  text-left'>
              <span className='text-left text-gray-200'>Name</span>
            </th>
            <th className='p-2 '>
              <div className='font-semibold text-left'>Email</div>
            </th>
            <th className='p-2 '>
              <div className='font-semibold text-left'>Status</div>
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
          {/* {data?.map((user: UserProps) => ( */}
          <tr key={"user.id"} className='bg-gray-50 text-center'>
            <td className='px-16 py-2 flex flex-row items-center '>
              <div className='flex items-center'>
                {/* <div className='w-auto h-auto flex-shrink-0 mr-2 sm:mr-3'>
                <img
                  className='rounded-full'
                  src='https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg'
                  width='40'
                  height='40'
                  alt='Alex Shatov'
                />
                <span className='text-center ml-2 font-semibold'>test</span>
              </div> */}
                <div className='font-medium text-gray-800'>
                  {"Edmilson Soares Bezerra"}
                </div>
              </div>
            </td>
            <td className='px-16 py-2 text-left bg-slate-300 '>
              <span className=''>esbnet@gmail.com asdf asdf sdfasdf</span>
            </td>
            <td className='px-16 py-2 '>
              <span className='text-left font-medium text-white bg-green-500 px-5 py-1 rounded-full cursor-pointer'>
                ativo
              </span>
            </td>
            <td className='px-16 py-2 '>
              <span className='text-lg text-center'>{"25/03/2023"}</span>
            </td>
            <td className='px-16 py-2'>
              <div className='flex justify-around gap-5'>
                <button>
                  <TbZoomMoney size={25} color={"#2467ec"} title='Financeiro' />
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
          {/* ))} */}
        </tbody>
      </table>
    </main>
  )
}
