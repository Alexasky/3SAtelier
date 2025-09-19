
import { Badge } from './ui/badge'
import { Check, Clock, Calendar, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'

export function MembershipPlans() {
  const plans = [
    {
      name: "10 часов",
      price: "3 500 ₽",
      duration: "1 неделя",
      description: "Идеально для небольших проектов и знакомства с нашим пространством",
      icon: Clock,
      features: [
        "10 часов доступа к мастерской",
        "Все швейные машины включены",
        "Базовые инструменты и оборудование",
        "Поддержка сообщества",
      ],
    },
    {
      name: "Безлимит 15 дней",
      price: "15 000 ₽",
      duration: "15 дней",
      description: "Самый популярный для интенсивных проектов",
      icon: Zap,
      popular: true,
      features: [
        "Безлимитный доступ к мастерской",
        "Все швейные машины включены",
        "Базовые инструменты и оборудование",
        "Скидки на мастер-классы",
      ],
    },
    {
      name: "60 часов",
      price: "18 000 ₽",
      duration: "1 месяц",
      description: "Отличное соотношение цена-качество для постоянных творцов",
      icon: Calendar,
      features: [
        "60 часов доступа к мастерской",
        "Все швейные машины включены",
        "Базовые инструменты и оборудование",
        "Приоритетное бронирование",
        "Индивидуальная консультация",
      ],
    },
    {
      name: "120 часов",
      price: "33 000 ₽",
      duration: "2 месяца",
      description: "Максимальная выгода для серьезных мастеров",
      icon: Calendar,
      features: [
        "120 часов доступа к мастерской",
        "Все швейные машины включены",
        "Базовые инструменты и оборудование",
        "Приоритетное бронирование",
        "Индивидуальная консультация",
      ],
    },
  ]

  const additionalServices = [
    {
      name: "Ателье на день",
      price: "от 5000 ₽",
      description: "Арендуйте все пространство для своего мероприятия или интенсивного проекта",
    },
  ]

  return (
    <section id='mb-plan' className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Выберите свой идеальный план</h2>
          <p className="text-lg text-gray-600">
            Все планы включают доступ к профессиональному швейному оборудованию и нашему творческому сообществу
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan) => {
            const IconComponent = plan.icon
            return (
              <Card key={plan.name} className={`relative ${plan.popular ? "border-accent border-2 shadow-lg" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white">
                    Самый популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-accent">{plan.price}</div>
                  <CardDescription className="text-sm text-gray-500">{plan.duration}</CardDescription>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full cursor-pointer" variant={plan.popular ? "default" : "outline"}>
                    <Link href="/contact">Заказать абонемент</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-primary rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-6">Дополнительные услуги </h3>
          <div className="max-w-md mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <div className="text-2xl font-bold text-accent">{service.price}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Button asChild variant="outline" className="w-full bg-transparent cursor-pointer">
                    <Link href="/contact">Связаться с нами</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
