"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Warehouse, Users, Shield, MapPin, CheckCircle, Star, TrendingUp, Globe, Zap, Package } from "lucide-react"

const warehouses = [
  { img: "/almacen1.jpg", title: "Miami - Doral", desc: "Recepción y consolidación." },
  { img: "/almacen2.jpg", title: "Centro Logístico", desc: "Clasificación y preparación." },
  { img: "/almacen3.jpg", title: "Zona de Almacenaje", desc: "Guardado seguro." },
  { img: "/almacen4.jpg", title: "Área de Empaque", desc: "Embalaje profesional." },
]

const stats = [
  { icon: Warehouse, value: "4", label: "Almacenes" },
  { icon: Users, value: "3.2K+", label: "Clientes" },
  { icon: Shield, value: "98%", label: "Éxito" },
  { icon: Globe, value: "12+", label: "Países" },
]

const benefits = [
  { icon: Package, text: "Almacenes propios en Miami, FL", color: "from-blue-500 to-blue-600" },
  { icon: TrendingUp, text: "Más de 3,200 clientes satisfechos", color: "from-green-500 to-emerald-600" },
  { icon: Star, text: "Tarifas desde $8 x KG", color: "from-yellow-500 to-orange-600" },
  { icon: Zap, text: "Envío en 5-12 días hábiles", color: "from-purple-500 to-violet-600" },
  { icon: Globe, text: "Cobertura en 12+ países", color: "from-cyan-500 to-blue-600" },
  { icon: Shield, text: "Proceso 100% legal y seguro", color: "from-red-500 to-rose-600" },
]

export default function Almacenes() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section id="almacenes" ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--section-alt)] via-[var(--background)] to-[var(--section-alt)]" />

      <div className="absolute top-40 left-0 w-72 h-72 bg-[var(--primary)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl" />

      <motion.div style={{ y }} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] text-white text-sm font-semibold rounded-full mb-4 shadow-lg"
          >
            ⚡ Mauvex en números
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] mb-4 leading-tight">
            La mejor opción para{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              importar
            </span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-xl mx-auto">
            Almacenes propios, clientes felices y un proceso que habla por sí solo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group text-center p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-sm hover:shadow-xl hover:border-[var(--primary)]/20 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[var(--primary)]/20">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-black text-[var(--foreground)]">{stat.value}</div>
                <div className="text-sm text-[var(--muted)] font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-[var(--foreground)] text-center mb-10 flex items-center justify-center gap-2">
            <Warehouse className="h-6 w-6 text-[var(--primary)]" />
            Nuestros almacenes en Miami
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {warehouses.map((w, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative rounded-xl overflow-hidden bg-[var(--card)] border border-[var(--border)] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-32 sm:h-36 overflow-hidden">
                    <Image src={w.img} alt={w.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-white text-xs font-semibold drop-shadow-lg">{w.title}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col justify-center space-y-5 p-4"
            >
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-[var(--foreground)]">Recepcionamos, almacenamos y enviamos</h4>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Contamos con 4 almacenes estratégicamente ubicados en Miami, Florida. 
                  Recibimos tus compras de cualquier tienda USA, las consolidamos y las preparamos 
                  para enviarlas directo a tu país.
                </p>
              </div>
              <div className="space-y-2.5">
                {[
                  "Recepción de paquetes de cualquier tienda USA",
                  "Consolidación de múltiples compras en un solo envío",
                  "Almacenamiento seguro sin costo adicional",
                  "Empaque profesional para proteger tu mercancía",
                  "Despacho aéreo directo a tu país en 5-12 días",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[var(--accent)]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-[var(--accent)]" />
                    </div>
                    <span className="text-sm text-[var(--foreground)]/80">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
                  <MapPin className="h-4 w-4" />
                  Ubicados en Doral, Miami - Florida
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--accent)]/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-2xl" />
          <div className="relative grid md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="group flex items-center gap-4 p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${b.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <b.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-[var(--foreground)] font-semibold text-sm">{b.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-light)]" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative p-8 md:p-14">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-5">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block px-3 py-1 bg-white/10 text-white/90 text-xs font-semibold rounded-full"
                >
                  ¿Por qué Mauvex?
                </motion.span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                  La confianza de{" "}
                  <span className="text-[var(--accent)]">miles</span> de importadores
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  No solo decimos que somos buenos — nuestros clientes lo confirman. 
                  Únete a los más de 3,200 que ya importan con Mauvex.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-3"
              >
                {[
                  { emoji: "🇺🇸", label: "Miami, FL" },
                  { emoji: "🇵🇪", label: "Lima, PE" },
                  { emoji: "🇨🇴", label: "Bogotá, CO" },
                  { emoji: "🇨🇱", label: "Santiago, CL" },
                  { emoji: "🇪🇨", label: "Quito, EC" },
                  { emoji: "🇲🇽", label: "CDMX, MX" },
                ].map((loc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/10 backdrop-blur-sm"
                  >
                    <span className="text-lg">{loc.emoji}</span>
                    <span className="text-white text-sm font-medium">{loc.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle className="h-4 w-4 text-[var(--accent)]" />
                <span>Más de 3,200 clientes en 12+ países</span>
              </div>
              <div className="flex -space-x-2">
                {["CM", "ML", "AR", "VG", "DC", "GT"].map((init, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-white/20 border-2 border-[var(--primary)] flex items-center justify-center text-xs font-bold text-white">
                    {init}
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full bg-[var(--accent)] border-2 border-[var(--primary)] flex items-center justify-center text-xs font-bold text-white">
                  +3K
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
