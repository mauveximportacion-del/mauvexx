"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"

const phoneNumber = "51992956034"
const message = encodeURIComponent("¡Hola! Quiero más información sobre los cursos de importación.")

export default function WhatsAppButton() {
  const href = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <AnimatePresence>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs font-bold flex items-center justify-center animate-pulse">
          1
        </span>
      </motion.a>
    </AnimatePresence>
  )
}
