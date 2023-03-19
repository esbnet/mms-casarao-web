"use client"

import { Logo } from "../logo/page"
import { Navbar } from "../navbar/page"
import Profile from "../profile/page"
import Settings from "../settings/page"

import { Toaster } from "react-hot-toast"

export function Header() {
  return (
    <div className='flex justify-around bg-yellow-500/60 shadow-slate-700 shadow-sm p-2'>
      <Logo />
      <div className='flex'>
        <Navbar />
      </div>
      <div className='flex gap-2'>
        <Profile name='Edmilson' age={25} />
        <Settings />
      </div>
      <Toaster/>
    </div>
  )
}
