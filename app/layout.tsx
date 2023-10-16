import Header from '@/src/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tomas Quinteros - Portfolio',
  description: 'Frontend Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  )
}
