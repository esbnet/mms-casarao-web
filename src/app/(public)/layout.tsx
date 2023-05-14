import { Header } from "@/components/header/page"
import { Footer } from "@/components/footer/page"

export const metadata = {
  title: "Home",
  description: "Gestão de Agendamento de Serviços",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col w-full justify-between h-screen bg-casarao bg-no-repeat bg-center bg-cover'>
      <Header />
      <div className='h-full'>
        <div className='px-4'>{children}</div>
      </div>
      <Footer />
    </div>
  )
}
