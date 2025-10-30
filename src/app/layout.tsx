import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Daia Systems - Especialistas en sistemas de gestión frutícola',
    template: '%s | Daia Systems',
  },
  description:
    'Desarrollo de sistemas de gestión frutícola y herramientas para la agroindustria. Especialistas en soluciones tecnológicas para la industria frutícola.',
  keywords: [
    'Daia Systems',
    'Daia ERP',
    'Daia HUB',
    'Agroindustria',
    'Fruticultura',
    'Sistemas de gestión',
    'Business Intelligence',
    'Inteligencia de negocios',
    'Tecnología frutícola',
    'Innovación agroindustrial',
  ],
  authors: [{ name: 'Daia Systems' }],
  creator: 'Daia Systems',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://daia.cl',
    siteName: 'Daia Systems',
    title: 'Daia Systems - Especialistas en sistemas de gestión frutícola',
    description:
      'Desarrollo de sistemas de gestión frutícola y herramientas para la agroindustria.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Daia Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daia Systems - Especialistas en sistemas de gestión frutícola',
    description:
      'Desarrollo de sistemas de gestión frutícola y herramientas para la agroindustria.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
