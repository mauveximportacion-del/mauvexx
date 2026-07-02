"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/ThemeToggle"

const links = [
  { href: "/", label: "Inicio" },
  { href: "/pagos", label: "Pagos" },
  { href: "/cursos", label: "Servicios" },
  { href: "/blog", label: "Blog" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--section-bg)]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Mauvex"
              width={48}
              height={48}
              className="object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "text-[var(--primary)] bg-[var(--primary)]/10"
                    : "text-[var(--foreground)]/80 hover:text-[var(--primary)] hover:bg-[var(--gray-light)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="outline" size="sm" className="hidden md:inline-flex">
                Iniciar sesión
              </Button>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg hover:bg-[var(--gray-light)] transition-colors"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? (
                <X className="h-6 w-6 text-[var(--foreground)]" />
              ) : (
                <Menu className="h-6 w-6 text-[var(--foreground)]" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[var(--section-bg)] border-t border-[var(--border)]"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.href)
                      ? "text-[var(--primary)] bg-[var(--primary)]/10"
                      : "text-[var(--foreground)]/80 hover:text-[var(--primary)] hover:bg-[var(--gray-light)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/login" onClick={() => setOpen(false)}>
                <Button variant="outline" className="w-full mt-2">
                  Iniciar sesión
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
