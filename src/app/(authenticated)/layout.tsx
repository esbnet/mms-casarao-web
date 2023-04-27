"use client"

import "../../styles/globals.css"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { Header } from "@/components/header/page"
import { Footer } from "@/components/footer/page"
import { Leftbar } from "@/components/leftbar/page"

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang='PT-BR'>
        <body className=" bg-gray-900 text-stone-50">
          <div className='flex'>
            <div>
              <Leftbar />
            </div>
            <div className='w-full ml-[14rem] min-h-screen '>
              <Header />
              <div className="px-4">{children}</div>
            </div>
          </div>
          <Footer />
        </body>
      </html>
    </QueryClientProvider>
  )
}
