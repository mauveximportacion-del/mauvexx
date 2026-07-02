"use client"

import dynamic from "next/dynamic"

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false })
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false })
const Services = dynamic(() => import("@/components/Services"), { ssr: false })
const WhyMauvex = dynamic(() => import("@/components/WhyMauvex"), { ssr: false })
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false })
const Almacenes = dynamic(() => import("@/components/Almacenes"), { ssr: false })
const FAQSection = dynamic(() => import("@/components/FAQ"), { ssr: false })
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false })
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false })
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false })
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), { ssr: false })

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyMauvex />
        <Almacenes />
        <Testimonials />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}
