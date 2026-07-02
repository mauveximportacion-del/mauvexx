"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

const posts = [
  {
    title: "Guía completa para importar desde Estados Unidos en 2026",
    excerpt: "Todo lo que necesitas saber sobre el proceso de importación: documentos, costos, tiempos y consejos clave.",
    date: "15 Jun 2026",
    category: "Importación",
    image: "📦",
  },
  {
    title: "Los 10 productos más rentables para importar este año",
    excerpt: "Análisis de mercado con los productos con mayor demanda y margen de ganancia en Latinoamérica.",
    date: "8 Jun 2026",
    category: "Productos",
    image: "📊",
  },
  {
    title: "Cómo elegir el mejor courier para tus envíos",
    excerpt: "Comparativa de los mejores servicios de courier internacional para importar desde USA.",
    date: "1 Jun 2026",
    category: "Logística",
    image: "🚚",
  },
  {
    title: "Errores comunes al importar y cómo evitarlos",
    excerpt: "Aprende de los errores más frecuentes que cometen los importadores principiantes y cómo esquivarlos.",
    date: "25 May 2026",
    category: "Tips",
    image: "⚠️",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold rounded-full mb-4">
            Blog
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Artículos y recursos
          </h2>
          <p className="text-lg text-[var(--muted)]">
            Contenido actualizado sobre importación, tendencias de mercado y consejos prácticos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="h-44 flex items-center justify-center text-6xl bg-gradient-to-br from-[var(--primary)]/5 to-[var(--accent)]/5">
                {post.image}
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
                  <span className="px-2 py-0.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </span>
                </div>
                <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--muted)] line-clamp-2">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)] group-hover:gap-2 transition-all">
                  Leer más <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button variant="outline" size="lg">
            Ver todos los artículos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
