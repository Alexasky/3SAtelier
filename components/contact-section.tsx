'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Mail, MessageCircle, Instagram } from "lucide-react"
import ContactForm from './contact-form'
import { FadeInSection } from './fade-in-section'

export function ContactSection() {
  return (
    <FadeInSection>
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Готовы присоединиться к нашему творческому сообществу? Есть вопросы о наших услугах? 
              Мы будем рады услышать вас и помочь начать ваш путь в мире шитья.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-primary border-border mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground"><h3>Контактная информация</h3></CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">Адрес</h4>
                      <p className="text-muted-foreground">
                        ул. Парашютная, 42, корпус 1<br />
                        Приморский район
                        <br />
                        Санкт-Петербург
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">Часы работы</h4>
                      <p className="text-muted-foreground">Ежедневно: 10:00 – 21:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">Телефон</h4>
                      <p className="text-muted-foreground">+7 9045256425</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-card-foreground">Электронная почта</h4>
                      <p className="text-muted-foreground">Скоро появится</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/20 border-accent/30">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Мы в соцсетях</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="border-accent/50 bg-transparent cursor-pointer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Telegram
                    </Button>
                    <Button variant="outline" size="sm" className="border-accent/50 bg-transparent cursor-pointer">
                      <Instagram className="w-4 h-4 mr-2" />
                      Instagram
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">Ссылки на соцсети скоро появятся!</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Отправьте нам сообщение</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="bg-secondary/20 border-secondary/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">🎉 Специальное предложение к открытию</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Присоединяйтесь к нам <strong>6 сентября в 12:00</strong> на празднование торжественного открытия!
                </p>
                <p className="text-muted-foreground">
                  Специальные скидки, экскурсии, мини-мастер-классы и угощения. 
                  Приходите познакомиться с нашим сообществом и узнать, что такое 3S Atelier.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
