'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import Button from '@/components/ui/Button'

// Note: Metadata should be handled differently in client components
// export const metadata: Metadata = {
//   title: 'Contacto - Daia Systems | Contáctanos',
//   description: 'Ponte en contacto con nuestro equipo de especialistas. Estamos aquí para ayudarte a transformar tu operación frutícola.',
// }

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí implementarías la lógica de envío del formulario
    console.log('Form submitted:', formData)
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'contacto@daia.cl',
      description: 'Escríbenos para consultas generales'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+56 9 xxxx xxxx',
      description: 'Horario de atención comercial'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      info: 'Santiago, Chile',
      description: 'Oficinas centrales'
    },
    {
      icon: Clock,
      title: 'Horarios',
      info: 'Lun - Vie: 9:00 - 18:00',
      description: 'Soporte técnico 24/7'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a transformar tu operación frutícola.
            Nuestro equipo de especialistas está listo para asesorarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                    placeholder="+56 9 xxxx xxxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                  ¿En qué estás interesado?
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="daia-erp">Daia ERP</option>
                  <option value="daia-hub">Daia HUB</option>
                  <option value="ambos">Ambos productos</option>
                  <option value="consultoria">Consultoría</option>
                  <option value="soporte">Soporte técnico</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0057B8] focus:border-transparent"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Enviar mensaje</span>
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de contacto</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                    <div className="p-3 bg-[#0057B8] rounded-lg">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-[#0057B8] font-medium mb-1">{item.info}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-[#0057B8] to-[#003865] rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
              <div className="space-y-3">
                <a
                  href="https://help.daia.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-200 hover:text-white transition-colors"
                >
                  Centro de ayuda →
                </a>
                <a
                  href="https://hub.daia.cl/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-200 hover:text-white transition-colors"
                >
                  Área de clientes →
                </a>
                <a
                  href="/productos"
                  className="block text-blue-200 hover:text-white transition-colors"
                >
                  Ver nuestros productos →
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">¿Ofrecen demostraciones gratuitas?</h4>
                  <p className="text-gray-600 text-sm">Sí, ofrecemos demos personalizadas para que puedas ver cómo nuestras soluciones se adaptan a tu operación.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">¿Cuánto tiempo toma la implementación?</h4>
                  <p className="text-gray-600 text-sm">El tiempo de implementación varía según el tamaño y complejidad de tu operación, típicamente entre 2-8 semanas.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">¿Proporcionan capacitación?</h4>
                  <p className="text-gray-600 text-sm">Incluimos capacitación completa para tu equipo y soporte técnico continuo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}