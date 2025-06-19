import React from 'react'
import Image from 'next/image'



type Props = {data : {
  id: number,
  name: string,
  link: string
}[]}



export default function Navbar({data}: Props) {
  return (
    <div className='flex flex-col gap-8 pt-8 border p-2'>
        {/* symbols */}
        {data.map(i => (
          <div key={i.id} className='flex gap-2 '>
            <div className=" border rounded">
              <Image src={i.link} alt="" width={20} height={20} />
            </div>
            <div className=''>
              <h1>{i.name}</h1>
            </div>
          </div>
        ))}
        
    </div>
  )
}