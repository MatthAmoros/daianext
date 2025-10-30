import { Metadata } from 'next'
import { values } from '@/data/content'

export const metadata: Metadata = {
  title: 'Empresa - Sobre Daia Systems | Líderes en tecnología frutícola',
  description: 'Conoce más sobre Daia Systems, nuestra historia, valores y compromiso con la innovación en la industria frutícola chilena.',
}

export default function EmpresaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section id="about" className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Sobre Daia Systems
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Somos una empresa chilena especializada en el desarrollo de software para la industria frutícola.
            Nuestro objetivo es simplificar y optimizar los procesos productivos y logísticos mediante
            tecnología de vanguardia.
          </p>
        </section>

        {/* About Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                Desde nuestros inicios, hemos estado comprometidos con transformar la industria frutícola
                a través de la innovación tecnológica. Nacimos de la necesidad de crear soluciones
                específicas para los desafíos únicos que enfrenta este sector.
              </p>
              <p>
                Con años de experiencia trabajando directamente con productores y exportadores,
                hemos desarrollado un profundo entendimiento de los procesos, desde la recepción
                de fruta hasta la exportación final.
              </p>
              <p>
                Hoy, nuestros productos son utilizados por empresas líderes en la industria,
                ayudándoles a optimizar sus operaciones y maximizar su rentabilidad.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#0057B8] to-[#003865] rounded-xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-6">Nuestra Misión</h3>
            <p className="text-lg mb-8 opacity-90">
              Empoderar a la industria frutícola chilena con tecnología de clase mundial,
              simplificando procesos complejos y proporcionando herramientas que impulsen
              la eficiencia y el crecimiento sostenible.
            </p>
            <h3 className="text-2xl font-bold mb-6">Nuestra Visión</h3>
            <p className="text-lg opacity-90">
              Ser la plataforma tecnológica líder en Latinoamérica para la gestión integral
              de la cadena de valor frutícola, desde el campo hasta el consumidor final.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section id="values" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestros Valores</h2>
            <p className="text-xl text-gray-600">
              Los principios que guían cada decisión y desarrollo en Daia Systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.id} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Business Intelligence Section */}
        <section id="bi" className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Intelligence</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  En Daia Systems, entendemos que los datos son el activo más valioso de tu empresa.
                  Por eso, todas nuestras soluciones incluyen capacidades avanzadas de Business Intelligence.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-[#0057B8] font-bold">•</span>
                    <span>Dashboards interactivos en tiempo real</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#0057B8] font-bold">•</span>
                    <span>Reportes personalizables y automatizados</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#0057B8] font-bold">•</span>
                    <span>Análisis predictivo para optimizar decisiones</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#0057B8] font-bold">•</span>
                    <span>Integración con sistemas externos</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Datos que Impulsan Decisiones</h3>
              <p className="text-gray-600">
                Transforma tus datos en insights accionables que mejoren la rentabilidad
                y eficiencia de tu operación.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600">
              Profesionales especializados con amplia experiencia en tecnología y agricultura
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ingenieros de Software</h3>
              <p className="text-gray-600">Especialistas en desarrollo de aplicaciones empresariales</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expertos en Agricultura</h3>
              <p className="text-gray-600">Profesionales con experiencia en procesos frutícolas</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consultores de Negocio</h3>
              <p className="text-gray-600">Especialistas en optimización de procesos empresariales</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0057B8] to-[#003865] rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Quieres conocer más sobre nosotros?</h2>
          <p className="text-xl mb-8 opacity-90">
            Estamos aquí para ayudarte a transformar tu operación frutícola con tecnología de vanguardia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0057B8] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Agendar reunión
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0057B8] transition-colors">
              Contactar equipo
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}