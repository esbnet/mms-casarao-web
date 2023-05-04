import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: 'Agendamentos',
  description: 'Página de agendamentos de ensaios no Casarão Estúdios',
}

export default function Appointment() {
  return (
    <section>
      <div className='text-orange-400 bg-gray-900 min-h-screen'>Agenda!</div>
    </section>
  )
}
