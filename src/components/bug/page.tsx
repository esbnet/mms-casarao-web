import { BiCheck } from "react-icons/bi"

interface Props {
  message: string
}

export default function Bug(props: Props) {
  return (
    <div className='success container mx-auto'>
      <div className='flex justify-center mx-auto border border-red-200 bg-red-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5'>
        {props.message} <BiCheck size={24} color={"rgb(248,113,113"} />
      </div>
    </div>
  )
}
