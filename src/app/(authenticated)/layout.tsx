import "../../styles/globals.css"

import { Header } from "@/components/header/page"
import { Footer } from "@/components/footer/page"

// export const dynamic = 'auto'

export const metadata = {
  title: "mms - casarão",
  description: "Generated by Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
