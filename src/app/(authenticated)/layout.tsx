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
      <html lang='pt-BR'>
        <body className=' bg-gray-900 text-stone-50'>
          <div className='flex flex-row'>
            <Sidebar />
            <div className='flex flex-col bg-yellow-200 w-full'>
              <Header />
              <div className='px-4'>{children}</div>
            </div>
          </div>
          <Footer />
        </body>
      </html>
    </QueryClientProvider>
  )
}
