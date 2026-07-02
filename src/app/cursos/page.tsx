"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Package, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const courses = [
  {
    title: "Importación",
    desc: "Aprende todo el proceso de importación desde Estados Unidos a Latinoamérica paso a paso. Incluye acceso a viajeros, courier $8 x KG y asesoría personalizada.",
    price: "S/ 99",
    oldPrice: "S/ 149",
    popular: true,
    icon: Package,
    features: [
      "Acceso a viajeros desde $35 USD",
      "Courier exclusivo $8 x KG",
      "Asesoría completa en importación",
      "Lista de productos rentables",
      "Grupo VIP de importadores",
    ],
  },
  {
    title: "Proveedores",
    desc: "Accede a nuestra base exclusiva de proveedores verificados en USA. Conecta directamente con fabricantes y mayoristas confiables.",
    price: "S/ 29",
    oldPrice: "S/ 99",
    popular: false,
    icon: TrendingUp,
    features: [
      "Base de datos de proveedores USA",
      "Fabricantes verificados",
      "Mayoristas confiables",
      "Actualización mensual",
      "Soporte prioritario",
    ],
  },
]

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="relative py-20 md:py-28 min-h-screen flex items-center overflow-hidden bg-[var(--background)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/fondoservicios.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold rounded-full mb-4">
                Elige tu servicio
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
                Nuestros servicios
              </h1>
              <p className="text-lg text-[var(--muted)]">
                Accede a tarifas exclusivas de courier, lista de viajeros y asesoría personalizada.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {courses.map((course, i) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    course.popular
                      ? "bg-[var(--primary)] text-white shadow-2xl shadow-[var(--primary)]/25 scale-105 md:scale-110"
                      : "bg-[var(--card)] border border-[var(--border)] hover:shadow-xl"
                  }`}
                >
                  {course.popular && (
                    <div className="absolute top-0 right-0 bg-[var(--accent)] text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-10">
                      Más popular
                    </div>
                  )}
                  <div className="p-6 sm:p-8 space-y-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      course.popular ? "bg-white/15" : "bg-[var(--accent)]/10"
                    }`}>
                      <course.icon className={`h-6 w-6 ${course.popular ? "text-white" : "text-[var(--accent)]"}`} />
                    </div>

                    <div>
                      <h3 className={`text-2xl font-bold mb-1 ${course.popular ? "text-white" : "text-[var(--foreground)]"}`}>
                        {course.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${course.popular ? "text-white/70" : "text-[var(--muted)]"}`}>
                        {course.desc}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {course.features.map((f, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle className={`h-4 w-4 shrink-0 mt-0.5 ${course.popular ? "text-[var(--accent)]" : "text-[var(--accent)]"}`} />
                          <span className={`text-sm ${course.popular ? "text-white/80" : "text-[var(--foreground)]/80"}`}>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`pt-4 border-t ${course.popular ? "border-white/15" : "border-[var(--border)]"}`}>
                      <div className="flex items-end justify-between">
                        <div>
                          <span className={`text-xs ${course.popular ? "text-white/60" : "text-[var(--muted)]"}`}>Desde</span>
                          <div className="flex items-center gap-2">
                            <span className={`text-lg line-through ${course.popular ? "text-white/40" : "text-[var(--muted)]"}`}>{course.oldPrice}</span>
                            <div className={`text-3xl font-black ${course.popular ? "text-white" : "text-[var(--foreground)]"}`}>
                              {course.price}
                            </div>
                          </div>
                        </div>
                        <Link href="/pagos">
                          <Button
                            variant={course.popular ? "white" : "default"}
                            size="lg"
                          >
                            Pagar ahora
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
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
