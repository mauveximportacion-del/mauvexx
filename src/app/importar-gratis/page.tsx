"use client"

import { motion } from "framer-motion"
import { Package, Ship, DollarSign, Clock, ArrowRight, Users } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const steps = [
  { icon: Package, title: "Compra en USA", desc: "Elige tus productos y cómpralos directo de tiendas americanas." },
  { icon: Ship, title: "Llega a Miami", desc: "Recibimos tu mercancía en nuestro almacén en Miami, FL." },
  { icon: Clock, title: "12 días hábiles", desc: "De Miami a tu puerta en solo 12 días hábiles." },
]

const rates = [
  { label: "Courier x KG", value: "$15 USD" },
  { label: "Desaduanaje", value: "$8 USD" },
  { label: "Tiempo estimado", value: "12 días" },
  { label: "Seguro incluido", value: "Sí" },
]

export default function ImportarGratisPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="relative py-20 md:py-28 min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-dark)]" />
          <div className="absolute top-10 right-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
                Importa Gratis
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                Importa sin asesoría
              </h1>
              <p className="text-lg text-white/70 max-w-xl mx-auto">
                Tarifas directas de courier, sin intermediarios. Tú compras, nosotros te lo traemos.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-[var(--accent)]" />
                  Tarifas
                </h2>
                <div className="space-y-3">
                  {rates.map((rate, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-white/70 text-sm">{rate.label}</span>
                      <span className="text-white font-bold">{rate.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <Ship className="h-5 w-5 text-[var(--accent)]" />
                  Proceso
                </h2>
                <div className="space-y-4">
                  {steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <step.icon className="h-5 w-5 text-[var(--accent)]" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{step.title}</div>
                        <div className="text-white/60 text-xs">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <p className="text-white/60 text-sm mb-4">
                ¿Listo para empezar? Únete a nuestro grupo gratuito de WhatsApp y recibe asistencia de la comunidad.
              </p>
              <a
                href="https://chat.whatsapp.com/KC9THKV2Uwp8nNgkm6DAuL?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-lg rounded-xl transition-all hover:shadow-xl hover:shadow-red-600/30 active:scale-95"
              >
                <Users className="h-5 w-5" />
                Unirme al grupo gratuito de WhatsApp
                <ArrowRight className="h-5 w-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8"
            >
              <Link href="/pagos" className="text-white/50 hover:text-white text-sm underline transition-colors">
                ← Volver a sesiones con asesoría
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
