"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo_opt.svg" alt="3S Atelier Logo" width={50} height={50} className="rounded-lg bg-[#EAD6F2]" />
            <div>
              <h1 className="text-xl font-bold text-foreground">3S ATELIER</h1>
              <p className="text-sm text-muted-foreground">SEW. SHARE. SPACE.</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent-foreground transition-colors cursor-pointer"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-accent-foreground transition-colors cursor-pointer"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("facilities")}
              className="text-foreground hover:text-accent-foreground transition-colors cursor-pointer"
            >
              Пространства
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-accent-foreground transition-colors cursor-pointer"
            >
              Галерея
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent-foreground transition-colors cursor-pointer"
            >
              Контакты
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer"
          >
            Вступить
          </Button>
        </div>
      </div>
    </header>
  )
}
