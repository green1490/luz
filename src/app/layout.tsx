import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luz',
  description: 'Forum like website',
  robots: {
    follow: false,
    notranslate: true
  },
  authors: {
    name: "green1490",
    url: "https://github.com/green1490"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
//+216 97856585