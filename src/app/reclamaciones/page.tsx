"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle, MessageCircle, Clock, FileWarning, AlertTriangle } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

export default function ReclamacionesPage() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="relative py-20 md:py-28 bg-[var(--section-alt)] min-h-screen overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--primary)]/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[var(--accent)]/5 blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold rounded-full mb-4">
                <FileWarning className="h-4 w-4" /> Libro de reclamaciones
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">Presenta tu reclamo</h1>
              <p className="text-lg text-[var(--muted)] max-w-xl mx-auto">Nos comprometemos a resolver cualquier inconveniente en el menor tiempo posible.</p>
            </motion.div>

            {!sent ? (
              <motion.form
                variants={container}
                initial="hidden"
                animate="show"
                onSubmit={(e) => { e.preventDefault(); setSent(true) }}
                className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 space-y-5"
              >
                <motion.div variants={item}>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">Nombre completo *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] text-sm transition-all focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/30 outline-none" placeholder="Tu nombre" />
                </motion.div>
                <motion.div variants={item} className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">Teléfono *</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] text-sm transition-all focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/30 outline-none" placeholder="+51 999 999 999" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">Correo (opcional)</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] text-sm transition-all focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/30 outline-none" placeholder="tu@email.com" />
                  </div>
                </motion.div>
                <motion.div variants={item}>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">Tipo de reclamo *</label>
                  <select required className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] text-sm transition-all focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/30 outline-none">
                    <option value="">Selecciona una opción</option>
                    <option>Producto no recibido</option>
                    <option>Producto dañado</option>
                    <option>Demora en la entrega</option>
                    <option>Problema con el pago</option>
                    <option>Otro</option>
                  </select>
                </motion.div>
                <motion.div variants={item}>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">Descripción del reclamo *</label>
                  <textarea rows={4} required className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] text-sm resize-none transition-all focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/30 outline-none" placeholder="Describe tu reclamo en detalle..." />
                </motion.div>
                <motion.div variants={item}>
                  <Button variant="primary" size="lg" className="w-full group">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" /> Enviar reclamo
                  </Button>
                </motion.div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 text-center space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)]">Reclamo recibido</h3>
                  <p className="text-sm text-[var(--muted)] mt-1">Nos pondremos en contacto contigo en un plazo máximo de 48 horas hábiles.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--primary)]/5 text-sm text-[var(--muted)]">
                    <Clock className="h-4 w-4 text-[var(--primary)]" /> 48 hrs hábiles
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)]/5 text-sm text-[var(--muted)]">
                    <MessageCircle className="h-4 w-4 text-[var(--accent)]" /> Respuesta por WhatsApp
                  </div>
                </div>

                <div className="flex items-center gap-2 justify-center pt-2">
                  <AlertTriangle className="h-4 w-4 text-[var(--muted)]" />
                  <button onClick={() => setSent(false)} className="text-sm text-[var(--primary)] hover:underline font-medium">Enviar otro reclamo</button>
                </div>
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center text-xs text-[var(--muted)] mt-8"
            >
              Tus datos serán tratados de acuerdo a nuestra Política de privacidad.
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
