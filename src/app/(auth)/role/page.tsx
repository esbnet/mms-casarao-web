import ChildrenTitle from "@/components/children-title/page"
import Image from "next/image"
import Link from "next/link"

import { SlSettings } from "react-icons/sl"


export const metadata = {
  title: "Papéis",
  description: "Generated by Next.js",
}

export default function Role() {

  return (
    <div className='min-h-screen'>
      <ChildrenTitle title="Papéis" iconName={<SlSettings size={54}/>}/>
    </div>
  )
}