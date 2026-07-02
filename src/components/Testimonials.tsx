"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Emprendedor - Perú",
    avatar: "CM",
    text: "Gracias a Mauvex importé mi primer lote de productos desde Miami. En 2 semanas ya había recuperado mi inversión. El curso es increíblemente práctico.",
    rating: 5,
  },
  {
    name: "María Fernanda López",
    role: "Dueña de tienda online - Colombia",
    avatar: "ML",
    text: "Los mentores son excelentes. Resolvieron todas mis dudas sobre aduanas y logística. Ya tengo 3 proveedores en USA gracias a este curso.",
    rating: 5,
  },
  {
    name: "Andrés Rivera",
    role: "Importador - Chile",
    avatar: "AR",
    text: "La mejor inversión que he hecho. El módulo de productos rentables me ayudó a identificar un producto que me da 200% de margen.",
    rating: 5,
  },
  {
    name: "Valentina Gómez",
    role: "Emprendedora - Ecuador",
    avatar: "VG",
    text: "Pensé que importar era complicado, pero Mauvex lo hace sencillo. El soporte vía WhatsApp es rapidísimo. 100% recomendado.",
    rating: 5,
  },
  {
    name: "Diego Castillo",
    role: "Estudiante - Bolivia",
    avatar: "DC",
    text: "La comunidad es espectacular. Todos compartimos tips y proveedores. Ya estoy en mi tercer envío y cada vez aprendo más.",
    rating: 5,
  },
  {
    name: "Gabriela Torres",
    role: "CEO - México",
    avatar: "GT",
    text: "Tomé el curso de ecommerce + importación y en 3 meses lancé mi tienda online. Los resultados hablan por sí solos.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-semibold rounded-full mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-lg text-[var(--muted)]">
            Historias reales de personas que ya están importando y haciendo crecer su negocio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:shadow-lg transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-[var(--primary)]/10" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-sm font-bold text-[var(--primary)]">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[var(--foreground)]">{t.name}</div>
                  <div className="text-xs text-[var(--muted)]">{t.role}</div>
                </div>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                {t.text}
              </p>
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
