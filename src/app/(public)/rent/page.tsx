import Image from "next/image"
import Link from "next/link"

import ChildrenTitle from "@/components/children-title/page"
import { BsArrowLeftRight } from "react-icons/bs"

export const metadata = {
  title: "Alugueis",
  description: "Registro de agendamento de ensaio no Casarão Estúdios",

}

export default function Aluguel() {
  return (
    <>
      <ChildrenTitle
        title='Aluguel de Equipamentos'
        iconName={<BsArrowLeftRight size={54} />}
      />

      <div className=' w-auto bg-black/30 h-96 p-4'>
        <h1 className='text-4xl font-bold mb-4'>
          Aluguel de equipamentos para sonorização
        </h1>
        <p className='text-yellow-300'>
          Não há nada pior do que tocar em um show ou evento sem o equipamento
          adequado. Com nosso serviço de aluguel de equipamentos de sonorização,
          você nunca mais terá que se preocupar com isso. Oferecemos uma ampla
          variedade de equipamentos de alta qualidade, desde caixas de som até
          mesas de som e microfones, para que você possa ter certeza de que sua
          apresentação será perfeita. E o melhor de tudo é que nossos preços são
          acessíveis e nosso processo de aluguel é fácil e rápido. Não perca
          mais tempo procurando equipamentos, alugue conosco e tenha uma
          apresentação memorável!
        </p>
      </div>
    </>
  )
}
