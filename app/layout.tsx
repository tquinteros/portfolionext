import Header from '@/src/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tomas Quinteros - Portfolio',
  description: 'Experienced web developer with expertise in Next.js, TypeScript, Tailwind CSS, and more. Skilled in building web3 integrity, landing pages, and e-commerce, particularly using TiendaNube.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        {children}
      </body>
    </html>
  )
}
