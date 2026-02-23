import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Daia Systems',
  description: 'Política de privacidad y tratamiento de datos personales de Daia Systems conforme a la Ley 19.628.',
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
            Última actualización: Febrero 2026
          </p>
        </div>

        <div className="space-y-10">

          {/* Intro */}
          <section>
            <p className="text-gray-600 leading-relaxed">
              Daia Systems SpA (en adelante, <strong>"Daia Systems"</strong>, <strong>"nosotros"</strong> o <strong>"la empresa"</strong>),
              RUT 77.XXX.XXX-X, con domicilio en Chile, es responsable del tratamiento de los datos personales que
              usted nos proporciona a través de nuestro sitio web y de nuestros productos y servicios de software.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos su información
              personal, en conformidad con la Ley N° 19.628 sobre Protección de la Vida Privada de la República de Chile
              y demás normativa aplicable.
            </p>
          </section>

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              1. Responsable del tratamiento
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 space-y-1">
                <strong>Razón social:</strong> Daia Systems SpA<br />
                <strong>País:</strong> Chile<br />
                <strong>Email de contacto:</strong> info@daia.cl<br />
                <strong>Teléfono:</strong> +56 2 2760 3491
              </p>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              2. Información que recopilamos
            </h2>
            <p className="text-gray-600 mb-4">
              Recopilamos distintos tipos de información según la forma en que usted interactúa con nosotros:
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">2.1 Información que usted nos proporciona directamente</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Nombre completo y cargo</li>
              <li>Correo electrónico corporativo y teléfono de contacto</li>
              <li>Nombre de la empresa y sector productivo</li>
              <li>Consultas, mensajes y solicitudes enviadas a través de formularios de contacto</li>
              <li>Información proporcionada durante demostraciones o reuniones comerciales</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">2.2 Información recopilada automáticamente</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Dirección IP y tipo de navegador</li>
              <li>Páginas visitadas, tiempo de permanencia y rutas de navegación</li>
              <li>Dispositivo y sistema operativo utilizado</li>
              <li>Fuente de referencia (cómo llegó a nuestro sitio)</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">2.3 Datos en el contexto de nuestros productos</h3>
            <p className="text-gray-600">
              Cuando usted utiliza nuestros productos (Daia ERP, Daia HUB, Daia Calidad, Daia Agent u otros),
              podemos procesar datos operacionales e información de su empresa en calidad de encargado del tratamiento,
              conforme a lo acordado contractualmente. Dichos datos son tratados exclusivamente para prestar el servicio
              contratado y no se utilizan para otros fines.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              3. Finalidades del tratamiento
            </h2>
            <p className="text-gray-600 mb-4">Utilizamos la información recopilada para las siguientes finalidades:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Atención al cliente', desc: 'Responder sus consultas, solicitudes de información y soporte técnico.' },
                { title: 'Prestación del servicio', desc: 'Gestionar la relación contractual, implementar y operar nuestros productos de software.' },
                { title: 'Comunicaciones comerciales', desc: 'Enviar información sobre actualizaciones, nuevas funcionalidades y eventos, siempre con su consentimiento.' },
                { title: 'Mejora del servicio', desc: 'Analizar el uso del sitio web y productos para optimizar la experiencia del usuario.' },
                { title: 'Cumplimiento legal', desc: 'Dar cumplimiento a obligaciones legales y requerimientos de autoridades competentes.' },
                { title: 'Seguridad', desc: 'Detectar, prevenir y gestionar fraudes, incidentes de seguridad o accesos no autorizados.' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              4. Base legal del tratamiento
            </h2>
            <p className="text-gray-600 mb-4">
              El tratamiento de sus datos personales se realiza sobre la base de:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Consentimiento:</strong> cuando usted nos contacta o solicita información voluntariamente.</li>
              <li><strong>Ejecución de un contrato:</strong> cuando el tratamiento es necesario para prestar los servicios contratados.</li>
              <li><strong>Interés legítimo:</strong> para la gestión, seguridad y mejora de nuestros servicios, en tanto no prevalezcan sus derechos y libertades fundamentales.</li>
              <li><strong>Obligación legal:</strong> cuando la ley exige el tratamiento o conservación de determinada información.</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              5. Cookies y tecnologías de seguimiento
            </h2>
            <p className="text-gray-600 mb-4">
              Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia de navegación
              y analizar el tráfico. Las cookies son pequeños archivos de texto almacenados en su dispositivo.
            </p>
            <p className="text-gray-600">
              Puede configurar su navegador para rechazar cookies o para que le avise cuando se envíen. Sin embargo,
              algunas funcionalidades del sitio podrían verse afectadas si deshabilita las cookies. Al continuar
              navegando en nuestro sitio, usted acepta el uso de cookies de acuerdo con esta política.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              6. Compartición de datos con terceros
            </h2>
            <p className="text-gray-600 mb-4">
              Daia Systems no vende, arrienda ni cede sus datos personales a terceros con fines comerciales.
              Podemos compartir información en los siguientes casos:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Proveedores de servicios:</strong> empresas que nos prestan servicios de infraestructura tecnológica, hosting, análisis o comunicaciones, bajo estrictas condiciones de confidencialidad.</li>
              <li><strong>Autoridades y cumplimiento legal:</strong> cuando sea requerido por ley, orden judicial o autoridad competente.</li>
              <li><strong>Reorganización corporativa:</strong> en caso de fusión, adquisición o reestructuración de la empresa, informándole previamente cuando corresponda.</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              7. Conservación de los datos
            </h2>
            <p className="text-gray-600">
              Conservamos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las
              que fueron recopilados, incluyendo el período requerido para satisfacer obligaciones legales,
              contables o de resolución de disputas. Una vez que los datos ya no sean necesarios, procederemos
              a su eliminación o anonimización de forma segura.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              8. Seguridad de la información
            </h2>
            <p className="text-gray-600 mb-4">
              Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos personales frente a
              accesos no autorizados, pérdida, alteración, divulgación o destrucción. Entre estas medidas se incluyen:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Cifrado de datos en tránsito mediante TLS/SSL</li>
              <li>Control de acceso basado en roles y autenticación segura</li>
              <li>Monitoreo continuo de sistemas e infraestructura</li>
              <li>Copias de seguridad periódicas y planes de recuperación ante incidentes</li>
              <li>Capacitación del equipo en buenas prácticas de seguridad de la información</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              9. Sus derechos
            </h2>
            <p className="text-gray-600 mb-4">
              De conformidad con la Ley N° 19.628 y la normativa vigente, usted tiene los siguientes derechos
              respecto de sus datos personales:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Acceso', desc: 'Conocer qué datos personales suyos tratamos y obtener una copia de ellos.' },
                { title: 'Rectificación', desc: 'Solicitar la corrección de datos inexactos o incompletos.' },
                { title: 'Cancelación / Eliminación', desc: 'Pedir la supresión de sus datos cuando ya no sean necesarios o haya retirado su consentimiento.' },
                { title: 'Oposición', desc: 'Oponerse al tratamiento de sus datos en determinadas circunstancias.' },
                { title: 'Portabilidad', desc: 'Recibir sus datos en un formato estructurado y de uso común.' },
                { title: 'Revocación del consentimiento', desc: 'Retirar su consentimiento en cualquier momento, sin que ello afecte la licitud del tratamiento previo.' },
              ].map((item, i) => (
                <div key={i} className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-[#0057B8] mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-6">
              Para ejercer cualquiera de estos derechos, puede contactarnos en <strong>info@daia.cl</strong> indicando
              su nombre, RUT o documento de identidad, y el derecho que desea ejercer. Responderemos su solicitud
              en un plazo máximo de 30 días hábiles.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              10. Transferencias internacionales de datos
            </h2>
            <p className="text-gray-600">
              En caso de que sus datos sean transferidos a servidores o proveedores ubicados fuera de Chile,
              nos aseguraremos de que dicha transferencia cuente con las garantías adecuadas de protección,
              ya sea mediante cláusulas contractuales estándar u otros mecanismos que aseguren un nivel de
              protección equivalente al establecido por la legislación chilena aplicable.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              11. Modificaciones a esta política
            </h2>
            <p className="text-gray-600">
              Daia Systems se reserva el derecho de actualizar esta Política de Privacidad cuando sea necesario
              para reflejar cambios en nuestras prácticas, en los servicios que ofrecemos o en la legislación
              aplicable. Le notificaremos cualquier cambio relevante mediante un aviso en nuestro sitio web.
              La fecha de "última actualización" al inicio de este documento indicará cuándo se realizó la
              revisión más reciente.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              12. Contacto
            </h2>
            <p className="text-gray-600 mb-4">
              Si tiene preguntas, comentarios o desea ejercer sus derechos en relación con esta Política de
              Privacidad, puede contactarnos a través de los siguientes medios:
            </p>
            <div className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                <strong>Daia Systems SpA</strong><br />
                <strong>Email:</strong> info@daia.cl<br />
                <strong>Teléfono:</strong> +56 2 2760 3491<br />
                <strong>País:</strong> Chile
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
