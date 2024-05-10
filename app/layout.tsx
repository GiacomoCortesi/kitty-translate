import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
import KittyNavBar from '@/components/KittyNavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kitty Translate',
  description: 'Miao',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Head>
        <link rel='shortcut icon' href='favicon.ico' />
      </Head>
      <body className={inter.className}>
        <KittyNavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}
