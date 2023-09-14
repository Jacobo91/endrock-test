import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'
import { GlobalContextProvider } from './Context/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Shop',
  description: 'E commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
        <Navbar/>
        {children}
        <Footer/>
        </GlobalContextProvider>
        <Script src="https://kit.fontawesome.com/37b2f718fc.js" strategy='lazyOnload'></Script>
      </body>
    </html>
  )
}
