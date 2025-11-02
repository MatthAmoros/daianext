'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navigation } from '@/data/content'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 z-40 w-full bg-[#0057B8] backdrop-blur-sm border-b border-[#003865]">
      <div className="mx-auto max-w-[1400px] px-8 sm:px-12 lg:px-16">
        <div className="flex h-14 items-center justify-between relative">
          {/* Logo - Always Left */}
          <Link href="/" className="flex items-center -ml-[3px] z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/iconoblancodaia.png"
                alt="Daia Systems"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </motion.div>
          </Link>

          {/* Daia Systems Text - Center on Mobile */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 pointer-events-none">
            <span className="text-white font-semibold text-lg whitespace-nowrap">Daia Systems</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 flex-1 ml-6">
            {navigation.main.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-[15px] text-white hover:text-blue-200 transition-colors"
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown size={14} />}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.submenu && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0057B8] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side - External Links and Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* External Links */}
            {navigation.external.filter(item => item.name !== 'Portal cliente').map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-white hover:text-blue-200 transition-colors"
              >
                {item.name}
              </a>
            ))}

            {/* Login Button */}
            <a
              href="https://clientes.daia.cl/web/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="h-10 px-4 text-[15px] rounded-lg border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#0057B8] transition-colors font-medium">
                Portal cliente
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[#003865] mt-4 py-4 bg-[#0057B8]"
            >
              <nav className="flex flex-col space-y-4">
                {navigation.main.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block text-white hover:text-blue-200 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-sm text-blue-200 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t border-[#003865] space-y-2">
                  {navigation.external.filter(item => item.name !== 'Portal cliente').map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white hover:text-blue-200 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="https://clientes.daia.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="white" size="sm" className="w-full flex items-center justify-center gap-1">
                      Portal cliente
                      <ChevronRight size={16} />
                    </Button>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
