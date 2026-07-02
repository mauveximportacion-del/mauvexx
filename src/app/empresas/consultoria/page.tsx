"use client"

import { motion } from "framer-motion"
import { CheckCircle, Search, FileText, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ConsultoriaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20 md:py-28 bg-[var(--section-alt)] min-h-screen">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold rounded-full mb-4">Consultoría</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">Asesoría personalizada</h1>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">Optimiza tu cadena de importación con nuestro equipo de expertos.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 mb-8">
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Nuestro proceso</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { step: "1", icon: Search, title: "Diagnóstico", desc: "Evaluamos tu situación actual" },
                  { step: "2", icon: FileText, title: "Plan a medida", desc: "Diseñamos la estrategia óptima" },
                  { step: "3", icon: TrendingUp, title: "Acompañamiento", desc: "Soporte continuo en cada paso" },
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-[var(--background)]">
                    <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="h-6 w-6 text-[var(--primary)]" />
                    </div>
                    <div className="text-xs font-bold text-[var(--primary)] mb-1">Paso {item.step}</div>
                    <h4 className="font-bold text-[var(--foreground)] text-sm">{item.title}</h4>
                    <p className="text-xs text-[var(--muted)] mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8">
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Áreas de consultoría</h2>
              <ul className="space-y-3">
                {[
                  "Selección de productos rentables para importar",
                  "Optimización de costos logísticos y aduaneros",
                  "Cumplimiento legal y documentación",
                  "Estrategia de precios y canales de venta",
                ].map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="text-[var(--foreground)]/80">{a}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="text-center mt-8">
              <Link href="/pagos" className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-xl hover:bg-[var(--primary-light)] transition-all hover:shadow-xl active:scale-95">
                Agendar consultoría gratuita <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
