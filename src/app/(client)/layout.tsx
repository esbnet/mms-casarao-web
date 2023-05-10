import { Header } from "@/components/header/page"
import { Footer } from "@/components/footer/page"

import Providers from "@/components/providers"

export const metadata = {
  title: {
    default: "Casarão Estúdios",
    template: "%s | mms",
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
      <body className="bg-white bg-opacity-10 bg-casarao bg-no-repeat bg-center bg-cover">
      <Providers>
        <div className='flex flex-col justify-between w-full h-screen'>
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
