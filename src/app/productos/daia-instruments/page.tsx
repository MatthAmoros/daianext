import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Button from '@/components/ui/Button'
import ScreenshotGallery from '@/components/ui/ScreenshotGallery'

export const metadata: Metadata = {
  title: 'Daia Instruments - Termometría con alarmas en tiempo real | Daia Systems',
  description: 'Plataforma IoT de monitoreo de temperatura con sensores inalámbricos para la agroindustria. Alarmas por WhatsApp, trazabilidad de folios, gráficos exportables y perfiles de usuario.',
}

export default function DaiaInstrumentsPage() {
  const differentials = [
    {
      icon: '⚡',
      title: 'Instalación rápida y de bajo costo',
      description: 'Sin necesidad de cableado ni instalaciones invasivas. Nuestros sensores inalámbricos se instalan en minutos y se conectan de forma inmediata a la plataforma.'
    },
    {
      icon: '💬',
      title: 'Alarmas y reportes por WhatsApp',
      description: 'Recibe alertas en tiempo real directamente en tu teléfono cuando los valores superen los umbrales definidos. Sin apps adicionales, solo WhatsApp.'
    },
    {
      icon: '☁️',
      title: 'Una plataforma cloud siempre disponible',
      description: 'Accede a todos tus sensores desde cualquier dispositivo, en cualquier momento. Una plataforma profesional disponible desde tu computador o celular.'
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Daia Instruments
            </h1>
            <p className="text-xl text-[#0057B8] font-medium mb-6">
              Termometría con alarmas en tiempo real
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Plataforma de monitoreo IoT con sensores inalámbricos, diseñada específicamente
              para las necesidades de la agroindustria.
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
            <div className="space-y-4 text-lg opacity-90">
              <p>
                Daia Instruments nace para complementar y potenciar la oferta actual del mercado en
                soluciones IoT aplicadas al control de temperatura y recursos estratégicos.
              </p>
              <p>
                Ponemos a disposición de nuestros clientes una plataforma de monitoreo con sensores
                inalámbricos, fácil de usar y diseñada específicamente para las necesidades de la agroindustria.
              </p>
              <p>
                Sin necesidad de cableado ni instalaciones invasivas, nuestra solución permite integrar
                alarmas inteligentes, automatizar controles y sumar funcionalidades avanzadas a sistemas
                existentes de termometría y gestión de recursos críticos.
              </p>
            </div>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">🔐 Acceso controlado</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Diferentes perfiles de usuarios para manejar niveles de acceso</li>
                <li>• Plataforma profesional disponible desde computador o celular</li>
                <li>• Gestión segura de usuarios y permisos</li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-4">⚙️ Configuración sencilla</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Nombre personalizado para cada sensor</li>
                <li>• Valor actual en vivo</li>
                <li>• Configuración de umbrales y contactos de alerta</li>
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
            <div className="p-8 bg-white rounded-lg shadow-sm border md:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📦 Trazabilidad de folios</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Busca folios y revisa los horarios de entrada y salida</li>
                <li>• Seguimiento de cuántas veces fue ingresado y dónde está actualmente</li>
                <li>• Ingreso de folios desde dispositivos móviles de forma sencilla</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Screenshot Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">La plataforma en acción</h2>
          <p className="text-gray-600 mb-8">Capturas reales de Daia Instruments. Haz clic en cada imagen para ampliarla.</p>
          <ScreenshotGallery screenshots={[
            {
              src: '/daiainstruments/Imagen1.png',
              alt: 'Pantalla de acceso a Daia Instruments',
              caption: 'Acceso controlado',
              desc: 'Plataforma profesional con login seguro y perfiles de usuario.'
            },
            {
              src: '/daiainstruments/Imagen2.png',
              alt: 'Tablero central con todos los sensores',
              caption: 'Tablero central',
              desc: 'Vista en tiempo real de todos los sensores conectados con exportación a CSV.'
            },
            {
              src: '/daiainstruments/Imagen3.png',
              alt: 'Configuración de sensor con umbrales y folios',
              caption: 'Configuración sencilla',
              desc: 'Umbrales de alarma, contactos de alerta por WhatsApp y gestión de folios por dispositivo.'
            },
            {
              src: '/daiainstruments/Imagen4.png',
              alt: 'Gráfico histórico de temperatura',
              caption: 'Gráficos y datos exportables',
              desc: 'Histórico de temperatura con umbrales a la vista para detectar anomalías.'
            },
            {
              src: '/daiainstruments/Imagen5.png',
              alt: 'Trazabilidad de folios',
              caption: 'Trazabilidad de folios',
              desc: 'Historial de entrada y salida por folio con estado actual en cada cámara o túnel.'
            }
          ]} />
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para monitorear tu cadena de frío?</h2>
          <p className="text-xl mb-8 opacity-90">
            Ayudamos a las empresas a optimizar sus procesos, reducir riesgos operativos
            y tomar decisiones basadas en datos en tiempo real.
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
