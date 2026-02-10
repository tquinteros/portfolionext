import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tomás Quinteros - FullStack Developer Portfolio',
    short_name: 'TQ Portfolio',
    description: 'FullStack developer specializing in React, TypeScript, Next.js, Node.js, and MongoDB',
    start_url: '/',
    display: 'standalone',
    background_color: '#050816',
    theme_color: '#11998e',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
} 