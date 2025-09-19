
import { Users, Shield, Clock, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function MembershipFeatures() {
  const features = [
    {
      icon: Users,
      title: "Творческое сообщество",
      description: "Присоединяйтесь к яркому сообществу мастеров, дизайнеров и энтузиастов шитья, которые разделяют вашу страсть.",
    },
    {
      icon: Shield,
      title: "Профессиональное оборудование",
      description: "Доступ к высококачественным швейным машинам, оверлокам и специализированным инструментам.",
    },
    {
      icon: Clock,
      title: "Гибкий график",
      description: "Работаем ежедневно 10:00-21:00 с гибкой системой бронирования под ваше расписание.",
    },
    {
      icon: Heart,
      title: "Экспертная поддержка",
      description: "Получите помощь от опытных сотрудников а также общение с другими мастерами, чтобы получать советы и вдохновение.",
    },
  ]
  return (
    <section className="py-20 px-4 bg-brand/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают 3S Atelier?</h2>
          <p className="text-lg text-gray-600">
            Больше чем просто рабочее место — присоединяйтесь к сообществу, которое поддержит ваш творческий путь
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="bg-background text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}