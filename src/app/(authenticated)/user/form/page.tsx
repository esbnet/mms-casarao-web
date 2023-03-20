import { BiEdit, BiTrashAlt } from "react-icons/bi"
import { TbZoomMoney } from "react-icons/tb"

export default function Form() {
  return (
    <form
      className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      // onSubmit={handleSubmit}
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
          placeholder='Informe seu nome'
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
          placeholder='Informe seu melhor Email'
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
          placeholder='Informe sua senha'
          name='password'
          // value={form.password}
        />
        <p className='text-red-500 text-xs italic'>
          Por favor, digite sua senha.
        </p>
      </div>

      <div>
        <div className='form-check'>
          <input
            type='radio'
            value={"Active"}
            id='radioDefault1'
            name='status'
            className=' form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
          />
          <label htmlFor='radioDefault1' className='inline-block text-gray-800'>
            Ativo
          </label>
        </div>
        <div className='form-check'>
          <input
            type='radio'
            value={"Inctive"}
            id='radioDefault2'
            name='status'
            className=' form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
          />
          <label htmlFor='radioDefault2' className='inline-block text-gray-800'>
            Inativo
          </label>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <button
          className='text-md w-2/6 bg-green-500  text-white font-bold py-2 px-4 border rounded-md focus:outline-none focus:shadow-outline hover:bg-gray-50 hover:border-green-500 hover:text-green-500'
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
  )
}
