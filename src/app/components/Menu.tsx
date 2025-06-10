import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
type Props = {}

export default function Menu({}: Props) {
  return (
        <div className="flex justify-between">
            <div className='flex justify-end'>
                <Link href='/home'>
                  <Image src="/Large-logo-no-bg.png" alt="" width={300} height={300}/>
                </Link>
            </div>
            <div className="flex ">
                <Link href='/home'>
                  <Image src="/Large-logo-no-bg.png" alt="" width={50} height={50}/>
                </Link>
                <Link href='/home'>
                  <Image src="/Large-logo-no-bg.png" alt="" width={50} height={50}/>
                </Link>
                <Link href='/home'>
                  <Image src="/Large-logo-no-bg.png" alt="" width={50} height={50}/>
                </Link>
            </div>
        </div>
    )
}