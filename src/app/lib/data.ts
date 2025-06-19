export const options = [
  {
    id: 1,
    title: 'Security',
    photo: '/SecurityGuard.png',
    description: 'Protective services and more.',
    class: ''
  },
  {
    id: 2,
    title: 'Cyber',
    photo: '/CyberSecurity.png',
    description: 'Cybersecurity and digital defense.',
    class: 2
  },
  {
    id: 3,
    title: 'Academy',
    photo: '/SecurityEducation.png',
    description: 'Training programs and certifications.',
    class: ''
  },
]

export const icons = [
  {
    id:1,
    name:'home',
    img: '/home.png',
    href: '/home'
  },
  {
    id:2,
    name:'profile',
    img: '/user.png',
    href: 'profile'
  },
  {
    id:3,
    name:'guard',
    img: '/guard.png',
    href: 'guard'
  },
  {
    id:4,
    name:'booking',
    img: '/booking.png',
    href: 'booking'
  },
  {
    id:5,
    name:'cyber',
    img: '/cyber.png',
    href: 'cyber'
  },
  {
    id:6,
    name:'info',
    img: '/info.png',
    href: 'info'
  },
  {
    id:7,
    name:'settings',
    img: '/setting.png',
    href: 'settings'
  }
]

//--------------------


// type OptionType = {
//   id: number,
//   title: string,
//   photo: string,
//   description: string,
//   class: string
// }

// export const options: OptionType[] = [
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
//     title: 22,
//     photo: '/Cyber.png',
//     description: 'Cybersecurity and digital defense.',
//     class: 2  // ❌ Now TypeScript will throw an error here
//   }
// ]
