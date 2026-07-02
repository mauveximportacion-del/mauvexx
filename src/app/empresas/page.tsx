"use client"

import { motion } from "framer-motion"
import { GraduationCap, Handshake, Briefcase, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const services = [
  {
    title: "Capacitación corporativa",
    desc: "Programas de formación diseñados para empresas que quieren importar directamente desde USA.",
    icon: GraduationCap,
    href: "/empresas/capacitacion",
    features: ["Talleres presenciales y online", "Material exclusivo", "Certificación incluida"],
  },
  {
    title: "Alianzas estratégicas",
    desc: "Convierte tu negocio en un aliado Mauvex Import y accede a beneficios exclusivos.",
    icon: Handshake,
    href: "/empresas/alianzas",
    features: ["Comisiones preferenciales", "Soporte dedicado", "Red de contactos"],
  },
  {
    title: "Consultoría",
    desc: "Asesoría personalizada para optimizar tu cadena de importación y logística.",
    icon: Briefcase,
    href: "/empresas/consultoria",
    features: ["Diagnóstico gratuito", "Plan a medida", "Acompañamiento continuo"],
  },
]

export default function EmpresasPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20 md:py-28 bg-[var(--section-alt)] min-h-screen">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold rounded-full mb-4">Para empresas</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] mb-4">Soluciones empresariales</h1>
              <p className="text-lg text-[var(--muted)]">Lleva tu negocio al siguiente nivel con nuestras soluciones de importación corporativa.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-2xl bg-[var(--card)] border border-[var(--border)] p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                    <s.icon className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">{s.title}</h3>
                  <p className="text-sm text-[var(--muted)] mb-4">{s.desc}</p>
                  <ul className="space-y-1.5 mb-6">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-[var(--foreground)]/70">
                        <CheckCircle className="h-3.5 w-3.5 text-[var(--accent)]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)] group-hover:gap-2 transition-all">
                    Ver más <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
