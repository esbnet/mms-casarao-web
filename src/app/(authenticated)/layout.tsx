"use client"

import "../../styles/globals.css"
import styles from "../../styles/Home.module.css"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { Header } from "@/components/header/page"
import { Footer } from "@/components/footer/page"
import { useState } from "react"

const queryClient = new QueryClient()

// export const metadata = {
//   title: "mms - casarão",
//   description: "Generated by Next.js",
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <QueryClientProvider client={queryClient}>
      <html lang='PT-BR'>
        <body className={styles.container}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </QueryClientProvider>
  )
}
