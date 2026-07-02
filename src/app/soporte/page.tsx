"use client"

import { motion } from "framer-motion"
import { MessageCircle, FileText, ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const faqs = [
  { q: "¿Cómo empiezo a importar con Mauvex?", a: "Solo regístrate en nuestro servicio de importación, únete al grupo de WhatsApp y empieza a recibir asesoría personalizada." },
  { q: "¿Cuánto tiempo tarda un envío desde Miami?", a: "Entre 5 y 12 días hábiles dependiendo del destino y el tipo de producto." },
  { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos Yape, Plin, BCP e Interbank. También transferencias internacionales." },
  { q: "¿Hacen envíos a todo Perú?", a: "Sí, realizamos envíos a nivel nacional a través de nuestros couriers asociados." },
  { q: "¿Necesito experiencia previa para importar?", a: "No, te guiamos paso a paso. Desde la compra hasta que recibes tu producto." },
]

export default function SoportePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20 md:py-28 bg-[var(--section-alt)] min-h-screen">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold rounded-full mb-4">Centro de ayuda</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">¿En qué podemos ayudarte?</h1>
              <p className="text-lg text-[var(--muted)]">Respuestas rápidas a tus preguntas frecuentes.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-3 mb-12">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
                  <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                    <span className="font-semibold text-[var(--foreground)] text-sm">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-[var(--muted)] transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-5 text-sm text-[var(--muted)] leading-relaxed">{faq.a}</div>
                  )}
                </div>
              ))}
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://wa.me/51992956034" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white font-semibold rounded-xl hover:bg-[var(--accent-hover)] transition-all">
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </Link>
              <Link href="/#contacto" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-xl hover:bg-[var(--primary-light)] transition-all">
                <FileText className="h-5 w-5" /> Formulario de contacto
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
