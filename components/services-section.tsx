import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scissors, Settings, GraduationCap, Wrench, Camera, Calendar, Phone, Zap, Star, Clock } from "lucide-react"
import { motion } from 'framer-motion'
import { FadeInSection } from './fade-in-section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export function ServicesSection() {
  const popularServices = [
    { name: "Подшив джинсов", price: "500 ₽" },
    { name: "Ушивание юбки", price: "от 800 ₽" },
    { name: "Пошив платья", price: "от 8 000 ₽" },
    { name: "Замена молнии", price: "от 700 ₽" },
    { name: "Аренда на 1 час", price: "1 000 ₽" },
  ]

  const services = [
    {
      icon: <Scissors className="w-8 h-[1lh] text-accent" />,
      title: "Доступ к швейным машинам",
      description: "Бытовые и промышленные швейные машины для аренды на час или день – идеально для ваших проектов.",
      features: ["Бытовые машины", "Промышленные машины", "Оверлок", "Коверстич"],
    },
    {
      icon: <Settings className="w-8 h-8 text-accent" />,
      title: "Профессиональное оборудование",
      description: "Всё необходимое для шитья и работы с текстилем: удобные столы, утюги, паровое оборудование и многое другое.",
      features: ["Раскройные столы", "Пресс для пуговиц", "Гладильные станции", "Паровое оборудование"],
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      title: "Мастер-классы и занятия",
      description: "Учитесь новым навыкам с индивидуальными уроками и групповыми мастер-классами для любого уровня подготовки.",
      features: ["Индивидуальные занятия", "Групповые мастер-классы", "Абонементы на навыки", "Подходит для новичков"],
    },
    {
      icon: <Wrench className="w-8 h-8 text-accent" />,
      title: "Ремонт и индивидуальные работы",
      description: "Ремонт одежды, восстановление текстиля и индивидуальный пошив по вашим идеям.",
      features: ["Ремонт одежды", "Восстановление текстиля", "Индивидуальный пошив", "Подгонка"],
    },
    {
      icon: <Camera className="w-8 h-8 text-accent" />,
      title: "Аренда пространства",
      description: "Арендуйте уютное пространство для фотосессий, мероприятий или приватных мастер-классов.",
      features: ["Фотозона", "Примерочная", "Место для мероприятий", "Приватные мастер-классы"],
    },
    {
      icon: <Calendar className="w-8 h-8 text-accent" />,
      title: "В планах",
      description: "Скоро новые услуги и оборудование для расширения ваших творческих возможностей.",
      features: ["Машина для вышивки", "Индивидуальная вышивка", "Продвинутые мастер-классы", "Новое оборудование"],
    },
  ]

  return (
    <FadeInSection>
      <section id="services" className="py-20 bg-brand/50 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Наши услуги и цены</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Всё, что нужно для воплощения ваших творческих идей: современное оборудование, опытные наставники и поддержка нашего дружного сообщества.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Популярные услуги</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {popularServices.map((service, index) => (
                <Card key={index} className="text-center bg-accent/5 border-accent/20">
                  <CardContent className="p-4">
                    <p className="font-medium text-xl mb-2">{service.name}</p>
                    <p className="text-accent font-bold">{service.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-3 mb-4 text-xs/7">
                    <span className="flex item-center h-[1lh]">
                      {service.icon}
                    </span>
                    <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="bg-secondary text-secondary-foreground">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Свяжитесь с нами для уточнения цен и доступности</p>
            <div className='flex items-center justify-center gap-1'>
              <Phone size={30} className='mt-1'/>
              <p className="text-2xl font-semibold text-foreground">
                +7 9045256425
              </p>
            </div>          
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
