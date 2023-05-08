import { Header } from "@/components/header/page"
import { Footer } from "@/components/footer/page"

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
      <body>
        <div className='flex flex-col justify-between w-full h-screen'>
          <Header />
          <div className='px-4'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
