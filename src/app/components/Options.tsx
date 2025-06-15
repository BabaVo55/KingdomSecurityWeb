import React from 'react'
import Image from 'next/image'
type Props = {data: {
    id: number,
    title: string,
    photo: string,
    description: string,
    class: string


}}

export default function Options({data}: Props) {
  return (
    {data.map(d => (
        <div>
            <Image src={d.photo} alt='' width={20} height={20} />
        </div>
    ))}
   
  )
}