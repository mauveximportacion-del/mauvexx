"use client"

import { motion } from "framer-motion"
import { Shield, Search, Lock, Eye, FileText, Smartphone } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const sections = [
  {
    icon: Search,
    title: "Información que recopilamos",
    content: "Recopilamos información que nos proporcionas directamente: nombre, número de teléfono, ciudad y método de pago seleccionado.",
  },
  {
    icon: Eye,
    title: "Uso de la información",
    content: "Usamos tu información para procesar tus pagos, coordinar envíos, enviar notificaciones sobre tus importaciones y mejorar nuestros servicios.",
  },
  {
    icon: Lock,
    title: "Protección de datos",
    content: "Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso no autorizado, pérdida o alteración.",
  },
  {
    icon: Smartphone,
    title: "Tus derechos",
    content: "Puedes solicitar en cualquier momento la eliminación de tus datos personales contactándonos por WhatsApp al 992 956 034.",
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="relative py-20 md:py-28 bg-[var(--section-alt)] min-h-screen overflow-hidden">
          <div className="absolute top-20 -left-32 w-80 h-80 rounded-full bg-[var(--primary)]/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-20 -right-32 w-80 h-80 rounded-full bg-[var(--accent)]/5 blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold rounded-full mb-4">
                <Shield className="h-4 w-4" /> Privacidad
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">Política de privacidad</h1>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                En Mauvex Import, nos tomamos muy en serio tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.
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
              <Lock className="h-4 w-4 text-[var(--muted)]" />
              <p className="text-xs text-[var(--muted)]">Última actualización: Julio 2026</p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
