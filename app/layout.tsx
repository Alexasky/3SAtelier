import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "3S Atelier — Ателье и швейный коворкинг в Санкт-Петербурге",
  description:
    "3S Atelier — современное ателье и швейный коворкинг в СПб. Пошив и ремонт одежды, аренда швейных машин, мастер-классы и творческое сообщество.",
  other: {
    "yandex-verification": "fe59a0290de9ce04",
  },
  keywords: "ателье в спб, ателье одежды в спб, швейный коворкинг в санкт петербурге, творческое ателье спб, 3S Atelier",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104253463', 'ym');

              ym(104253463, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <Image
              src="https://mc.yandex.ru/watch/YOUR_COUNTER_ID"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </head>
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
