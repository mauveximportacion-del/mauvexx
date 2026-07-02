"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock, Tag, Zap } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent)]/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-[var(--primary)]/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-semibold rounded-full"
            >
              LA MEJOR TARIFA PARA VIAJEROS
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="text-sm font-semibold text-[var(--primary)] tracking-widest uppercase">
                Mauvex Import
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[var(--foreground)]"
            >
              Importemos desde{" "}
              <span className="text-[var(--primary)]">USA</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative inline-block"
            >
              <div className="flex items-center gap-3 bg-[var(--accent)]/10 rounded-xl px-5 py-3 border border-[var(--accent)]/20">
                <Tag className="h-5 w-5 text-[var(--accent)]" />
                <div className="flex items-center gap-3">
                  <span className="text-lg line-through text-[var(--muted)]">S/ 149</span>
                  <span className="text-2xl font-extrabold text-[var(--accent)]">S/ 99</span>
                  <span className="text-xs font-semibold bg-[var(--accent)] text-white px-2 py-0.5 rounded-full animate-pulse">
                    -33%
                  </span>
                </div>
              </div>
              <p className="text-xs text-[var(--muted)] mt-1 text-center">¡Por tiempo limitado!</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-base text-[var(--muted)] max-w-lg font-medium"
            >
              Accede a nuestra lista exclusiva de viajeros y courier con tarifa preferencial desde USD 35.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#beneficios">
                <Button variant="default" size="xl">
                  Ver beneficios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pagos">
                <Button variant="outline" size="xl">
                  Pagar ahora
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              {[
                { icon: Zap, text: "Envío en 5 días hábiles" },
                { icon: Clock, text: "Taller intensivo 3 días" },
                { icon: CheckCircle, text: "2 años de soporte gratis" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <item.icon className="h-4 w-4 text-[var(--accent)]" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden md:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 rounded-3xl animate-float" />
              <div className="relative bg-[var(--section-bg)] rounded-2xl shadow-2xl p-8 border border-[var(--border)]">
                <div className="text-center mb-6">
                  <span className="text-xs font-bold text-[var(--accent)] bg-[var(--accent)]/10 px-3 py-1 rounded-full">
                    TALLER INTENSIVO
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-sm text-[var(--muted)]">Duración</div>
                    <div className="text-xl font-bold text-[var(--foreground)]">3 DÍAS</div>
                    <div className="text-sm text-[var(--muted)]">09:00 - 10:00 PM</div>
                  </div>
                  <div className="h-px bg-[var(--border)]" />
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Courier x KG", value: "$8 USD" },
                      { label: "Courier x S.I", value: "$4 USD" },
                      { label: "Viajeros", value: "Desde $35" },
                      { label: "Almacén", value: "Miami, FL" },
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-3 rounded-xl bg-[var(--primary)]/5">
                        <div className="text-lg font-bold text-[var(--primary)]">{stat.value}</div>
                        <div className="text-xs text-[var(--muted)]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-xs text-[var(--muted)] pt-2">
                    🇺🇸 → 🇵🇪 Tiempo de envío: 5 días hábiles
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
