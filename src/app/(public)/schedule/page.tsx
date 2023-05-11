import Image from "next/image"
import Link from "next/link"

import ChildrenTitle from "@/components/children-title/page"
import { RxCalendar } from "react-icons/rx"

export const metadata = {
  title: "Agendamentos",
  description: "Registro de agendamento de ensaio no Casarão Estúdios",
}

export default function Schedule() {
  return (
    <div className='min-h-screen'>
      <ChildrenTitle title='Agendamentos' iconName={<RxCalendar size={54} />} />

      <div className=' w-auto bg-black/30 h-96 text-white p-4'>
        <h1 className='text-4xl font-bold mb-4'>Agendamento de Ensaio</h1>
        <p className='text-yellow-300'>
          Se você é um músico ou faz parte de uma banda, sabe como é importante
          ter um espaço adequado para ensaiar e praticar suas músicas. E é
          exatamente isso que nosso serviço de agendamento oferece: um espaço
          confortável e equipado para que você possa praticar e aprimorar suas
          habilidades musicais. Além disso, nosso processo de agendamento é
          simples e fácil de usar, para que você possa reservar sua vaga com
          apenas alguns cliques. Venha fazer parte da nossa comunidade musical e
          comece a praticar em um ambiente profissional!
        </p>
      </div>
    </div>
  )
}
