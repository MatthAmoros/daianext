import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Daia Calidad - Sistema de gestión de calidad frutícola | Daia Systems',
  description: 'Sistema especializado en gestión de calidad para la industria frutícola. Control de procesos, cumplimiento normativo y certificaciones de calidad.',
}

export default function DaiaCalidadPage() {
  const features = [
    'Control de procesos de calidad',
    'Gestión de certificaciones',
    'Cumplimiento normativo automatizado',
    'Auditorías y reportes',
    'Trazabilidad de calidad',
    'Control de puntos críticos',
    'Gestión de no conformidades',
    'Dashboards de calidad en tiempo real'
  ]

  const benefits = [
    {
      title: 'Cumplimiento garantizado',
      description: 'Asegura el cumplimiento de todas las normativas y estándares de calidad nacionales e internacionales.'
    },
    {
      title: 'Reducción de riesgos',
      description: 'Identifica y mitiga riesgos de calidad antes de que afecten tu producción y exportación.'
    },
    {
      title: 'Eficiencia operacional',
      description: 'Optimiza los procesos de control de calidad reduciendo tiempos y costos operacionales.'
    },
    {
      title: 'Certificaciones ágiles',
      description: 'Facilita la obtención y mantenimiento de certificaciones de calidad con documentación automática.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-[#0057B8]">Inicio</Link>
          <span>/</span>
          <Link href="/productos" className="hover:text-[#0057B8]">Productos</Link>
          <span>/</span>
          <span className="text-[#0057B8] font-medium">Daia Calidad</span>
        </nav>

        {/* Back button */}
        <Link
          href="/productos"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#0057B8] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Volver a productos</span>
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Daia Calidad
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sistema especializado en gestión de calidad para la industria frutícola con control integral de procesos y cumplimiento normativo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex items-center space-x-2">
                <ExternalLink size={20} />
                <span>Ver demo</span>
              </Button>
              <Button variant="outline" size="lg">
                Solicitar información
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/images/daia-calidad-preview.png"
                alt="Daia Calidad Dashboard"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Características principales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-6 bg-white rounded-lg shadow-sm border">
                <CheckCircle className="text-[#0057B8] mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Beneficios para tu empresa</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-8 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para asegurar la calidad de tu producción?</h2>
          <p className="text-xl mb-8 opacity-90">
            Descubre cómo Daia Calidad puede garantizar los más altos estándares de calidad en tu operación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="white" size="lg" className="flex items-center space-x-2">
              <ExternalLink size={20} />
              <span>Probar demo gratuita</span>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0057B8]">
              Agendar reunión
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}