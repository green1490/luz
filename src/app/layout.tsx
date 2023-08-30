import './globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type { Metadata } from 'next'
import DarkMode from '@/components/darkMode'

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
      <body>
        <DarkMode>
          {children}
        </DarkMode>
        </body>
    </html>
  )
}