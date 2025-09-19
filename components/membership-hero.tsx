'use client';
import Image from 'next/image';
import { Button } from './ui/button';
import { scrollToSection } from '@/lib/scrollTo';

export function MembershipHero() {
  return (
		<section className="relative pt-40 pb-20 px-4 bg-brand/50">
			<Image
				src="/modern-sewing-workspace-with-natural-light.png"
				alt="Креативное коворкинг-пространство"
				fill
				className="object-cover opacity-20"
				priority
				sizes="100vw"
			/>
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Гибкие тарифные планы</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-balance">
          Выберите идеальный план для своего творческого пути. <br/> От почасовых пакетов до безлимитного доступа — у нас есть варианты, которые подойдут вашему расписанию и бюджету.
        </p>
        <Button size="lg" className="text-lg px-8 py-3 cursor-pointer" onClick={() => scrollToSection("mb-plan")}>
          Оформить абонемент
        </Button>
      </div>
    </section>
  )
}
