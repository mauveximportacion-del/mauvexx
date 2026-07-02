"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Search } from "lucide-react"

const faqs = [
  {
    q: "¿Necesito experiencia previa para tomar los cursos?",
    a: "No, nuestros cursos están diseñados desde nivel básico hasta avanzado. Empezamos desde los fundamentos de la importación.",
  },
  {
    q: "¿Cuánto dinero necesito para empezar a importar?",
    a: "Puedes empezar desde $200 USD. Te enseñamos a identificar productos de bajo costo con alta demanda.",
  },
  {
    q: "¿Importan a todo Latinoamérica?",
    a: "Sí, nuestros cursos cubren importación a Perú, Colombia, Chile, Ecuador, Bolivia, México y más países.",
  },
  {
    q: "¿Cuánto tiempo toma ver resultados?",
    a: "Muchos estudiantes generan su primera venta en menos de 30 días. El curso está optimizado para resultados rápidos.",
  },
  {
    q: "¿Los cursos tienen certificado?",
    a: "Sí, al completar cada curso recibes un certificado digital avalado por Mauvex.",
  },
  {
    q: "¿Ofrecen soporte después del curso?",
    a: "Sí, tienes acceso a nuestra comunidad exclusiva y soporte vía WhatsApp para resolver tus dudas.",
  },
  {
    q: "¿Puedo acceder a los cursos desde mi celular?",
    a: "Sí, nuestra plataforma es 100% responsive y puedes acceder desde cualquier dispositivo.",
  },
  {
    q: "¿Los precios están en dólares?",
    a: "Sí, los precios están en USD. Aceptamos múltiples métodos de pago incluyendo PayPal, tarjetas y transferencias.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [search, setSearch] = useState("")

  const filtered = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section id="faq" className="py-20 md:py-28 bg-[var(--section-alt)]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-[var(--muted)]">
            Resolvemos tus dudas sobre importación y nuestros cursos.
          </p>
        </motion.div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted)]" />
          <input
            type="text"
            placeholder="Buscar preguntas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--card)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30"
          />
        </div>

        <motion.div layout className="space-y-3">
          {filtered.map((faq, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl bg-[var(--card)] border border-[var(--border)] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-[var(--card-hover)] transition-colors"
              >
                <span className="font-medium text-[var(--foreground)] text-sm pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[var(--muted)] transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-sm text-[var(--muted)] leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-8 text-[var(--muted)]">
            No se encontraron preguntas con ese término.
          </div>
        )}
      </div>
    </section>
  )
}
