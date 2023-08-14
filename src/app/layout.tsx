import './globals.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}