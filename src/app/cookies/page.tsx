"use client"

import { motion } from "framer-motion"
import { Cookie, Info, Settings, SlidersHorizontal, FileText } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const sections = [
  {
    icon: Info,
    title: "¿Qué son las cookies?",
    content: "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Ayudan a que el sitio funcione correctamente y a mejorar tu experiencia.",
  },
  {
    icon: Settings,
    title: "Cookies que utilizamos",
    content: "Utilizamos cookies esenciales para el funcionamiento del sitio (como recordar tu sesión y preferencias de tema oscuro/claro). No utilizamos cookies de rastreo de terceros.",
  },
  {
    icon: SlidersHorizontal,
    title: "Control de cookies",
    content: "Puedes gestionar las cookies desde la configuración de tu navegador. Si deshabilitas las cookies esenciales, algunas funciones del sitio pueden no funcionar correctamente.",
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="relative py-20 md:py-28 bg-[var(--section-alt)] min-h-screen overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[var(--accent)]/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[var(--primary)]/5 blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold rounded-full mb-4">
                <Cookie className="h-4 w-4" /> Cookies
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">Política de cookies</h1>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                Esta política explica qué son las cookies y cómo las utilizamos en Mauvex Import.
              </p>
            </motion.div>

            <motion.div variants={container} initial="hidden" animate="show" className="grid gap-5">
              {sections.map((s) => (
                <motion.div
                  key={s.title}
                  variants={item}
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="group relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 sm:p-7 transition-all hover:border-[var(--primary)]/30 hover:shadow-lg"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="relative flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)]/20 transition-colors">
                      <s.icon className="h-6 w-6 text-[var(--primary)]" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-[var(--foreground)] mb-2">{s.title}</h2>
                      <p className="text-sm text-[var(--muted)] leading-relaxed">{s.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-10 flex items-center gap-3 justify-center">
              <Cookie className="h-4 w-4 text-[var(--muted)]" />
              <p className="text-xs text-[var(--muted)]">Última actualización: Julio 2026</p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
