import Image from "next/image"
import { Inter } from "@next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export default function Settings() {
  return (
    <div className='text-orange-400  bg-gray-900 min-h-screen'>
      <h1 className='text-orange-400'>Configurações</h1>
      <ul>
        <label htmlFor=''>CADASTROS</label>
        <li>
          <Link href={"/user"}>Usuário</Link>
        </li>
        <li>
          <Link href={"/environment"}>Ambiente</Link>
        </li>
        <li>
          <Link href={"/artist"}>Artista</Link>
        </li>
        <li>
          <Link href={"/band"}>Banda</Link>
        </li>
        <li>
          <Link href={"/function"}>Função</Link>
        </li>
        <li>
          <Link href={"/instrument"}>Instrumento</Link>
        </li>
        <li>
          <Link href={"/equipament"}>Equipamento</Link>
        </li>
        <li>
          <Link href={"/music"}>Música</Link>
        </li>
      </ul>
    </div>
  )
}
