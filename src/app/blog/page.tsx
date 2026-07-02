"use client"

import { motion } from "framer-motion"
import { Target, Eye, Globe, Package, ShoppingBag, Users, TrendingUp, MessageCircle } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
)

const socials = [
  { name: "Instagram", icon: InstagramIcon, url: "https://www.instagram.com/jhonmazza/", color: "from-pink-500 to-purple-600", label: "@jhonmazza" },
  { name: "TikTok", icon: TikTokIcon, url: "https://www.tiktok.com/@john_import", color: "from-black to-gray-800", label: "@john_import" },
  { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/51992956034", color: "from-green-500 to-emerald-600", label: "992 956 034" },
]

const values = [
  { icon: Package, title: "Importaciones grupales", desc: "Organizamos compras consolidadas desde Miami para que obtengas el mejor precio." },
  { icon: ShoppingBag, title: "Tecnología de punta", desc: "Acceso a los últimos modelos de Apple y gadgets tecnológicos al por mayor y menor." },
  { icon: Users, title: "Comunidad activa", desc: "Más de 3,200 emprendedores ya confían en nosotros para sus importaciones." },
  { icon: TrendingUp, title: "Mayor margen de ganancia", desc: "Traemos productos directo de origen para que revendas con el mejor margen." },
]

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent)]/5" />
          <div className="absolute top-40 left-0 w-72 h-72 bg-[var(--primary)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold rounded-full mb-4">
                Quiénes somos
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] mb-4">
                Mauvex Import
              </h1>
              <p className="text-lg text-[var(--muted)]">
                Asesoría comercial, importaciones grupales desde Miami y venta de tecnología en Perú.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 md:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <Globe className="h-6 w-6 text-[var(--primary)]" />
                  Sobre nosotros
                </h2>
                <div className="space-y-4 text-[var(--muted)] leading-relaxed">
                  <p>
                    <strong className="text-[var(--foreground)]">Mauvex Import</strong> es una marca y comunidad de asesoría comercial 
                    y venta de tecnología en Perú. Somos conocidos en redes sociales por organizar 
                    <strong className="text-[var(--foreground)]"> importaciones grupales desde Miami (EE. UU.)</strong> y proveer 
                    productos tecnológicos a emprendedores y revendedores con envíos a nivel nacional.
                  </p>
                  <p>
                    Nuestro enfoque principal es ayudar a emprendedores a obtener un 
                    <strong className="text-[var(--foreground)]"> mayor margen de ganancia</strong> trayendo productos 
                    directamente desde origen, eliminando intermediarios y maximizando su rentabilidad.
                  </p>
                  <p>
                    Ofrecemos venta al por mayor y menor de artículos tecnológicos, incluyendo los 
                    modelos más recientes de Apple (iPhones, MacBooks, iPads) y otros gadgets de alta demanda.
                  </p>
                  <p>
                    Nuestra comunidad y promociones activas se pueden explorar a través de 
                    nuestra cuenta oficial de Instagram y mediante creadores asociados en TikTok.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] rounded-2xl p-8 text-white"
              >
                <Eye className="h-8 w-8 mb-4 text-white/80" />
                <h3 className="text-xl font-bold mb-3">Nuestra Visión</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Ser la comunidad de importación líder en Latinoamérica, conectando a emprendedores 
                  con las mejores oportunidades de negocio a nivel global y democratizando el acceso 
                  a productos tecnológicos de alta demanda.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-[var(--accent)] to-emerald-700 rounded-2xl p-8 text-white"
              >
                <Target className="h-8 w-8 mb-4 text-white/80" />
                <h3 className="text-xl font-bold mb-3">Nuestra Misión</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Empoderar a emprendedores y revendedores peruanos con herramientas, conocimientos 
                  y redes de contacto que les permitan importar productos de calidad desde Estados Unidos 
                  al mejor precio, maximizando sus márgenes de ganancia.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <h2 className="text-2xl font-bold text-[var(--foreground)] text-center mb-8">
                ¿Por qué elegir Mauvex Import?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                      <v.icon className="h-5 w-5 text-[var(--primary)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--foreground)] text-sm">{v.title}</h4>
                      <p className="text-xs text-[var(--muted)] mt-1">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-[var(--foreground)] text-center mb-8">
                Síguenos en redes sociales
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r ${s.color} text-white shadow-lg hover:shadow-xl transition-all`}
                  >
                    <s.icon className="h-5 w-5" />
                    <div className="text-left">
                      <div className="text-xs font-medium opacity-80">{s.name}</div>
                      <div className="font-semibold">{s.label}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
