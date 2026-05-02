import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'CaféTrace AI - Trazabilidad Inteligente del Café del Cauca',
  description: 'Plataforma tecnológica de trazabilidad, comercialización y recomendación inteligente de café del Cauca, Colombia. Del caficultor a tu taza.',
  keywords: ['café', 'cauca', 'colombia', 'trazabilidad', 'comercio justo', 'caficultores'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
