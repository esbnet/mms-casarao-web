import { ReactNode } from "react"

interface Props {
  title: string
  iconName: ReactNode
}

export default function ChildrenTitle({ title, iconName }: Props) {
  return (
    <h1 className='text-xl md:text-5xl font-bold py-10 flex items-center'>
      <div className='mr-4 p-4 rounded-full bg-slate-400'>
        {iconName}
      </div>
      <div>{title}</div>
    </h1>
  )
}
