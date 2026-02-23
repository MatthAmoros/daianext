import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { products } from '@/data/content'

export const metadata: Metadata = {
  title: 'Productos - Software para la industria frutícola | Daia Systems',
  description: 'Descubre nuestras soluciones tecnológicas: Daia ERP para gestión integral y Daia HUB para optimización logística de exportación.',
}

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestros Productos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones tecnológicas diseñadas específicamente para la industria frutícola,
            desde la producción hasta la exportación.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Product Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 p-8 flex items-center justify-center">
                <Image
                  src={
                    product.id === 'daia-erp'
                      ? '/daiaerp.png'
                      : product.id === 'daia-hub'
                      ? '/daiahub.png'
                      : product.id === 'daia-agent'
                      ? '/daiaagent/operador_con_datos.png'
                      : '/daiacalidad.png'
                  }
                  alt={`${product.name} Dashboard`}
                  width={400}
                  height={300}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Características principales:</h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/productos/${product.id}`}
                    className="flex-1"
                  >
                    <Button className="w-full flex items-center justify-center space-x-2">
                      <span>Ver detalles</span>
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ¿Cuál es el mejor para tu empresa?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border-2 border-blue-200 rounded-lg">
              <h3 className="text-xl font-bold text-[#0057B8] mb-4">Daia ERP</h3>
              <p className="text-gray-600 mb-4">Ideal para:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Productores frutícolas</li>
                <li>• Empresas con procesos de packing</li>
                <li>• Control de inventarios complejos</li>
                <li>• Trazabilidad completa del producto</li>
              </ul>
            </div>
            <div className="p-6 border-2 border-green-200 rounded-lg">
              <h3 className="text-xl font-bold text-green-600 mb-4">Daia HUB</h3>
              <p className="text-gray-600 mb-4">Ideal para:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Empresas exportadoras</li>
                <li>• Comercializadoras de fruta</li>
                <li>• Optimización logística</li>
                <li>• Gestión de múltiples embarques</li>
              </ul>
            </div>
            <div className="p-6 border-2 border-orange-200 rounded-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-4">Daia Calidad</h3>
              <p className="text-gray-600 mb-4">Ideal para:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Control de calidad en packing</li>
                <li>• Gestión de certificaciones</li>
                <li>• Cumplimiento de normativas</li>
                <li>• Auditorías y reportes de calidad</li>
              </ul>
            </div>
            <div className="p-6 border-2 border-purple-200 rounded-lg">
              <h3 className="text-xl font-bold text-purple-600 mb-4">Daia Agent</h3>
              <p className="text-gray-600 mb-4">Ideal para:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Líneas de clasificación automatizadas</li>
                <li>• Integración con Tomra, Unitec, Aweta</li>
                <li>• Etiquetado automático ZPL</li>
                <li>• Control de paletizado en línea</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿No estás seguro cuál elegir?</h2>
          <p className="text-xl mb-8 opacity-90">
            Nuestro equipo de especialistas puede ayudarte a encontrar la solución perfecta para tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="white" size="lg">
              Solicitar consultoría gratuita
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0057B8]">
              Contactar ventas
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}