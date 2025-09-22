import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "3S Atelier — Шей. Делись. Вдохновляйся.",
  description:
    "Творческое коворкинг-пространство с швейными машинами, мастер-классами и дружным сообществом в Санкт-Петербурге.",
  other: {
    "yandex-verification": "fe59a0290de9ce04",
  },
  keywords: "химчистка, прачечная, услуги, одежда, Москва, 3S Atelier, Пингвин",
  openGraph: {
    title: "3S Atelier – Cleaning & Dry-Cleaning",
    description: "High-quality cleaning services with Пингвин.",
    url: "https://3satelier.ru",
    siteName: "3S Atelier",
    images: [
      {
        url: "https://3satelier.ru/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "3S Atelier Cleaning Services",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  alternates: {
    canonical: "https://3satelier.ru",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${dmSans.variable} antialiased`}>
        <Suspense fallback={null}>
          <Header />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
