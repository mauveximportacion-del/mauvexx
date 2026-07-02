"use client"

import { useState, useEffect, useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

function getSnapshot(): boolean {
  if (typeof window === "undefined") return false
  const stored = localStorage.getItem("theme")
  return stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
}

function subscribe(cb: () => void) {
  window.addEventListener("storage", cb)
  return () => window.removeEventListener("storage", cb)
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const isDark = useSyncExternalStore(subscribe, getSnapshot, () => false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [isDark])

  const toggle = () => {
    const next = !isDark
    localStorage.setItem("theme", next ? "dark" : "light")
    document.documentElement.classList.toggle("dark", next)
    window.dispatchEvent(new Event("storage"))
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Activar modo oscuro">
        <span className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="h-5 w-5 text-yellow-400" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="h-5 w-5 text-[var(--primary)]" />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  )
}
