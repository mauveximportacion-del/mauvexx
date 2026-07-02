"use client"

import { motion } from "framer-motion"
import { ShieldCheck, CreditCard, Plane, RotateCcw, FileText, Gavel } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const sections = [
  {
    icon: Gavel,
    title: "1. Servicios",
    content: "Mauvex Import ofrece servicios de asesoría comercial, importaciones grupales desde Miami y venta de tecnología. Nos reservamos el derecho de modificar o discontinuar cualquier servicio sin previo aviso.",
  },
  {
    icon: CreditCard,
    title: "2. Pagos",
    content: "Los pagos se realizan a través de Yape, Plin, BCP o Interbank. Una vez confirmado el pago, el servicio se activa en un plazo máximo de 24 horas hábiles.",
  },
  {
    icon: Plane,
    title: "3. Envíos",
    content: "Los tiempos de envío estimados son de 5 a 12 días hábiles. Mauvex Import no se responsabiliza por demoras aduaneras fuera de nuestro control.",
  },
  {
    icon: RotateCcw,
    title: "4. Reembolsos",
    content: "No se realizan reembolsos una vez que el servicio ha sido activado. Para casos excepcionales, contacta a nuestro equipo de soporte.",
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="relative py-20 md:py-28 bg-[var(--section-alt)] min-h-screen overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--primary)]/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[var(--accent)]/5 blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold rounded-full mb-4">
                <FileText className="h-4 w-4" /> Legal
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">Términos y condiciones</h1>
              <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
                Al acceder y utilizar los servicios de Mauvex Import, aceptas los siguientes términos y condiciones. Si no estás de acuerdo, no debes usar nuestros servicios.
              </p>
            </motion.div>

            <motion.div variants={container} initial="hidden" animate="show" className="grid gap-5">
              {sections.map((s) => (
                <motion.div
                  key={s.title}
                  variants={item}
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="group relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 sm:p-7 transition-all hover:border-[var(--primary)]/30 hover:shadow-lg"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="relative flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)]/20 transition-colors">
                      <s.icon className="h-6 w-6 text-[var(--primary)]" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-[var(--foreground)] mb-2">{s.title}</h2>
                      <p className="text-sm text-[var(--muted)] leading-relaxed">{s.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-10 flex items-center gap-3 justify-center">
              <ShieldCheck className="h-4 w-4 text-[var(--muted)]" />
              <p className="text-xs text-[var(--muted)]">Última actualización: Julio 2026</p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
