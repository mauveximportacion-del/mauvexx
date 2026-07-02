"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  const validate = () => {
    const errs: typeof errors = {}
    if (!form.email.trim()) errs.email = "El email es obligatorio"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Email inválido"
    if (!form.password.trim()) errs.password = "La contraseña es obligatoria"
    else if (form.password.length < 6) errs.password = "Mínimo 6 caracteres"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      // TODO: conectar con backend
    }
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen flex items-center justify-center bg-[var(--section-alt)]">
        <div className="w-full max-w-md px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-8 shadow-lg"
          >
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center justify-center mb-6">
                <Image src="/logo.png" alt="Mauvex" width={64} height={64} className="object-contain" />
              </Link>
              <h1 className="text-2xl font-bold text-[var(--foreground)]">Iniciar sesión</h1>
              <p className="text-sm text-[var(--muted)] mt-1">
                Accede a tu panel de estudiante
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                  Correo electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted)]" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value })
                      if (errors.email) setErrors({ ...errors, email: undefined })
                    }}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-[var(--background)] border ${
                      errors.email ? "border-red-400" : "border-[var(--border)]"
                    } text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30`}
                    placeholder="tu@email.com"
                  />
                </div>
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted)]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={(e) => {
                      setForm({ ...form, password: e.target.value })
                      if (errors.password) setErrors({ ...errors, password: undefined })
                    }}
                    className={`w-full pl-10 pr-12 py-3 rounded-lg bg-[var(--background)] border ${
                      errors.password ? "border-red-400" : "border-[var(--border)]"
                    } text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--foreground)]"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password}</p>}
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary)]/30" />
                  <span className="text-[var(--muted)]">Recordarme</span>
                </label>
                <a href="#" className="text-[var(--primary)] hover:underline font-medium">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Iniciar sesión
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-[var(--muted)]">
                ¿No tienes cuenta?{" "}
                <a href="#" className="text-[var(--primary)] hover:underline font-medium">
                  Regístrate gratis
                </a>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--border)]">
              <Link href="/">
                <Button variant="ghost" size="sm" className="w-full">
                  Volver al inicio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
