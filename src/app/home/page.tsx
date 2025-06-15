import React from 'react'
import Options from '../components/Options'
import {options} from '@/app/lib/data'
export default function page() {
  return (
    <div className='border rounded  p-2 '>
      <Options data={options} />
    </div>
  )
}
