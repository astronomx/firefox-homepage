import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import localFont from '@next/font/local'

const inter = Inter({ subsets: ['latin'] })

const pixelFont = localFont({ src: '../../fonts/ProggyCleanCENerdFont-Regular.ttf' })

export const metadata: Metadata = {
  title: 'New Tab',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pixelFont.className}>{children}</body>
    </html>
  )
}
