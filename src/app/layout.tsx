import "../styles/globals.css"

import { Inter } from "@next/font/google"
import Provider from "./Provider"

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
        <Provider>
          <div>{children}</div>
        </Provider>
      </body>
    </html>
  )
}
