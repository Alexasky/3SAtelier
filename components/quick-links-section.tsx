import Link from "next/link"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Users, Scissors, GraduationCap, Camera } from "lucide-react"
import { FadeInSection } from './fade-in-section'

export function QuickLinksSection() {
  const quickLinks = [
    {
      title: "Абонементы",
      description: "Гибкие тарифы на рабочее пространство: от 10 часов до безлимита",
      icon: Users,
      href: "/membership",
      highlight: "от 3 500 ₽",
    },
    {
      title: "Ателье / Ремонт",
      description: "Профессиональный ремонт одежды и индивидуальный пошив",
      icon: Scissors,
      href: "/services",
      highlight: "Экспертный пошив",
    },
    {
      title: "Мастер-классы",
      description: "Изучайте новые техники шитья с опытными наставниками и мастерами",
      icon: GraduationCap,
      href: "/master-classes",
      highlight: "от 2 500 ₽",
    },
    {
      title: "Галерея",
      description: "Познакомьтесь с нашим креативным пространством и проектами сообщества",
      icon: Camera,
      href: "/gallery",
      highlight: "Посмотреть зал",
    },
  ]
  return (
		<FadeInSection>
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Изучите наши услуги</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Откройте для себя всё, что предлагает 3S Atelier — от гибких абонементов и профессионального ремонта до
							творческих мастер-классов
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{quickLinks.map((link) => {
							const IconComponent = link.icon
							return (
								<Card
									key={link.title}
									className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/20"
								>
									<CardHeader className="text-center pb-4">
										<div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
											<IconComponent className="w-6 h-6 text-accent" />
										</div>
										<CardTitle className="text-xl">{link.title}</CardTitle>
										<div className="text-sm font-semibold text-accent">{link.highlight}</div>
									</CardHeader>
									<CardContent className="text-center">
										<CardDescription className="mb-6">{link.description}</CardDescription>
										<Button asChild className="w-full">
											<Link href={link.href}>Узнать больше</Link>
										</Button>
									</CardContent>
								</Card>
							)
						})}
					</div>
				</div>
			</section>
		</FadeInSection>
  )
}
