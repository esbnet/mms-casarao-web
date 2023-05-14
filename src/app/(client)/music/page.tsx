import Image from "next/image"
import Link from "next/link"

import ChildrenTitle from "@/components/children-title/page"
import { GiMusicalScore } from "react-icons/gi"

export const metadata = {
  title: "Casarão | Músicas",
  description: "Generated by Next.js",
}

export default function Role() {
  return (
    <div className='min-h-screen'>
      <ChildrenTitle title='Musicas' iconName={<GiMusicalScore size={54} />} />
    </div>
  )
}
