"use client"

import { motion } from "framer-motion"
import {
  Users,
  Package,
  Warehouse,
  Calculator,
  HeadphonesIcon,
  ShieldCheck,
  Zap,
  DollarSign,
  Globe,
  ListChecks,
} from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Lista Exclusiva de Viajeros",
    desc: "Acceso a nuestra red de viajeros confiables que traen tus productos desde USA. Tarifas desde USD 35.",
  },
  {
    icon: Package,
    title: "Courier Tarifa Exclusiva",
    desc: "US$ 8 x KG / US$ 4 x S.I. Precios súper competitivos nunca antes vistos para iPhone, perfumes y más.",
  },
  {
    icon: ListChecks,
    title: "Proveedores Certificados",
    desc: "Listado extenso de proveedores verificados en Estados Unidos para que compres con total confianza.",
  },
  {
    icon: Warehouse,
    title: "Almacén en Miami",
    desc: "Uso de nuestro almacén en Miami - Florida para recibir y consolidar tus compras antes del envío.",
  },
  {
    icon: Calculator,
    title: "Calculadora de Costos",
    desc: "Calculadora especializada en costeos para una mejor administración de tus importaciones.",
  },
  {
    icon: Zap,
    title: "Envío Rápido",
    desc: "Tiempo de envío de USA a Perú en solo 5 días hábiles. Rápido, seguro y con el mejor soporte.",
  },
  {
    icon: DollarSign,
    title: "Precios Competitivos",
    desc: "Precios súper competitivos en electrónicos, perfumes, ropa y más productos de alta demanda.",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte 2 Años",
    desc: "2 años de soporte y ayuda personalizada gratuita. Resolvemos todas tus dudas del proceso.",
  },
  {
    icon: Globe,
    title: "Cobertura Internacional",
    desc: "Realizamos envíos desde USA a Perú y otros países de Latinoamérica con total seguridad.",
  },
  {
    icon: ShieldCheck,
    title: "Proceso Seguro",
    desc: "Rápido, seguro y con el mejor soporte. Garantizamos la integridad de tus productos importados.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-[var(--section-alt)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold rounded-full mb-4">
            Beneficios y Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Todo lo que necesitas para importar desde USA
          </h2>
          <p className="text-lg text-[var(--muted)]">
            Tarifas exclusivas, almacén en Miami, proveedores certificados y soporte personalizado.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative p-5 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-3 group-hover:bg-[var(--accent)]/20 transition-colors">
                <service.icon className="h-5 w-5 text-[var(--accent)]" />
              </div>
              <h3 className="text-sm font-semibold text-[var(--foreground)] mb-1.5">
                {service.title}
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
