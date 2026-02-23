'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'

interface Screenshot {
  src: string
  alt: string
  caption: string
  desc: string
}

export default function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [active, setActive] = useState<Screenshot | null>(null)

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {screenshots.map((shot, index) => (
          <button
            key={index}
            onClick={() => setActive(shot)}
            className="group bg-white rounded-xl shadow-sm border overflow-hidden text-left hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-video bg-gray-50 overflow-hidden">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={600}
                height={338}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" size={32} />
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">{shot.caption}</h3>
              <p className="text-sm text-gray-600">{shot.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Cerrar"
            >
              <X size={28} />
            </button>
            <Image
              src={active.src}
              alt={active.alt}
              width={1400}
              height={900}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-3 text-center">
              <p className="text-white font-semibold text-lg">{active.caption}</p>
              <p className="text-gray-300 text-sm mt-1">{active.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
