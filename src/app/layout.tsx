import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Mauvex | Importa desde EE.UU. a Latinoamérica",
  description:
    "Aprende a importar productos desde Estados Unidos a Perú y Latinoamérica. Cursos online, mentorías personalizadas y logística integrada.",
  keywords: [
    "importación",
    "Estados Unidos",
    "Perú",
    "Latinoamérica",
    "cursos de importación",
    "negocio propio",
    "emprender",
  ],
  openGraph: {
    title: "Mauvex | Importa desde EE.UU.",
    description:
      "Aprende a importar productos desde Estados Unidos a Latinoamérica. Cursos con mentores expertos.",
    locale: "es_PE",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
