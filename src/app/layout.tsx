import "../styles/globals.css"

import Providers from "@/components/providers"

type metaProps = {
  title: {
    template: string
  }
}

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
    <html lang='pt-BR'>
      <body>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  )
}
