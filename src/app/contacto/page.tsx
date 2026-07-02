"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20 md:py-28 bg-[var(--section-alt)] min-h-screen">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold rounded-full mb-4">Contacto</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">Contáctanos</h1>
              <p className="text-lg text-[var(--muted)]">Estamos aquí para ayudarte.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-4">
                <div className="flex items-center gap-4 p-5 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">WhatsApp</p>
                    <Link href="https://wa.me/51992956034" target="_blank" className="text-sm text-[var(--primary)] hover:underline">992 956 034</Link>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">Ubicación</p>
                    <p className="text-sm text-[var(--muted)]">Miami, FL · Lima, Perú</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">Redes</p>
                    <div className="flex gap-3 text-sm">
                      <Link href="https://www.instagram.com/jhonmazza/" target="_blank" className="text-[var(--primary)] hover:underline">Instagram</Link>
                      <Link href="https://www.tiktok.com/@john_import" target="_blank" className="text-[var(--primary)] hover:underline">TikTok</Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <Link href="https://wa.me/51992956034" target="_blank" className="block w-full p-8 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white text-center space-y-4 hover:shadow-xl transition-all">
                  <MessageCircle className="h-12 w-12 mx-auto" />
                  <div>
                    <h3 className="text-xl font-bold">Escríbenos ahora</h3>
                    <p className="text-sm text-white/70">Respuesta en menos de 5 minutos</p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--primary)] font-bold rounded-xl">
                    Ir a WhatsApp <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
