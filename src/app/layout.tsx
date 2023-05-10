import "../styles/globals.css"

import Providers from "@/components/providers"
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
    <html lang='pt-BR' className={inter.className}>
      <body className=' bg-stone-50 text-gray-800'>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  )
}
