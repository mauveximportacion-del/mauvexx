"use client"

import { motion } from "framer-motion"
import { Handshake, CheckCircle, TrendingUp, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AlianzasPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20 md:py-28 bg-[var(--section-alt)] min-h-screen">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold rounded-full mb-4">Alianzas estratégicas</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">Sé parte de nuestra red</h1>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">Convierte tu negocio en un aliado Mauvex Import y accede a beneficios exclusivos.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 mb-8">
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Beneficios para aliados</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, text: "Comisiones preferenciales" },
                  { icon: Users, text: "Red de contactos exclusiva" },
                  { icon: Star, text: "Soporte dedicado 24/7" },
                  { icon: Handshake, text: "Contratos de exclusividad" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[var(--background)]">
                    <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-[var(--primary)]" />
                    </div>
                    <span className="text-sm font-medium text-[var(--foreground)]">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8">
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Requisitos</h2>
              <ul className="space-y-3">
                {[
                  "Experiencia en comercio o logística",
                  "Disponibilidad para capacitación inicial",
                  "Compromiso con estándares de calidad",
                  "Facturación electrónica habilitada",
                ].map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground)]/80">{r}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="text-center mt-8">
              <Link href="/pagos" className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-xl hover:bg-[var(--primary-light)] transition-all hover:shadow-xl active:scale-95">
                Quiero ser aliado <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
