import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Daia Instruments - IoT para la agroindustria | Daia Systems',
  description: 'Solución IoT para monitorear tu cadena de frío y enviar alarmas oportunas. Sensores inalámbricos, alertas por WhatsApp, plataforma cloud y trazabilidad de folios para la agroindustria.',
}

export default function DaiaInstrumentsPage() {
  const features = [
    'Monitoreo de temperatura con sensores inalámbricos',
    'Alarmas y reportes automáticos por WhatsApp',
    'Plataforma cloud siempre disponible',
    'Instalación rápida sin cableado invasivo',
    'Tablero central con todos los sensores en tiempo real',
    'Definición de umbrales y contactos de emergencia',
    'Gráficos históricos y exportación a CSV',
    'Trazabilidad de folios por cámara'
  ]

  const benefits = [
    {
      title: 'Instalación rápida y de bajo costo',
      description: 'Sin necesidad de cableado ni instalaciones invasivas. Nuestros sensores inalámbricos se instalan en minutos y se conectan de forma inmediata a la plataforma.'
    },
    {
      title: 'Alarmas inteligentes por WhatsApp',
      description: 'Recibe alertas en tiempo real directamente en tu teléfono cuando los valores superen los umbrales definidos. Sin apps adicionales, solo WhatsApp.'
    },
    {
      title: 'Plataforma cloud siempre disponible',
      description: 'Accede a todos tus sensores desde cualquier dispositivo, en cualquier momento. Una plataforma profesional disponible desde tu computador o celular.'
    },
    {
      title: 'Control de cadena de frío',
      description: 'Complementa y potencia los sistemas existentes de termometría con funcionalidades avanzadas: umbrales, contactos de emergencia y gestión de recursos críticos.'
    }
  ]

  const differentials = [
    {
      icon: '⚡',
      title: 'Instalación rápida y de bajo costo',
      description: 'Sensores inalámbricos listos para usar sin obras ni cableado.'
    },
    {
      icon: '💬',
      title: 'Alarmas y reportes por WhatsApp',
      description: 'Notificaciones automáticas al instante en el canal que ya usas.'
    },
    {
      icon: '☁️',
      title: 'Una plataforma cloud siempre disponible',
      description: 'Acceso 24/7 desde cualquier dispositivo conectado a internet.'
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
          <span className="text-[#0057B8] font-medium">Daia Instruments</span>
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
              Daia Instruments
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              IoT para la agroindustria. Monitorea tu cadena de frío con sensores inalámbricos y recibe alarmas oportunas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto?interes=daia-instruments">
                <Button variant="outline" size="lg">
                  Solicitar información
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#0057B8] to-[#003865] rounded-xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-4">¿Por qué Daia Instruments?</h2>
            <p className="text-lg opacity-90 mb-4">
              Daia Instruments nace para complementar y potenciar la oferta actual del mercado en
              soluciones IoT aplicadas al control de temperatura y recursos estratégicos.
            </p>
            <p className="text-lg opacity-90">
              Ponemos a disposición de nuestros clientes una plataforma de monitoreo con sensores
              inalámbricos, fácil de usar y diseñada específicamente para las necesidades de la agroindustria.
            </p>
          </div>
        </div>

        {/* Differentials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestras diferencias</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-sm border">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

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

        {/* Funcionalidades detalladas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Funcionalidades</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🖥️ Tablero central</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Vista rápida de todos los sensores conectados</li>
                <li>• Definición de umbrales y contacto de emergencia por dispositivo</li>
                <li>• Actualización en vivo de valores actuales</li>
                <li>• Exportación de datos a CSV</li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-4">⚙️ Configuración sencilla</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Nombre personalizado para cada sensor</li>
                <li>• Valor actual en vivo</li>
                <li>• Configuración de umbrales y contactos</li>
                <li>• Gestión de los folios almacenados</li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Gráficos y datos exportables</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Gráficos integrados para detectar anomalías</li>
                <li>• Lectura simplificada con umbrales a la vista</li>
                <li>• Histórico de temperatura exportable</li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📦 Trazabilidad de folios</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Busca folios y revisa horarios de entrada y salida</li>
                <li>• Seguimiento de cuántas veces fue ingresado y dónde está</li>
                <li>• Ingreso de folios desde dispositivos móviles</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para monitorear tu cadena de frío?</h2>
          <p className="text-xl mb-8 opacity-90">
            Ayudamos a las empresas a optimizar sus procesos, reducir riesgos operativos y tomar decisiones basadas en datos en tiempo real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto?interes=daia-instruments">
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
