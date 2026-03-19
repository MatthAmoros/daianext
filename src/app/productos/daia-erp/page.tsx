import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Daia ERP - Gestión integral para planta de proceso | Daia Systems',
  description: 'Gestión integral para planta de proceso de fruta fresca. Trazabilidad desde recepción hasta despacho, control de materiales, etiquetado y más.',
}

export default function DaiaERPPage() {
  const features = [
    'Trazabilidad desde recepción en campo hasta despacho',
    'Gestión de materiales con inventario valorizado (FIFO, PMP)',
    'Módulo de calidad con muestreo en recepción y despacho',
    'Etiquetado compatible con Zebra, Bixolon y Datamax',
    'Panel Piloto para supervisión de línea en tiempo real',
    'Gestión de envases y canastillas por productor y campo',
    'Módulo de mantenimiento preventivo y correctivo',
    'Integración con SAP B1, Softland, Odoo, Tomra, Aweta, Unitec'
  ]

  const benefits = [
    {
      title: 'Trazabilidad total',
      description: 'Llevamos la trazabilidad de tus productos partiendo por su recepción desde el campo hasta su despacho. Siempre tendrás información segura y no alterable.'
    },
    {
      title: 'Plataforma centralizada',
      description: 'Nuestra plataforma centraliza los datos de todos tus procesos con una interfaz simple y amigable para un acceso sencillo.'
    },
    {
      title: 'Reportes personalizables',
      description: 'Diseñamos reportes personalizables y actualizables para presentar tus propios indicadores y tomar decisiones basadas en datos.'
    },
    {
      title: 'Gestión de materiales integrada',
      description: 'Una gestión de materiales vinculada con tu producción, para automatizar rebajas masivas por consumo con reportes exportables para integración contable.'
    },
    {
      title: 'Integración con tu ecosistema',
      description: 'Interfaces de automatización compatibles con los líderes del mercado: Tomra, Aweta, Unitec, SAP B1, Softland, HubCrop, Odoo y más.'
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
          <span className="text-[#0057B8] font-medium">Daia ERP</span>
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
              Daia ERP
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Gestión integral para planta de proceso de fruta fresca. El corazón de la gestión empresarial frutícola.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto?interes=daia-erp">
                <Button variant="outline" size="lg">
                  Solicitar información
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/daiaerp.png"
                alt="Daia ERP Dashboard"
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
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
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
          <h2 className="text-3xl font-bold mb-4">¿Listo para optimizar tu gestión frutícola?</h2>
          <p className="text-xl mb-8 opacity-90">
            Descubre cómo Daia ERP puede transformar tu operación y maximizar tu rentabilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto?interes=daia-erp">
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