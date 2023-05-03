"use client"

import "../../styles/globals.css"

// import { Route, Routes } from "react-router-dom"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { Header } from "@/components/header/page"
import { Footer } from "@/components/footer/page"
import Sidebar from "@/components/sidebar/page"
import Home from "./page"
import Role from "./role/page"
import User from "./user/page"
import Settings from "./profile/page"
import Band from "./band/page"
import Artist from "./artist/page"

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang='PT-BR'>
        <body className=' bg-gray-900 text-stone-50'>
          <div className='flex'>
            <Sidebar />
            <div className='min-h-screen'>
              <Header />
              <div className='px-4'>{children}</div>
            </div>
          </div>
          <Footer />
          {/* <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/role' element={<Role />} />
            <Route path='/user' element={<User />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/band' element={<Band />} />
            <Route path='/artist' element={<Artist />} />
          </Routes> */}
        </body>
      </html>
    </QueryClientProvider>
  )
}
