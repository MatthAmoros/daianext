'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Package, Building2, Users, Gauge,
  CheckCircle, ShoppingCart, Boxes, ClipboardCheck,
  Wrench, Smartphone, Printer, Cpu, FileBarChart,
  X, Check,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Image from 'next/image'

interface Module {
  id: string
  name: string
  icon: LucideIcon
  description: string
  features: string[]
}

const modules: Module[] = [
  {
    id: 'materiales',
    name: 'Materiales',
    icon: Package,
    description: 'Gestión integral de materias primas, insumos y suministros para el proceso productivo frutícola.',
    features: [
      'Control de stock en tiempo real',
      'Definición de stock crítico',
      'Configuración de standard de embalaje',
      'Trazabilidad completa por lote',
    ],
  },
  {
    id: 'produccion',
    name: 'Producción',
    icon: Building2,
    description: 'Planificación y seguimiento de órdenes de producción en planta, con control por línea y turno.',
    features: [
      'Programación de turnos y cuadrillas',
      'Control de rendimiento por línea',
      'Gestión de órdenes de packing',
    ],
  },
  {
    id: 'usuarios',
    name: 'Usuarios',
    icon: Users,
    description: 'Administración centralizada de accesos, roles y permisos del sistema para toda la organización.',
    features: [
      'Control de perfiles y roles',
      'Auditoría de accesos por usuario',
      'Gestión segura de contraseñas',
    ],
  },
  {
    id: 'piloto',
    name: 'Piloto',
    icon: Gauge,
    description: 'Panel de control principal con las métricas clave del negocio actualizadas en tiempo real.',
    features: [
      'KPIs operativos en tiempo real',
      'Alertas y notificaciones automáticas',
      'Visión global de toda la planta',
    ],
  },
  {
    id: 'calidad',
    name: 'Calidad',
    icon: CheckCircle,
    description: 'Control de calidad del producto en cada etapa del proceso, desde recepción hasta despacho.',
    features: [
      'Muestreos y parámetros configurables',
      'Registro digital de defectos',
      'Generación de certificados de calidad',
    ],
  },
  {
    id: 'ordenes',
    name: 'Órdenes de compra',
    icon: ShoppingCart,
    description: 'Gestión completa del proceso de compras, desde la solicitud hasta la recepción y contabilización.',
    features: [
      'Flujo de aprobaciones configurable',
      'Historial y evaluación de proveedores',
      'Integración con módulo de materiales',
    ],
  },
  {
    id: 'envases',
    name: 'Envases',
    icon: Boxes,
    description: 'Control de inventario y consumo de cajas, bins, pallets y embalajes del proceso productivo.',
    features: [
      'Stock de cajas y bins en tiempo real',
      'Control de envases retornables',
      'Consumo automático por producción',
    ],
  },
  {
    id: 'auditoria',
    name: 'Auditoría',
    icon: ClipboardCheck,
    description: 'Registro completo e inmutable de todas las operaciones y cambios realizados en el sistema.',
    features: [
      'Log de eventos detallado por usuario',
      'Trazabilidad de modificaciones',
      'Reportes de auditoría exportables',
    ],
  },
  {
    id: 'mantenimiento',
    name: 'Mantenimiento',
    icon: Wrench,
    description: 'Gestión de mantenciones preventivas y correctivas de equipos e infraestructura de planta.',
    features: [
      'Agenda y calendario de mantenciones',
      'Historial técnico por equipo',
      'Órdenes de trabajo digitales',
    ],
  },
  {
    id: 'captura',
    name: 'Captura',
    icon: Smartphone,
    description: 'Registro de datos de producción directamente desde dispositivos móviles en piso de planta.',
    features: [
      'App móvil nativa integrada',
      'Operación en modo offline',
      'Sincronización automática al conectar',
    ],
  },
  {
    id: 'etiquetado',
    name: 'Etiquetado',
    icon: Printer,
    description: 'Impresión de etiquetas y documentos para trazabilidad, despacho y exportación del producto.',
    features: [
      'Etiquetas 100% personalizables',
      'Integración con impresoras térmicas',
      'Soporte estándares GS1 y SSCC',
    ],
  },
  {
    id: 'integracion',
    name: 'Integración',
    icon: Cpu,
    description: 'Conexión con sistemas externos, maquinaria de planta, sensores y plataformas de terceros.',
    features: [
      'API REST abierta y documentada',
      'Integración con básculas y sensores',
      'Conexión con plataformas de exportación',
    ],
  },
  {
    id: 'reportes',
    name: 'Reportes',
    icon: FileBarChart,
    description: 'Generación de informes operativos y gerenciales con datos en tiempo real del sistema.',
    features: [
      'Reportes totalmente configurables',
      'Exportación a Excel y PDF',
      'Programación y envío automático',
    ],
  },
]

const gridRows = [
  modules.slice(0, 4),
  modules.slice(4, 8),
  modules.slice(8, 12),
  modules.slice(12),
]

const CARD_WIDTH = 288
const CARD_HEIGHT = 240

interface CardPos {
  left: number
  top: number
}

// ─── Module tile ──────────────────────────────────────────────────────────────

interface ModuleTileProps {
  module: Module
  isActive: boolean
  innerRef: (el: HTMLDivElement | null) => void
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

function ModuleTile({ module, isActive, innerRef, onClick }: ModuleTileProps) {
  const Icon = module.icon
  return (
    <motion.div
      ref={innerRef}
      onClick={onClick}
      whileHover={{ scale: 1.08, backgroundColor: 'rgba(0, 87, 184, 0.05)' }}
      whileTap={{ scale: 0.95 }}
      animate={
        isActive
          ? {
              scale: 1.05,
              backgroundColor: 'rgba(0, 87, 184, 0.07)',
              boxShadow: '0 0 0 2px rgba(0, 87, 184, 0.25)',
            }
          : {
              scale: 1,
              backgroundColor: 'rgba(0, 0, 0, 0)',
              boxShadow: '0 0 0 0px rgba(0, 87, 184, 0)',
            }
      }
      transition={{ type: 'spring', damping: 20, stiffness: 400 }}
      className="flex flex-col items-center gap-2.5 p-4 rounded-2xl cursor-pointer"
    >
      <motion.div
        animate={{
          filter: isActive
            ? 'drop-shadow(0 0 8px rgba(0, 87, 184, 0.4))'
            : 'drop-shadow(0 0 0px rgba(0,0,0,0))',
        }}
        transition={{ duration: 0.2 }}
      >
        <Icon className="w-10 h-10 text-[#003865]" strokeWidth={1.3} />
      </motion.div>
      <span className="text-[11px] font-medium text-[#003865] text-center leading-tight">
        {module.name}
      </span>
    </motion.div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function InteractiveDashboard() {
  const [activeModule, setActiveModule] = useState<Module | null>(null)
  const [cardPos, setCardPos] = useState<CardPos>({ left: 0, top: 0 })
  const dashboardRef = useRef<HTMLDivElement>(null)
  const moduleRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  const registerRef = (id: string) => (el: HTMLDivElement | null) => {
    if (el) moduleRefs.current.set(id, el)
    else moduleRefs.current.delete(id)
  }

  const handleModuleClick = (mod: Module) => {
    if (activeModule?.id === mod.id) {
      setActiveModule(null)
      return
    }

    const el = moduleRefs.current.get(mod.id)
    const dashboard = dashboardRef.current
    if (!el || !dashboard) return

    const elRect = el.getBoundingClientRect()
    const dashRect = dashboard.getBoundingClientRect()

    const centerX = elRect.left - dashRect.left + elRect.width / 2
    const moduleBottom = elRect.bottom - dashRect.top
    const moduleTop = elRect.top - dashRect.top
    const dashHeight = dashRect.height
    const dashWidth = dashRect.width

    const left = Math.max(8, Math.min(centerX - CARD_WIDTH / 2, dashWidth - CARD_WIDTH - 8))
    const showAbove = moduleBottom > dashHeight * 0.6
    const top = showAbove
      ? Math.max(8, moduleTop - CARD_HEIGHT - 16)
      : Math.min(moduleBottom + 12, dashHeight - CARD_HEIGHT - 8)

    setCardPos({ left, top })
    setActiveModule(mod)
  }

  return (
    // Outer: position context for the card, NO overflow-hidden
    <div ref={dashboardRef} className="relative rounded-xl shadow-2xl ring-1 ring-black/10 select-none">

      {/* Inner: overflow-hidden para que el nav y grid queden recortados */}
      <div className="overflow-hidden rounded-xl" onClick={() => setActiveModule(null)}>

        {/* Top navbar */}
        <div className="bg-[#003865] px-6 py-2.5 flex items-center justify-between">
          <Image
            src="/iconoblancodaia.png"
            alt="Daia"
            width={28}
            height={28}
            className="h-7 w-auto"
          />
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Users className="w-4 h-4 text-white/80" strokeWidth={1.5} />
          </div>
        </div>

        {/* Module grid */}
        <div className="px-8 pt-10 pb-6 bg-white">
          <div className="space-y-6">
            {gridRows.slice(0, 3).map((row, rowIdx) => (
              <div key={rowIdx} className="grid grid-cols-4 gap-4">
                {row.map((mod) => (
                  <ModuleTile
                    key={mod.id}
                    module={mod}
                    isActive={activeModule?.id === mod.id}
                    innerRef={registerRef(mod.id)}
                    onClick={(e) => { e.stopPropagation(); handleModuleClick(mod) }}
                  />
                ))}
              </div>
            ))}

            {/* Última fila: Reportes centrado */}
            <div className="flex justify-center">
              <div className="w-1/4">
                {gridRows[3].map((mod) => (
                  <ModuleTile
                    key={mod.id}
                    module={mod}
                    isActive={activeModule?.id === mod.id}
                    innerRef={registerRef(mod.id)}
                    onClick={(e) => { e.stopPropagation(); handleModuleClick(mod) }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom branding */}
        <div className="pb-6 pt-1 flex justify-center bg-white">
          <Image
            src="/logodaiahorizontal.svg"
            alt="Daia Systems"
            width={100}
            height={32}
            className="h-6 w-auto opacity-40"
          />
        </div>
      </div>

      {/* ── Floating card ── */}
      <AnimatePresence>
        {activeModule && (
          <motion.div
            key={activeModule.id}
            initial={{ opacity: 0, scale: 0.88, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: -6 }}
            transition={{ type: 'spring', damping: 22, stiffness: 380 }}
            className="absolute z-30 w-72 bg-white rounded-2xl shadow-2xl border border-[#0057B8]/20 p-5"
            style={{ left: cardPos.left, top: cardPos.top }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#0057B8]/10 flex items-center justify-center flex-shrink-0">
                  <activeModule.icon className="w-5 h-5 text-[#0057B8]" />
                </div>
                <h3 className="font-semibold text-[#003865] text-sm leading-tight">
                  {activeModule.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveModule(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors mt-0.5 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-600 leading-relaxed mb-3.5">
              {activeModule.description}
            </p>

            {/* Features */}
            <ul className="space-y-2">
              {activeModule.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                  <div className="w-4 h-4 rounded-full bg-[#0057B8]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#0057B8]" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
