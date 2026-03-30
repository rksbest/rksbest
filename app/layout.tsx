import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RKS.Best - Gratitude Universe',
  description: 'Professional portfolio and resume',
  openGraph: {
    title: 'RKS.Best - Gratitude Universe',
    description: 'Professional portfolio and resume',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[hsl(var(--background))] text-[hsl(var(--foreground))]`}>
        {children}
      </body>
    </html>
  )
}
