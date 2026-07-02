"use client"

import { motion } from "framer-motion"
import { Building2, Store, Truck, Ship, Warehouse, Package } from "lucide-react"

const companies = [
  { name: "LogiTrade Perú", icon: Truck },
  { name: "ShopGlobal", icon: Store },
  { name: "Importa Fácil", icon: Package },
  { name: "Courier Express", icon: Ship },
  { name: "Aduanas Pro", icon: Warehouse },
  { name: "Distribuidora ABC", icon: Building2 },
]

const logos = [
  { name: "AliExpress Partners" },
  { name: "Amazon Business" },
  { name: "DHL Commerce" },
  { name: "eBay Global" },
]

export default function Companies() {
  return (
    <section className="py-16 md:py-20 bg-[var(--section-alt)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-3">
            Empresas que confían en nosotros
          </h3>
          <p className="text-[var(--muted)]">
            Colaboramos con las mejores empresas de logística y comercio internacional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-16 rounded-xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center px-6 hover:shadow-md transition-all"
            >
              <span className="text-sm font-bold text-[var(--primary)]">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-center gap-2 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/20 transition-all"
            >
              <company.icon className="h-5 w-5 text-[var(--primary)]" />
              <span className="text-sm font-medium text-[var(--foreground)]">{company.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
