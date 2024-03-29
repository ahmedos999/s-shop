
import './globals.css'
import { Inter, Rubik } from 'next/font/google'

//components
import Navbar from './components/Navbar'

import { Poppins } from 'next/font/google'
import ReduxProvider from '@/redux/provider'

const poppins = Poppins({ subsets: ['latin'],weight: ['400', '700'], })

export const metadata = {
  title: 'S-Shop',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>
        <Navbar></Navbar>
        {children}
        </ReduxProvider>
        </body>
    </html>
  )
}