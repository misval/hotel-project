import localFont from 'next/font/local'
import { Work_Sans } from 'next/font/google'

const greatVibes = localFont({ src: './../../../public/fonts/Boska-Regular.woff2' })
const greatVibesLight = localFont({ src: './../../../public/fonts/Boska-Light.woff2' })

const workSans = Work_Sans({ subsets: ['latin'], weight: '300' })

export { greatVibes, workSans, greatVibesLight } 