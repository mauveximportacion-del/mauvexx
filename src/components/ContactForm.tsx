"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react"

interface FormState {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs: Partial<FormState> = {}
    if (!form.name.trim()) errs.name = "El nombre es obligatorio"
    if (!form.email.trim()) errs.email = "El email es obligatorio"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Email inválido"
    if (!form.phone.trim()) errs.phone = "El teléfono es obligatorio"
    if (!form.message.trim()) errs.message = "El mensaje es obligatorio"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setForm({ name: "", email: "", phone: "", message: "" })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-semibold rounded-full">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
              ¿Listo para empezar a importar?
            </h2>
            <p className="text-lg text-[var(--muted)]">
              Déjanos tus datos y un asesor te contactará en las próximas 24 horas para resolver todas tus dudas.
            </p>

            <div className="space-y-4 pt-4">
              {[
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "hola@mauvex.com" },
                { icon: MapPin, text: "Miami, FL · Lima, PE" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-[var(--primary)]" />
                  </div>
                  <span className="text-sm text-[var(--foreground)]">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="text-sm text-[var(--muted)] mb-2">Horario de atención:</div>
              <div className="text-sm font-medium text-[var(--foreground)]">
                Lun - Vie: 9:00 AM - 7:00 PM (EST)
              </div>
              <div className="text-sm font-medium text-[var(--foreground)]">
                Sáb: 9:00 AM - 2:00 PM (EST)
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] text-center"
              >
                <CheckCircle className="h-16 w-16 text-[var(--accent)] mb-4" />
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">¡Mensaje enviado!</h3>
                <p className="text-[var(--muted)]">
                  Gracias por contactarnos. Te responderemos en las próximas 24 horas.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-[var(--background)] border ${
                      errors.name ? "border-red-400" : "border-[var(--border)]"
                    } text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 transition-all`}
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-[var(--background)] border ${
                        errors.email ? "border-red-400" : "border-[var(--border)]"
                      } text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 transition-all`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-[var(--background)] border ${
                        errors.phone ? "border-red-400" : "border-[var(--border)]"
                      } text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 transition-all`}
                      placeholder="+51 999 999 999"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg bg-[var(--background)] border ${
                      errors.message ? "border-red-400" : "border-[var(--border)]"
                    } text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 transition-all resize-none`}
                    placeholder="¿En qué podemos ayudarte?"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" variant="default" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
