'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0057B8] to-[#003865] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Da un <span className="text-blue-200">paso adelante</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            ¿Tienes dudas o necesitas mayor detalle? Contáctanos hoy y agenda
            una demostración en vivo de nuestros servicios.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-[#0057B8] hover:bg-blue-50 group"
            >
              Agendar demostración
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-blue-200 text-white hover:bg-[#003865] group"
            >
              <MessageCircle size={20} className="mr-2" />
              Conversar por WhatsApp
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-200 mb-2">📧</div>
              <div className="text-blue-100">info@daia.cl</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-200 mb-2">📞</div>
              <div className="text-blue-100">+56 22 760 3491</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-200 mb-2">🇨🇱</div>
              <div className="text-blue-100">Desarrollado en Chile</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}