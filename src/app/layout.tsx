import "../styles/globals.css"

import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

type metaProps = {
  title: {
    template: string
  }
}

export const metadata: metaProps = {
  title: {
    template: "Casarão | %s",
  },
} 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-BR'>
      <body className=' bg-gray-900 text-stone-50'>
        <div className='px-4'>{children}</div>
      </body>
    </html>
  )
}
