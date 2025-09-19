"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

   const navigationItems = [
    { name: "Услуги ателье", href: "/services" },
    { name: "Абонементы", href: "/membership" },    
    { name: "Химчистка", href: "/cleaning" },
    { name: "Галерея", href: "/gallery" },
    { name: "Контакты", href: "/contact" },
  ]

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { rootMargin: "0px 0px 0px 0px" }
    );
    setIsScrolled(window.scrollY > 50);
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} id='top' className="absolute top-0 w-full h-px" />
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="relative flex items-center justify-between z-10">
            <Link href="/"> 
            <div className="flex items-center space-x-3 cursor-pointer">
              <Image src="/logo_opt.svg" alt="3S Atelier Logo" width={50} height={50} className="rounded-lg bg-[#EAD6F2]" />
              <div>
                <h1 className="text-xl font-bold text-foreground">3S ATELIER</h1>
                <p className="text-sm text-muted-foreground">SEW. SHARE. SPACE.</p>
              </div>
            </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors ${
                    pathname === item.href
                      ? "text-accent font-semibold"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
{/* 
            <Button asChild className="hidden lg:flex bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer">
              <Link href="/membership">Присоединяйся к нам</Link>
            </Button> */}
            <Button
              className="lg:hidden p-2 text-foreground hover:text-accent-foreground transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-0 left-0 right-0 bg-brand/95 backdrop-blur-sm border-t border-border shadow-lg">
              <nav className="container mx-auto px-4 pt-30 pb-6 space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block py-2 text-lg transition-colors ${
                      pathname === item.href
                        ? "text-accent-foreground font-semibold"
                        : "text-foreground hover:text-accent-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/membership" onClick={() => setIsMobileMenuOpen(false)}>
                      Присоединяйся к нам
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
