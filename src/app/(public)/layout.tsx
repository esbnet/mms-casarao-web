import { Header } from "@/components/header/page"
import { Footer } from "@/components/footer/page"

import Providers from "@/components/providers"

import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Home",
    template: "%s",
  },
  description: "Gestão de Agendamento de Serviços",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="bg-white/10 bg-casarao bg-no-repeat bg-center bg-cover">
      <Providers>
        <div className='flex flex-col w-full justify-between h-screen'>
          <Header />
          <div className='px-4'>
            {children}
          </div>
          <Footer />
        </div>
        </Providers>
      </body>
    </html>
  )
}
