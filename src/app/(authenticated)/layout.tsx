"use client"

import "../../styles/globals.css"
import styles from "../../styles/Home.module.css"

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
        <body className={styles.container}>
          <div className="flex">
            <div>
              <Leftbar />
            </div>
            <div>
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </QueryClientProvider>
  )
}
