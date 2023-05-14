import Image from "next/image"
import Link from "next/link"

import ChildrenTitle from "@/components/children-title/page"
import { VscTools } from "react-icons/vsc"

export const metadata = {
  title: "Luthieria",
}

export default function Luthier() {
  return (
    <>
      <ChildrenTitle title='Luthieria' iconName={<VscTools size={54} />} />

      <div className=' w-auto bg-black/30 h-96  p-4'>
        <h1 className='text-4xl font-bold mb-4'>
          Serviço de Luthieria em instrumentos de corda
        </h1>
        <p className='text-yellow-300'>
          Se você é um músico que toca um instrumento de corda, sabe como é
          importante ter um instrumento bem cuidado e ajustado. É exatamente
          isso que nosso serviço de luthieria oferece. Nossa equipe de
          especialistas em instrumentos de corda tem anos de experiência em
          ajustes e reparos de violões, guitarras, baixos e outros instrumentos
          de corda. Usamos apenas as melhores técnicas e materiais para garantir
          que seu instrumento fique em perfeito estado. E o melhor de tudo é que
          nossos preços são competitivos e nosso serviço é rápido e confiável.
          Confie em nós para manter seu instrumento em perfeito estado e tocar
          com a melhor qualidade possível!
        </p>
      </div>
    </>
  )
}
