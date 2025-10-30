import { Metadata } from 'next'
import Image from 'next/image'
import { clients } from '@/data/content'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Clientes - Empresas que confían en Daia Systems',
  description: 'Conoce las empresas líderes de la industria frutícola que han transformado sus operaciones con nuestras soluciones tecnológicas.',
}

export default function ClientesPage() {
  const testimonials = [
    {
      company: 'Andinexia',
      quote: 'Daia ERP ha transformado completamente nuestra gestión de inventarios y trazabilidad. Hemos reducido los errores en un 90% y mejorado significativamente nuestros tiempos de respuesta.',
      author: 'Gerente de Operaciones',
      industry: 'Producción y Exportación de Cerezas'
    },
    {
      company: 'Roquefort',
      quote: 'La implementación de Daia HUB nos permitió centralizar toda nuestra operación logística. Ahora tenemos visibilidad completa de nuestros embarques y hemos optimizado nuestros costos.',
      author: 'Director Comercial',
      industry: 'Exportación de Frutas'
    },
    {
      company: 'Meena Farms',
      quote: 'El soporte técnico y la facilidad de uso de las plataformas de Daia Systems nos ha permitido capacitar rápidamente a nuestro equipo y ver resultados inmediatos.',
      author: 'Jefe de Sistemas',
      industry: 'Agricultura y Packing'
    }
  ]

  const stats = [
    { number: '50+', label: 'Empresas Clientes' },
    { number: '1M+', label: 'Toneladas Procesadas' },
    { number: '99.9%', label: 'Uptime del Sistema' },
    { number: '24/7', label: 'Soporte Técnico' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestros Clientes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas líderes de la industria frutícola que han transformado sus operaciones
            con nuestras soluciones tecnológicas.
          </p>
        </div>

        {/* Stats Section */}
        <section className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-[#0057B8] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Clients Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Empresas que confían en nosotros
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client) => (
              <div key={client.id} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center">
                <div className="text-center">
                  <div className="h-24 flex items-center justify-center mb-4">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={128}
                      height={80}
                      className="max-h-20 max-w-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">{client.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl text-[#0057B8] mb-4">&ldquo;</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.company}</div>
                  <div className="text-sm text-gray-600">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Industrias que atendemos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🍒</div>
              <h3 className="font-semibold text-gray-900 mb-2">Cerezas</h3>
              <p className="text-gray-600 text-sm">Gestión especializada para la producción y exportación de cerezas</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🍇</div>
              <h3 className="font-semibold text-gray-900 mb-2">Uvas</h3>
              <p className="text-gray-600 text-sm">Soluciones para viñas y exportación de uva de mesa</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🥝</div>
              <h3 className="font-semibold text-gray-900 mb-2">Kiwis</h3>
              <p className="text-gray-600 text-sm">Control de calidad y trazabilidad para kiwis</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🍑</div>
              <h3 className="font-semibold text-gray-900 mb-2">Otras Frutas</h3>
              <p className="text-gray-600 text-sm">Adaptable a cualquier tipo de fruta y proceso</p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Casos de Éxito</h2>
            <p className="text-xl opacity-90">
              Resultados reales que nuestros clientes han logrado con nuestras soluciones
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-lg opacity-90">Reducción en errores de inventario</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-lg opacity-90">Mejora en tiempos de procesamiento</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25%</div>
              <div className="text-lg opacity-90">Aumento en rentabilidad promedio</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Quieres ser nuestro próximo caso de éxito?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a las empresas líderes que ya están transformando sus operaciones con Daia Systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="white" size="lg">
              Solicitar demo personalizada
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0057B8]">
              Hablar con ventas
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}