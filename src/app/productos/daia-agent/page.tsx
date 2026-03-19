import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import ScreenshotGallery from '@/components/ui/ScreenshotGallery'

export const metadata: Metadata = {
  title: 'Daia Agent - Intermediario para líneas de producción agroindustrial | Daia Systems',
  description: 'Daia Agent es un middleware que conecta ERPs y líneas de producción agroindustrial mediante APIs genéricas. Integración con clasificadores Tomra, MAF, Unitec y Aweta, control PLC y etiquetado automático.',
}

export default function DaiaAgentPage() {
  const features = [
    'Intermediario independiente del ERP de destino',
    'Integración con clasificadores Tomra, MAF, Unitec y Aweta',
    'Control de salidas PLC en tiempo real (Modbus TCP)',
    'Sistema de etiquetado automático ZPL (Zebra, Honeywell)',
    'Gestión de paletizado y trazabilidad completa',
    'Eliminación de ingresos manuales de datos',
    'Control de vaciado de bins por lote',
    'Indicadores de operador en tiempo real'
  ]

  const benefits = [
    {
      title: 'Interoperabilidad total',
      description: 'Conecta cualquier línea de empaquetado o calibración con tu ERP mediante APIs genéricas independientes, sin importar la marca o sistema.'
    },
    {
      title: 'Cero ingresos manuales',
      description: 'Automatiza la captura de datos de trazabilidad — productor, variedad, huerto, turno — directamente desde la línea de producción.'
    },
    {
      title: 'Indicadores en tiempo real',
      description: 'Retroalimentación de indicadores lo más cerca posible de la máquina: rendimiento, kilos por vía, causas de detención y tiempos muertos.'
    },
    {
      title: 'Trazabilidad completa',
      description: 'Registro de cada pallet y bin durante todo el proceso, con datos disponibles para auditorías, exportación y reportes personalizados.'
    }
  ]

  const modules = [
    {
      name: 'Vaciado',
      desc: 'Obtención de lotes desde el ERP externo, automatización de datos de trazabilidad (productor, variedad, huerto, turno) y seguimiento del progreso de órdenes de trabajo. Vaciado por lote o por bin.'
    },
    {
      name: 'Etiquetado',
      desc: 'Gestión de múltiples salidas, diseño de impresión personalizable, creación de números de serie y recuperación de información en tiempo real de la máquina (calibre, color, embalaje).'
    },
    {
      name: 'Indicadores de Operador',
      desc: 'Indicadores de rendimiento personalizables, seguimiento de tiempo por turno, conteo de horas de operador y alarmas en tiempo real.'
    },
    {
      name: 'Análisis de Detenciones',
      desc: 'Causas de detención con suma total de tiempo perdido y frecuencia de ocurrencia. Análisis de tiempos muertos para optimizar la operación.'
    },
    {
      name: 'Paletización',
      desc: 'Escaneo caja a caja mediante PDA, envío de información al ERP, comunicación con segregador/sorter de diferentes marcas y control de reglas de mixeo.'
    },
    {
      name: 'Master',
      desc: 'Panel de control maestro para supervisores: dotación de trabajadores, evolución durante la jornada, lotes procesados por día y avance de órdenes de trabajo.'
    },
  ]

  const screenshots = [
    {
      src: '/daiaagent/menuprincipal.png',
      alt: 'Menú principal de Daia Agent - Vista general de módulos',
      caption: 'Menú Principal',
      desc: 'Vista general de la aplicación con acceso a todos los módulos: Operador, Vaciado, Paletizaje, Etiquetado y Configuración.'
    },
    {
      src: '/daiaagent/operador_con_datos.png',
      alt: 'Panel del operador - Histórico de lotes, cajas y gráficos',
      caption: 'Panel del Operador',
      desc: 'Control de turno con histórico de lotes y cajas en tiempo real, gráficos de tipo de embalaje y distribución de calibres.'
    },
    {
      src: '/daiaagent/operador_con_datos2.png',
      alt: 'KPIs de producción - Total embalado, kilos por hora y por vía',
      caption: 'KPIs de Producción',
      desc: 'Métricas clave en tiempo real: total embalado, kilos HH, kilos por hora y kilos por vía activa.'
    },
    {
      src: '/daiaagent/etiquetado_seleccion.png',
      alt: 'Configuración de etiquetado - Salidas y pulsadores con datos',
      caption: 'Configuración de Etiquetado',
      desc: 'Gestión de pulsadores y salidas con variedad, calibre, categoría, color, pack y plantilla de etiqueta asignada.'
    },
    {
      src: '/daiaagent/etiquetado_previewetiqueta.png',
      alt: 'Vista previa de etiqueta ZPL en tiempo real',
      caption: 'Vista Previa de Etiqueta',
      desc: 'Previsualización en tiempo real de la etiqueta ZPL con datos del lote: variedad, productor, calibre y código de barras.'
    },
    {
      src: '/daiaagent/paletizacion.png',
      alt: 'Módulo de paletización - Grilla de cajas y pallets',
      caption: 'Paletización',
      desc: 'Armado de pallets con control visual por posición, escaneo caja a caja y envío automático al ERP.'
    },
  ]

  const dataPoints = [
    'Resultado de proceso por productor: rendimiento, kilos vaciados y curva de calibres',
    'Categorías de detenciones con suma total de tiempo perdido y frecuencia de ocurrencia',
    'Reportes personalizados y acceso total en lectura a la base de datos',
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
          <span className="text-[#0057B8] font-medium">Daia Agent</span>
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
              Daia Agent
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Puente de datos que conecta tu ERP con las líneas de empaquetado y calibración mediante APIs genéricas independientes. Elimina los ingresos manuales y garantiza trazabilidad total en tiempo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto?interes=daia-agent">
                <Button variant="outline" size="lg">
                  Solicitar información
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/daiaagent/operador_con_datos.png"
                alt="Daia Agent - Panel principal del operador"
                width={600}
                height={400}
                className="w-full h-full object-cover"
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

        {/* Screenshots Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Capturas del sistema</h2>
          <p className="text-gray-600 mb-8">Conoce los módulos principales de Daia Agent. Haz clic en cualquier imagen para verla a tamaño completo.</p>
          <ScreenshotGallery screenshots={screenshots} />
        </section>

        {/* Modules Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Módulos del sistema</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm border border-l-4 border-l-[#0057B8]">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.name}</h3>
                <p className="text-gray-600 text-sm">{module.desc}</p>
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

        {/* Data Section */}
        <section className="mb-16 bg-white rounded-xl shadow-sm border p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">¿Qué datos obtienes con Daia Agent?</h2>
          <p className="text-gray-600 mb-8">Accede a información clave de tu operación y crea reportes personalizados con acceso total a la base de datos.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {dataPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                <CheckCircle className="text-[#0057B8] mt-1 flex-shrink-0" size={28} />
                <span className="text-gray-800 text-lg font-medium">{point}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations */}
        <section className="mb-16 bg-white rounded-xl shadow-sm border p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Integraciones compatibles</h2>
          <p className="text-gray-600 text-center mb-8">Daia Agent se conecta con los equipos y sistemas más utilizados en la industria frutícola</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['Tomra Sizer', 'MAF', 'Unitec', 'Aweta', 'Zebra / Honeywell', 'SAP Business One', 'Odoo', 'PLCs Modbus'].map((item, index) => (
              <div key={index} className="p-4 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium text-[#0057B8]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para conectar tu línea de producción?</h2>
          <p className="text-xl mb-8 opacity-90">
            Integra tus equipos clasificadores con tu ERP y elimina los ingresos manuales con Daia Agent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto?interes=daia-agent">
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
