import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { clients } from '@/data/content'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Clientes - Empresas que confían en Daia Systems',
  description: 'Conoce las empresas líderes de la industria frutícola que han transformado sus operaciones con nuestras soluciones tecnológicas.',
}

export default function ClientesPage() {
  const stats = [
    { number: '10+', label: 'Empresas Clientes' },
    { number: '40M+', label: 'Toneladas Procesadas' },
    { number: '99.9%', label: 'Uptime del Sistema' }
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
        <section className="grid md:grid-cols-3 gap-8 mb-16">
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
                      className="max-h-20 max-w-32 object-contain transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">{client.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Industrias que atendemos
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            Nuestro foco principal está en <strong>cerezas, manzanas, ciruelas y uvas</strong>, donde Daia ERP ha sido especialmente diseñado y optimizado para gestionar los desafíos únicos de estos cultivos. También hemos trabajado exitosamente con peras, cítricos y paltas, logrando resultados excepcionales en la gestión y trazabilidad de cada especie.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-3">🍒</div>
              <h3 className="font-semibold text-gray-900">Cerezas</h3>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-3">🍎</div>
              <h3 className="font-semibold text-gray-900">Manzanas</h3>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-3">🫐</div>
              <h3 className="font-semibold text-gray-900">Ciruelas</h3>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-3">🍐</div>
              <h3 className="font-semibold text-gray-900">Peras</h3>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-3">🍇</div>
              <h3 className="font-semibold text-gray-900">Uvas</h3>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-3">🍊</div>
              <h3 className="font-semibold text-gray-900">Naranjas</h3>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-3">🍋</div>
              <h3 className="font-semibold text-gray-900">Limones</h3>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-3">🥑</div>
              <h3 className="font-semibold text-gray-900">Paltas</h3>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Beneficios Comprobados</h2>
            <p className="text-xl opacity-90">
              Mejoras tangibles que nuestros clientes experimentan día a día
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <div className="text-xl font-semibold mb-2">Menos Errores</div>
              <div className="text-base opacity-90">Reducción significativa en errores de inventario y trazabilidad</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <div className="text-xl font-semibold mb-2">Mayor Velocidad</div>
              <div className="text-base opacity-90">Procesos más ágiles desde recepción hasta exportación</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📈</div>
              <div className="text-xl font-semibold mb-2">Mejor Control</div>
              <div className="text-base opacity-90">Visibilidad completa y toma de decisiones en tiempo real</div>
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
            <Link href="/contacto?interes=demostracion">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0057B8]">
                Solicitar demo personalizada
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}