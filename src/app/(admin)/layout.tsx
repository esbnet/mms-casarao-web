"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { Header } from "@/components/header/page"
import { Footer } from "@/components/footer/page"
import Sidebar from "@/components/sidebar/page"
import Head from "next/head"

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <title>Usuários - Casarão</title>
      </Head>
      <html lang='pt-BR'>
        <QueryClientProvider client={queryClient}>
          <body className=' bg-stone-50 text-gray-800'>
            <div className='flex flex-row'>
              <div className='flex flex-1'>
                <Sidebar />
              </div>
              <div className='flex flex-col justify-between w-full h-screen'>
                <Header />
                <div className='px-4'>{children}</div>
                <div className='bottom-auto'>
                  <Footer />
                </div>
              </div>
            </div>
          </body>
        </QueryClientProvider>
      </html>
    </>
  )
}
