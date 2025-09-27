import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { MapPin, Phone, MessageCircle } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Адрес",
      details: ["Парашютная 42, корпус 1", "Приморский район", "Санкт-Петербург, Россия"],
    },
    {
      icon: Phone,
      title: "Телефон",
      details: ["+7 (904) 525-64-25", "Доступен в рабочее время", "Запись по телефону"],
    },
    {
      icon: MessageCircle,
      title: "Мессенджеры",
      details: ["WhatsApp: +7 (904) 525-64-25", "Telegram: @atelier3s", "Быстрые ответы гарантированы"],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Связаться с нами</h2>
          <p className="text-lg text-gray-600">У нас есть несколько способов связи — выберите удобный для вас</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactDetails.map((detail, index) => {
            const IconComponent = detail.icon
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{detail.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {detail.details.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-gray-600 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
