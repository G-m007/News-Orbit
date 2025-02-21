import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import GoogleAdsense from '@/components/GoogleAdsense';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'News Orbit',
  description: 'Your Gateway to Global News',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <GoogleAdsense />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-900`}>
        <Header />
        <main className="flex-1 container mx-auto px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}