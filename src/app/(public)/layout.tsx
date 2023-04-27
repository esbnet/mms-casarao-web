import { Header } from "@/components/header/page"
import "../../styles/globals.css"

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
    <html lang='pt-BR'>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
