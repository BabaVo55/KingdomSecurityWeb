import React from 'react'
import Image from 'next/image'

// type Props = {data: {
//     id: number,
//     title: string,
//     photo: string,
//     description: string,
//     class: string
// }}

// export default function Options({data}: Props) {
//   return (
//     <div className='flex gap-4'>
      
//       {data.map((d) => (
//           <div key={d.id} className='flex flex-col border gap-2 rounded h-100 w-100'>
//               <Image src={d.photo} alt='' width={20} height={20} />
//               <h1>{d.title}</h1>
//               <p className='text-xs'>{d.description}</p>
//           </div>
//       ))}
   
//     </div>
//   )
// }


type Props = {data: OptionType[]}

export default function Options({data}: Props) {
  return (
    <div className='flex gap-4'>
      
      {data.map((d) => (
          <div key={d.id} className='flex flex-col border gap-2 rounded h-100 w-100'>
              <Image src={d.photo} alt='' width={20} height={20} />
              <h1>{d.title}</h1>
              <p className='text-xs'>{d.description}</p>
          </div>
      ))}
   
    </div>
  )
}

//---------------------------------------


// type OptionItem = {
//     id: number,
//     title: string,
//     photo: string,
//     description: string,
//     class: string
//   }
  
//   type Props = {
//       data: OptionItem[]
//     }
    
//     export default function Options({ data }: Props) {
//         return (
//             <div className="grid grid-cols-2 gap-4">
//               {data.map((d) => (
//                   <div key={d.id} className="border rounded p-4">
//                     {d.photo ? (
//                         <Image src={d.photo} alt={d.title} width={50} height={50} />
//                       ) : (
//                           <div className="w-[50px] h-[50px] bg-gray-200 flex items-center justify-center text-sm text-gray-500">
//                             No Image
//                           </div>
//                         )}
//                         <h2 className="font-bold">{d.title}</h2>
//                         <p>{d.description}</p>
//                   </div>
//                ))}
//             </div>
//          )
//      }


//---------------------------------------


// export default function Options({ data }: {data:   
//       {
//         id: number,
//         title: string,
//         photo: string,
//         description: string,
//         class: string
//       }
//     })
//   {
//   return (
//     <div className="grid grid-cols-2 gap-4">
//       {data.map((d) => (
//         <div key={d.id} className="border rounded p-4">
//           {d.photo ? (
//             <Image src={d.photo} alt={d.title} width={50} height={50} />
//           ) : (
//             <div className="w-[50px] h-[50px] bg-gray-200 flex items-center justify-center text-sm text-gray-500">
//               No Image
//             </div>
//           )}
//           <h2 className="font-bold">{d.title}</h2>
//           <p>{d.description}</p>
//         </div>
//       ))}
//     </div>
//   )
// }