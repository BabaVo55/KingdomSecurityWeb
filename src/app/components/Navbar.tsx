import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


type Props = {data : {
  id: number,
  name: string,
  img: string,
  href: string;
}[]}



export default function Navbar({data}: Props) {
  // data.map(i => {
  //   console.log('Icon data:', JSON.stringify(i, null, 2));
  // })

  return (
    <div className='flex flex-col gap-8 pt-8 p-2'>
        {/* symbols */}
        {data.map(i => (
          <Link key={i.id} href={i.href}>
            <div className='flex gap-1 '>
              <div>
                <Image src={i.img} alt="" width={20} height={20} />
              </div>
                <div className='text-sm'>
                  <h1>{i.name}</h1>
                </div>
            </div>
          </Link>
        ))}
    </div>
  )
}