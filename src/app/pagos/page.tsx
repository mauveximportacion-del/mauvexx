"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import PaymentMethods from "@/components/PaymentMethods"

export default function PagosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PaymentMethods />
      </main>
      <Footer />
    </>
  )
}
