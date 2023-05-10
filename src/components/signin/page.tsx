import { GiEntryDoor } from "react-icons/gi"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import Logout from "@/components/logout/page"

export default function Login() {
  const { data: session } = useSession()
  {
    if (session) {
      return (
        <>
          <button onClick={() => signOut()}>
            <Logout name={session!.user.name} age={30} />
          </button>
        </>
      )
    }

    return (
      <button onClick={() => signIn()}>
        <div className='bg-yellow-500/50 rounded-full flex flex-col justify-center items-center h-14 w-14 cursor-pointer hover:shadow-lg hover:shadow-slate-500/40'>
          <GiEntryDoor size={32} title='Acessar' />
        </div>
      </button>
    )
  }
}
