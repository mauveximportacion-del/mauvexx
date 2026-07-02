"use client"

import { motion } from "framer-motion"
import { Clock, Globe, Camera, MessageCircle } from "lucide-react"

export default function WhyMauvex() {
  return (
    <section id="taller" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-semibold rounded-full">
              Información del Taller
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
              Taller Intensivo de Importación
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <Clock className="h-5 w-5 text-[var(--primary)] shrink-0" />
                <div>
                  <div className="font-semibold text-[var(--foreground)]">Duración</div>
                  <div className="text-sm text-[var(--muted)]">3 días (09:00 - 10:00 PM)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <MessageCircle className="h-5 w-5 text-[var(--accent)] shrink-0" />
                <div>
                  <div className="font-semibold text-[var(--foreground)]">WhatsApp</div>
                  <a href="https://wa.me/51992956034" className="text-sm text-[var(--primary)] hover:underline">
                    992 956 034
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <Globe className="h-5 w-5 text-[var(--primary)] shrink-0" />
                <Camera className="h-5 w-5 text-[var(--primary)] shrink-0" />
                <div>
                  <div className="font-semibold text-[var(--foreground)]">Redes Sociales</div>
                  <div className="text-sm text-[var(--muted)]">@MAUVEX IMPORT</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <blockquote className="border-l-4 border-[var(--accent)] pl-4 py-2">
                <p className="text-lg italic text-[var(--foreground)]">
                  &ldquo;Rápido, seguro y con el mejor soporte&rdquo;
                </p>
              </blockquote>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5 border border-[var(--border)]">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">Lo que incluye:</h3>
              <ul className="space-y-3">
                {[
                  "Acceso a lista exclusiva de viajeros desde USD 35",
                  "Courier con tarifa exclusiva: US$ 8 x KG / US$ 4 x S.I",
                  "Listado extenso de proveedores certificados",
                  "Uso de nuestro almacén en Miami - Florida",
                  "Calculadora especializada en costeos",
                  "Envío de USA a Perú en 5 días hábiles",
                  "Precios súper competitivos (iPhone, perfumes, etc.)",
                  "2 años de soporte y ayuda gratuita",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 w-5 h-5 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] text-xs font-bold shrink-0">
                      ✓
                    </span>
                    <span className="text-sm text-[var(--foreground)]/80">{item}</span>
                  </motion.div>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
