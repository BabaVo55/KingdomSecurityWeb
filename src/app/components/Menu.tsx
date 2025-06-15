import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
type Props = {}

export default function Menu({}: Props) {
  return (
        <div className="flex justify-between">
            <div className='flex justify-center w-full'>
                <Link href='/home'>
                  <Image src="/Large-logo-no-bg.png" alt="" width={300} height={300}/>
                </Link>
            </div>
            <div className="flex gap-4">
                <Link href='/home'>
                  <Image src="/Apps.png" alt="" width={20} height={20}/>
                </Link>
                <Link href='/home'>
                  <Image src="/Search.png" alt="" width={20} height={20}/>
                </Link>
                <Link href='/settings'>
                  <Image src="/Settings.png" alt="" width={20} height={20}/>
                </Link>
            </div>
        </div>
    )
}