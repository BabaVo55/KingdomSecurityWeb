// export const options = [
//   {
//     id: 1,
//     title: 'Security',
//     photo: '/Security.png',
//     description: 'Protective services and more.',
//     class: ''
//   },
//   {
//     id: 2,
//     title: 'Academy',
//     photo: '/Academy.png',
//     description: 'Training programs and certifications.',
//     class: ''
//   },
//   {
//     id: 3,
//     title: 'Cyber',
//     photo: '/Cyber.png',
//     description: 'Cybersecurity and digital defense.',
//     class: 2
//   }
// ]



//--------------------


type OptionType = {
  id: number,
  title: string,
  photo: string,
  description: string,
  class: string
}

export const options: OptionType[] = [
  {
    id: 1,
    title: 'Security',
    photo: '/Security.png',
    description: 'Protective services and more.',
    class: ''
  },
  {
    id: 2,
    title: 'Academy',
    photo: '/Academy.png',
    description: 'Training programs and certifications.',
    class: ''
  },
  {
    id: 3,
    title: 22,
    photo: '/Cyber.png',
    description: 'Cybersecurity and digital defense.',
    class: 2  // ❌ Now TypeScript will throw an error here
  }
]
