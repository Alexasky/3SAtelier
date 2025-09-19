import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Phone, MapPin, Clock, Mail } from "lucide-react"
import Link from "next/link"

export function CleaningContact() {
  return (
    <section id="contact" className="py-20 bg-brand/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Контакты и заказ</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Хотите подарить вашей одежде профессиональный уход? Свяжитесь с нами, чтобы заказать услугу или принести вещи в ателье.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-accent" />
                <span>Контактная информация</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Телефон</p>
                  <p className="text-muted-foreground">+7 (904) 525-64-25</p>
                </div>
              </div>
              {/* <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">cleaning@3satelier.ru</p>
                </div>
              </div> */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Адрес</p>
                  <p className="text-muted-foreground">ул. Парашютная, 42, корп. 1</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Часы работы</p>
                  <p className="text-muted-foreground">Пн–Пт: 9:00–19:00</p>
                  <p className="text-muted-foreground">Сб: 10:00–17:00</p>
                  <p className="text-muted-foreground">Вс: выходной</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Как это работает</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-semibold">Свяжитесь с нами</p>
                  <p className="text-sm text-muted-foreground">Позвоните или приходите, чтобы заказать услугу</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-semibold">Оценка</p>
                  <p className="text-sm text-muted-foreground">Мы оценим вещи и назовём стоимость</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-semibold">Профессиональная чистка</p>
                  <p className="text-sm text-muted-foreground">Ваши вещи обрабатываются экспертами «Пингвин»</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="font-semibold">Получение заказа</p>
                  <p className="text-sm text-muted-foreground">Заберите свежие и чистые вещи</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Заказать услугу</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
