import React from 'react'
import Image from 'next/image'

type Props = {data: {
    id: number,
    title: string,
    photo: string,
    description: string,
    class: string
}[]}



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

// ULTIMATE ENFORCEMENT
// type Props = {data: OptionType[]}

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




// Absolutely — this makes *perfect* sense, and it's a great way to internalize how TypeScript types vary based on the **structure of your props**.

// Below is a clear, step-by-step progression:

// ---

// ## ✅ 1. **Simple String Prop**

// You pass **a single string** to the component.

// ### Code:

// ```tsx
// type Props = { data: string }

// function Test({ data }: Props) {
//   return <h1>{data}</h1>
// }
// ```

// ### Usage:

// ```tsx
// <Test data="Hello World" />
// ```

// ---

// ## ✅ 2. **Array of Strings**

// You pass an **array of strings**, and loop through it using `.map()`.

// ### Code:

// ```tsx
// type Props = { data: string[] }

// function Test({ data }: Props) {
//   return (
//     <div>
//       {data.map((d, i) => (
//         <h1 key={i}>{d}</h1>
//       ))}
//     </div>
//   )
// }
// ```

// ### Usage:

// ```tsx
// <Test data={["One", "Two", "Three"]} />
// ```

// ---

// ## ✅ 3. **Single Object (Object Literal)**

// You pass a **single object** with multiple fields.

// ### Code:

// ```tsx
// type Props = { data: { name: string; age: number } }

// function Test({ data }: Props) {
//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.age}</p>
//     </div>
//   )
// }
// ```

// ### Usage:

// ```tsx
// <Test data={{ name: "Ethem", age: 31 }} />
// ```

// ---

// ## ✅ 4. **Array of Objects (Object Literals)**

// You pass an **array of objects**, and loop through it.

// ### Code:

// ```tsx
// type Person = {
//   name: string
//   age: number
// }

// type Props = { data: Person[] }

// function Test({ data }: Props) {
//   return (
//     <div>
//       {data.map((person, i) => (
//         <div key={i}>
//           <h1>{person.name}</h1>
//           <p>{person.age}</p>
//         </div>
//       ))}
//     </div>
//   )
// }
// ```

// ### Usage:

// ```tsx
// <Test data={[{ name: "Ethem", age: 31 }, { name: "Zeynep", age: 28 }]} />
// ```

// ---

// ## ✅ Summary Table

// | Structure        | TypeScript Type                         | Looping?   |
// | ---------------- | --------------------------------------- | ---------- |
// | Single string    | `data: string`                          | ❌          |
// | Array of strings | `data: string[]`                        | ✅ `.map()` |
// | Single object    | `data: { name: string, age: number }`   | ❌          |
// | Array of objects | `data: { name: string, age: number }[]` | ✅ `.map()` |

// ---

// Let me know if you want examples with **nested objects**, optional values, or conditionally rendered components as a next step!
