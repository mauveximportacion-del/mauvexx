"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, ArrowRight, Search, FileText, TrendingUp, Package } from "lucide-react"

const categories = ["Todos", "Importación Básica", "Productos Rentables", "Logística", "Ecommerce"]

const courses = [
  {
    title: "Importación desde Cero",
    desc: "Aprende todo el proceso de importación desde Estados Unidos a Latinoamérica paso a paso.",
    category: "Importación Básica",
    duration: "8 semanas",
    students: 1200,
    rating: 4.9,
    price: "$97 USD",
    popular: true,
    icon: Package,
  },
  {
    title: "Productos Rentables 2026",
    desc: "Descubre qué productos importar con mayor margen de ganancia y tendencias actuales.",
    category: "Productos Rentables",
    duration: "6 semanas",
    students: 890,
    rating: 4.8,
    price: "$127 USD",
    popular: false,
    icon: TrendingUp,
  },
  {
    title: "Logística y Aduanas Pro",
    desc: "Domina los trámites aduaneros, couriers internacionales y documentación requerida.",
    category: "Logística",
    duration: "4 semanas",
    students: 650,
    rating: 4.7,
    price: "$87 USD",
    popular: false,
    icon: Package,
  },
  {
    title: "Ecommerce + Importación",
    desc: "Combina importación con ventas online. Crea tu tienda y empieza a vender ya.",
    category: "Ecommerce",
    duration: "10 semanas",
    students: 450,
    rating: 4.9,
    price: "$157 USD",
    popular: true,
    icon: FileText,
  },
  {
    title: "Investigación de Productos",
    desc: "Técnicas avanzadas para encontrar productos ganadores en Amazon y mayoristas USA.",
    category: "Productos Rentables",
    duration: "4 semanas",
    students: 720,
    rating: 4.6,
    price: "$67 USD",
    popular: false,
    icon: TrendingUp,
  },
  {
    title: "Importación para Emprendedores",
    desc: "Enfocado en pequeños emprendedores que quieren empezar a importar sin experiencia.",
    category: "Importación Básica",
    duration: "6 semanas",
    students: 980,
    rating: 4.8,
    price: "$77 USD",
    popular: false,
    icon: Users,
  },
]

export default function Courses() {
  const [active, setActive] = useState("Todos")
  const [search, setSearch] = useState("")

  const filtered = courses.filter((c) => {
    const matchCategory = active === "Todos" || c.category === active
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <section id="cursos" className="py-20 md:py-28 bg-[var(--section-alt)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold rounded-full mb-4">
            Cursos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Cursos destacados
          </h2>
          <p className="text-lg text-[var(--muted)]">
            Formación práctica y actualizada para importar con éxito desde Estados Unidos.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted)]" />
            <input
              type="text"
              placeholder="Buscar cursos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[var(--card)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                  active === cat
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[var(--card)] text-[var(--muted)] hover:text-[var(--foreground)] border border-[var(--border)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((course) => (
              <motion.div
                key={course.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden hover:shadow-xl hover:shadow-[var(--primary)]/5 hover:-translate-y-1 transition-all duration-300"
              >
                {course.popular && (
                  <div className="absolute top-0 right-0 bg-[var(--accent)] text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl z-10">
                    Más popular
                  </div>
                )}
                <div className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                    <course.icon className="h-6 w-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1">{course.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{course.desc}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" /> {course.students}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 text-yellow-500" /> {course.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
                    <span className="text-xl font-bold text-[var(--primary)]">{course.price}</span>
                    <Button variant="primary" size="sm">
                       Ver más
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-[var(--muted)]">
            No se encontraron cursos con ese filtro.
          </div>
        )}
      </div>
    </section>
  )
}
