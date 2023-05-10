import Image from "next/image"
import Link from "next/link"

import ChildrenTitle from "@/components/children-title/page"
import { RxCalendar } from "react-icons/rx"


export const metadata = {
  title: 'Agendamentos',
  description: 'Registro de agendamento de ensaio no Casarão Estúdios',
}

export default function Scheduling() {
  return (
    <div className='min-h-screen'>
      <ChildrenTitle title='Agendamentos' iconName={<RxCalendar size={54} />} />
    </div>
  )
}
