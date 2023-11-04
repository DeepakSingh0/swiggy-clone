import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToastContainer, } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/components/Navbar';
import Prvider from '../Redux/Prvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swiggy Clone',
  description: 'Swiggy clone',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Prvider>
      <Navbar />
        {children} 
      <ToastContainer />
      </Prvider>
      </body>
    </html>
  )
}
