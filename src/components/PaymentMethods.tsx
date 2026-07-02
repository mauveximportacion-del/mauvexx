"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CreditCard, CheckCircle, ArrowRight, Copy, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Step = "payment" | "data" | "success"

interface FormData {
  name: string
  city: string
}

export default function PaymentMethods() {
  const [step, setStep] = useState<Step>("payment")
  const [method, setMethod] = useState<"yape" | "plin" | "bcp" | "interbank" | null>(null)
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState<FormData>({
    name: "",
    city: "",
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = () => {
    const errs: Partial<FormData> = {}
    if (!form.name.trim()) errs.name = "Obligatorio"
    if (!form.city.trim()) errs.city = "Obligatorio"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleContinueToData = () => {
    setStep("data")
  }

  const handleConfirm = () => {
    if (validate()) setStep("success")
  }

  const whatsappMessage = encodeURIComponent(
    `¡Hola! Ya me uní a las sesiones.\n\n` +
    `Nombre: ${form.name}\n` +
    `Ciudad: ${form.city}\n\n` +
    `Método de pago: ${method?.toUpperCase()}\n` +
    `Adjunto mi comprobante de pago.`
  )

  const accountData = {
    yape: { number: "961 211 505", name: "Milser Jhon Maza Mauriola" },
    plin: { number: "961 211 505", name: "Milser Jhon Maza Mauriola" },
    bcp: { number: "39505579740077", name: "Milser Jhon Maza Mauriola" },
    interbank: { number: "8983477471023", name: "Milser Jhon Maza Mauriola" },
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover max-md:scale-x-[-1]">
          <source src="/fondomauvex.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]" />
      <section id="pagos" className="relative py-20 md:py-28 min-h-screen flex items-center overflow-hidden">
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
            Beneficios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Únete a las sesiones
          </h2>
          <p className="text-lg text-white/70">
            Accede a tarifas exclusivas de courier, lista de viajeros y asesoría personalizada.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/importar-gratis" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all text-sm font-semibold">
              Grupo de importaciones gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {step === "payment" && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6 sm:p-8">
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">Elige cómo deseas unirte</h3>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {[
                    { id: "yape" as const, label: "Yape", img: "/yape.png" },
                    { id: "plin" as const, label: "Plin", img: "/plin.png" },
                    { id: "bcp" as const, label: "BCP", img: "/bcp.webp" },
                    { id: "interbank" as const, label: "Interbank", img: "/interbank.webp" },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setMethod(m.id)}
                      className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-3 min-h-[100px] justify-center ${
                        method === m.id
                          ? "border-[var(--primary)] bg-[var(--primary)]/5"
                          : "border-[var(--border)] hover:border-[var(--primary)]/30"
                      }`}
                    >
                      <Image src={m.img} alt={m.label} width={48} height={48} className="object-contain w-12 h-12" />
                      <span className="text-xs font-semibold text-[var(--foreground)]">{m.label}</span>
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {method === "yape" && (
                    <motion.div key="yape" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
                      <p className="text-sm font-medium text-[var(--foreground)]">Escanea el código QR con Yape</p>
                      <div className="inline-block p-4 bg-white rounded-xl">
                        <Image src="/qr_yape.jpg" alt="QR Yape Mauvex" width={240} height={240} className="object-contain" />
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <span className="text-[var(--muted)]">O paga al número:</span>
                        <button onClick={() => copyToClipboard(accountData.yape.number)} className="font-bold text-[var(--primary)] hover:underline flex items-center gap-1">
                          {accountData.yape.number}
                          {copied ? <Check className="h-4 w-4 text-[var(--accent)]" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                    </motion.div>
                  )}
                  {method === "plin" && (
                    <motion.div key="plin" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
                      <p className="text-sm font-medium text-[var(--foreground)]">Escanea el código QR con Plin</p>
                      <div className="inline-block p-4 bg-white rounded-xl">
                        <Image src="/qr_plin_mauvex.jpg" alt="QR Plin Mauvex" width={240} height={240} className="object-contain" />
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <span className="text-[var(--muted)]">O paga al número:</span>
                        <button onClick={() => copyToClipboard(accountData.plin.number)} className="font-bold text-[var(--primary)] hover:underline flex items-center gap-1">
                          {accountData.plin.number}
                          {copied ? <Check className="h-4 w-4 text-[var(--accent)]" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                    </motion.div>
                  )}
                  {method === "bcp" && (
                    <motion.div key="bcp" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                      <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">Cuentas Bancarias Soles</p>
                      <div className="p-4 rounded-xl bg-[var(--background)] space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-[var(--muted)]">Cuenta:</span><span className="font-semibold text-[var(--foreground)]">{accountData.bcp.number}</span></div>
                        <div className="flex justify-between"><span className="text-[var(--muted)]">Titular:</span><span className="font-semibold text-[var(--foreground)]">{accountData.bcp.name}</span></div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard(accountData.bcp.number)} className="w-full">
                        {copied ? <Check className="mr-2 h-4 w-4 text-[var(--accent)]" /> : <Copy className="mr-2 h-4 w-4" />}
                        Copiar número de cuenta
                      </Button>
                    </motion.div>
                  )}
                  {method === "interbank" && (
                    <motion.div key="interbank" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                      <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">Cuentas Bancarias Soles</p>
                      <div className="p-4 rounded-xl bg-[var(--background)] space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-[var(--muted)]">Cuenta:</span><span className="font-semibold text-[var(--foreground)]">{accountData.interbank.number}</span></div>
                        <div className="flex justify-between"><span className="text-[var(--muted)]">Titular:</span><span className="font-semibold text-[var(--foreground)]">{accountData.interbank.name}</span></div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard(accountData.interbank.number)} className="w-full">
                        {copied ? <Check className="mr-2 h-4 w-4 text-[var(--accent)]" /> : <Copy className="mr-2 h-4 w-4" />}
                        Copiar número de cuenta
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!method && (
                  <div className="text-center py-8 text-sm text-[var(--muted)]">
                    Selecciona un método de pago arriba
                  </div>
                )}

                {method && (
                  <div className="mt-6 pt-6 border-t border-[var(--border)] text-center space-y-3">
                    {(method === "bcp" || method === "interbank") && (
                      <p className="text-xs text-[var(--muted)] bg-[var(--background)] rounded-lg px-3 py-2">
                        ⚠️ Transferencia, depósito en agente o en ventanilla sujeto a comisión Interplaza dependiendo de su entidad bancaria.
                      </p>
                    )}
                    <p className="text-sm font-medium text-[var(--foreground)]">
                      Total a pagar: <span className="text-xl font-bold text-[var(--accent)]">S/ 99</span>
                    </p>
                    <Button variant="primary" size="lg" className="w-full" onClick={handleContinueToData}>
                      Ya me uní
                      <CheckCircle className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-[var(--muted)]">JONH IMPORT </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {step === "data" && (
            <motion.div
              key="data"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6 sm:p-8 space-y-5"
            >
              <h3 className="text-lg font-bold text-[var(--foreground)]">Tus datos</h3>

              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">Nombre completo *</label>
                <input type="text" value={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }); if (errors.name) setErrors({ ...errors, name: undefined }) }}
                  className={`w-full px-4 py-3 rounded-lg bg-[var(--background)] border ${errors.name ? "border-red-400" : "border-[var(--border)]"} text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30`} placeholder="Ej: Carlos Mendoza" />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">Ciudad *</label>
                <input type="text" value={form.city} onChange={(e) => { setForm({ ...form, city: e.target.value }); if (errors.city) setErrors({ ...errors, city: undefined }) }}
                  className={`w-full px-4 py-3 rounded-lg bg-[var(--background)] border ${errors.city ? "border-red-400" : "border-[var(--border)]"} text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30`} placeholder="Ej: Lima, Perú" />
                {errors.city && <p className="text-xs text-red-400 mt-1">{errors.city}</p>}
              </div>

              <Button variant="default" size="lg" className="w-full" onClick={handleConfirm}>
                Confirmar
                <CheckCircle className="ml-2 h-4 w-4" />
              </Button>

              <button onClick={() => setStep("payment")} className="text-sm text-[var(--muted)] hover:text-[var(--primary)] hover:underline mx-auto block">
                ← Volver a métodos de pago
              </button>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-8 text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-[var(--accent)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">¡Gracias por unirte!</h3>
                <p className="text-sm text-[var(--muted)]">
                  Confirma tu registro enviando un mensaje por WhatsApp.
                </p>
              </div>

              <div className="bg-[var(--background)] rounded-xl p-4 text-left text-sm space-y-1">
                <p><span className="text-[var(--muted)]">Nombre:</span> <span className="font-medium text-[var(--foreground)]">{form.name}</span></p>
                <p><span className="text-[var(--muted)]">Ciudad:</span> <span className="font-medium text-[var(--foreground)]">{form.city}</span></p>
                <p><span className="text-[var(--muted)]">Método:</span> <span className="font-medium text-[var(--foreground)]">{method?.toUpperCase()}</span></p>
              </div>

              <a
                href={`https://wa.me/51992956034?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="default" size="xl" className="w-full text-base">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Enviar comprobante por WhatsApp
                </Button>
              </a>

              <button onClick={() => { setStep("payment"); setMethod(null); setForm({ name: "", city: "" }) }}
                className="text-sm text-[var(--muted)] hover:text-[var(--primary)] hover:underline">
                Registrar otro pago
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
    </>
  )
}
