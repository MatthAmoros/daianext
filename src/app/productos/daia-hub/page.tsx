import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Daia HUB - Plataforma de exportación e importación | Daia Systems',
  description: 'Plataforma que simplifica y optimiza cada aspecto de la exportación e importación de fruta. Centralización logística, comunicación transparente y gestión documental.',
}

export default function DaiaHubPage() {
  const features = [
    'Centralización logística completa',
    'Comunicación transparente entre equipos',
    'Optimización financiera avanzada',
    'Gestión documental automatizada',
    'Seguimiento en tiempo real de embarques',
    'Portal de clientes integrado',
    'Reportes de rentabilidad por embarque',
    'Integración con agentes de carga'
  ]

  const benefits = [
    {
      title: 'Logística simplificada',
      description: 'Centraliza todas las operaciones logísticas en una sola plataforma, reduciendo errores y mejorando la eficiencia.'
    },
    {
      title: 'Comunicación eficiente',
      description: 'Mantén a todos los stakeholders informados en tiempo real con comunicación transparente y automatizada.'
    },
    {
      title: 'Control financiero',
      description: 'Optimiza la rentabilidad de cada embarque con análisis financieros detallados y proyecciones precisas.'
    },
    {
      title: 'Gestión documental',
      description: 'Automatiza la generación y gestión de documentos de exportación, cumpliendo con todas las normativas.'
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
          <span className="text-[#0057B8] font-medium">Daia HUB</span>
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
              Daia HUB
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Plataforma que simplifica y optimiza cada aspecto de la exportación e importación de fruta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto?interes=daia-hub">
                <Button variant="outline" size="lg">
                  Solicitar información
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/daiahub.png"
                alt="Daia HUB Dashboard"
                width={600}
                height={400}
                className="w-full h-full object-contain p-4"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Beneficios para tu operación</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-8 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Integración completa</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚢</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Agentes de Carga</h3>
                <p className="text-gray-600 text-sm">Conecta directamente con tus agentes de carga preferidos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sistemas ERP</h3>
                <p className="text-gray-600 text-sm">Integración nativa con Daia ERP y otros sistemas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏦</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sistemas Bancarios</h3>
                <p className="text-gray-600 text-sm">Conecta con bancos para gestión financiera automática</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para simplificar tu logística de exportación?</h2>
          <p className="text-xl mb-8 opacity-90">
            Descubre cómo Daia HUB puede optimizar cada embarque y maximizar tu rentabilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto?interes=daia-hub">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0057B8]">
                Agendar reunión
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}