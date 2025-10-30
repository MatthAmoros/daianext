import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Daia Systems',
  description: 'Política de privacidad y tratamiento de datos de Daia Systems',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Política de Privacidad
          </h1>
          <p className="text-lg text-gray-600">
            Última actualización: Enero 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Información que recopilamos
            </h2>
            <p className="text-gray-600 mb-4">
              En Daia Systems recopilamos información cuando usted:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Visita nuestro sitio web</li>
              <li>Se comunica con nosotros a través de formularios de contacto</li>
              <li>Utiliza nuestros productos y servicios</li>
              <li>Se suscribe a nuestras comunicaciones</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Uso de la información
            </h2>
            <p className="text-gray-600 mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Proporcionar y mejorar nuestros servicios</li>
              <li>Responder a sus consultas y solicitudes</li>
              <li>Enviar información relevante sobre nuestros productos</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Protección de datos
            </h2>
            <p className="text-gray-600">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas
              para proteger su información personal contra acceso no autorizado,
              alteración, divulgación o destrucción.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Sus derechos
            </h2>
            <p className="text-gray-600 mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Acceder a su información personal</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al tratamiento de sus datos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Contacto
            </h2>
            <p className="text-gray-600">
              Para ejercer sus derechos o realizar consultas sobre esta política,
              puede contactarnos en:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> info@daia.cl<br />
                <strong>Teléfono:</strong> +56227603491<br />
                <strong>Dirección:</strong> Chile
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}