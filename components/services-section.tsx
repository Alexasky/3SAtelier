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
    { name: "Пошив платья на заказ", price: "от 8 000 ₽" },
    { name: "Замена молнии", price: "от 700 ₽" },
    { name: "Аренда на 1 час с поддержкой", price: "1 000 ₽" },
  ]

  const mainMembershipPlans = [
    {
      title: "10 часов",
      price: "3 500 ₽",
      duration: "1 неделя",
      features: ["Гибкий график", "Доступ к оборудованию", "Общее креативное пространство"],
      icon: <Clock className="w-6 h-6 text-accent" />,
    },
    {
      title: "Безлимит",
      price: "15 000 ₽",
      duration: "15 дней",
      features: ["Неограниченный доступ", "Приоритетное бронирование", "Все виды оборудования", "Премиум-поддержка"],
      icon: <Star className="w-6 h-6 text-accent" />,
      popular: true,
    },
    {
      title: "Студия на день",
      price: "от 5 000 ₽",
      duration: "за день",
      features: ["Полный доступ к студии", "Приватное рабочее место", "Все оборудование", "Фотозона"],
      icon: <Zap className="w-6 h-6 text-accent" />,
    },
  ]

  const additionalPlans = [
    { title: "60 часов", price: "18 000 ₽", duration: "1 месяц" },
    { title: "120 часов", price: "33 000 ₽", duration: "2 месяца" },
    { title: "Мастер-класс", price: "от 2 500 ₽", duration: "за занятие" },
  ]
  
  const pricingCategories = [
    {
      title: "Укорачивание / Подшив",
      items: [
        { service: "Подшив джинсов", price: "500 ₽" },
        { service: "С сохранением фабричного низа", price: "800 ₽" },
        { service: "Женские брюки", price: "от 650 ₽" },
        { service: "Мужские брюки с брючной лентой", price: "650 ₽" },
        { service: "Спортивные штаны с подкладом", price: "от 650 ₽" },
        { service: "Мужские брюки с манжетой", price: "от 700 ₽" },
        { service: "Платье (прямое) / Юбка", price: "от 600 ₽" },
        { service: "Клёш платье/юбка", price: "от 700 ₽" },
        { service: "Кожаная юбка / брюки", price: "от 1000 ₽" },
        { service: "Блуза / Футболка", price: "от 800 ₽" },
        { service: "Жакет / Пиджак / Плащ", price: "от 1200 ₽" },
        { service: "Пальто", price: "1500 ₽" },
        { service: "Кожаное пальто (прямое)", price: "2300 ₽" },
        { service: "Клёш пальто", price: "2600 ₽" },
        { service: "Укоротить рукава", price: "от 600 ₽" },
      ],
    },
    {
      title: "Замена молнии",
      items: [
        { service: "Юбка, брюки", price: "от 700 ₽" },
        { service: "Молния на джинсах", price: "от 800 ₽" },
        { service: "Платье на подкладке", price: "от 1000 ₽" },
        { service: "Куртка", price: "от 2000 ₽" },
        { service: "Пуховик", price: "от 1700 ₽" },
        { service: "Кожаная куртка", price: "от 2000 ₽" },
        { service: "Пальто", price: "от 1500 ₽" },
        { service: "Дублёнка", price: "от 2800 ₽" },
        { service: "Шуба", price: "от 3000 ₽" },
      ],
    },
        {
      title: "Замена подкладки",
      items: [
        { service: "Юбка", price: "от 1200 ₽" },
        { service: "Пиджак", price: "от 3000 ₽" },
        { service: "Куртка", price: "от 3000 ₽" },
        { service: "Пальто", price: "от 3500 ₽" },
        { service: "Кожаная куртка", price: "от 4000 ₽" },
        { service: "Шуба", price: "от 4000-4500 ₽" },
      ],
    },
    {
      title: "Ушивание",
      items: [
        { service: "Брюки / Юбка", price: "от 800 ₽" },
        { service: "Джинсы", price: "от 800 ₽" },
        { service: "Вытачка / корректировка рельефов", price: "от 600 ₽" },
        { service: "Блуза / Футболка / Рубашка", price: "от 600 ₽" },
        { service: "Платье", price: "от 850 ₽" },
        { service: "Пиджак / Жакет", price: "от 1000 ₽" },
        { service: "Куртка / Пальто", price: "от 1500 ₽" },
        { service: "Шуба / Дублёнка", price: "от 3500 ₽" },
      ],
    },
    {
      title: "Индивидуальный пошив",
      items: [
        { service: "Юбка без подкладки", price: "от 4000 ₽" },
        { service: "С подкладкой", price: "от 4700 ₽" },
        { service: "Блуза / Жилет без подкладки", price: "от 6000 ₽" },
        { service: "Брюки без подкладки и карманов", price: "от 4500 ₽" },
        { service: "Брюки с подкладкой и карманами", price: "от 6500 ₽" },
        { service: "Платье", price: "от 8000 ₽" },
        { service: "Платье на подкладке", price: "от 10000 ₽" },
        { service: "Жакет / Куртка без подкладки и утеплителя", price: "от 12000 ₽" },
        { service: "Жакет / Куртка с утеплителем", price: "6500-15000 ₽" },
        { service: "Мужской пиджак", price: "от 20000 ₽" },
        { service: "Утеплённое пальто", price: "от 18000 ₽" },
        { service: "Демисезонное пальто", price: "от 15000 ₽" },
      ],
    },
    {
      title: "Трикотаж",
      items: [
        { service: "Подшив футболки", price: "800 ₽" },
        { service: "Подшив футболки с переносом разреза", price: "1600 ₽" },
        { service: "Укоротить рукава футболки", price: "800 ₽" },
        { service: "Укоротить рукава футболки с манжетом", price: "1200 ₽" },
        { service: "Ушить", price: "800 ₽" },
        { service: "Замена молнии (до 20 см)", price: "1200 ₽" },
        { service: "Замена молнии (свыше 20 см)", price: "1500 ₽" },
        { service: "Ушить брюки", price: "от 800 ₽" },
        { service: "Подшить брюки с молнией", price: "1500 ₽" },
        { service: "Ушить боковые швы", price: "1000 ₽" },
        { service: "Декоративная строчка", price: "500 ₽" },
        { service: "Устранение затяжек", price: "150 ₽" },
        { service: "Ремот стрелки", price: "200 ₽" },
        { service: "Кетлёвка (за 1 см)", price: "150 ₽" },
        { service: "Накладки на локти", price: "1,800 ₽" },
      ],
    },
    {
      title: "Шторы",
      items: [
        { service: "Пошив штор (тюль)", price: "150 ₽/м" },
        { service: "Пошив штор (портьеры)", price: "200 ₽/м" },
        { service: "Рюшь", price: "600 ₽/м" },
        { service: "Складка(ручная закладка)", price: "600 ₽/м" },
        { service: "Установка люверсов", price: "200-250 ₽/м" },
        { service: "На подкладе", price: "от 400 ₽/м" },
        { service: "Сложные/со строчные", price: "450 ₽/м" },
        { service: "Римские", price: "от 1500 ₽/м" },
        { service: "На шапке", price: "500 ₽/м" },
        { service: "Обшить косой бейкой", price: "200 ₽ п/м" },
        { service: "Московский шов", price: "200 ₽ п/м" },
      ],
    },
    {
      title: "Прочие услуги",
      items: [
        { service: "Штопка", price: "от 500 ₽" },
        { service: "Крючок на шубу одна сторона", price: "от 500 ₽" },
        { service: "Пришить пуговицу (1шт)", price: "от 100 ₽" },
        { service: "Замена бегунка", price: "от 200 ₽" },
        { service: "Оверлок", price: "от 100 ₽" },
        { service: "Петля", price: "от 200 ₽" },
        { service: "Пришить погоны", price: "от 600 ₽" },
        { service: "Пришить шеврон", price: "от 250–350 ₽" },
        { service: "Пошив покрывало", price: "от 8000 ₽" },
      ],
    },
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
      <section id="services" className="py-20 bg-secondary/10">
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
                    <p className="font-medium text-sm mb-2">{service.name}</p>
                    <p className="text-accent font-bold">{service.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-4">Абонементы и аренда</h3>
            <p className="text-center text-muted-foreground mb-8">Выберите идеальный план для ваших творческих задач</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {mainMembershipPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative bg-card border-border hover:shadow-lg transition-all duration-300 ${plan.popular ? "border-accent border-2 scale-105" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-accent text-accent-foreground px-3 py-1">Самый популярный</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className="flex items-center justify-center mb-4">{plan.icon}</div>
                    <CardTitle className="text-xl mb-2">{plan.title}</CardTitle>
                    <div className="text-3xl font-bold text-accent mb-1">{plan.price}</div>
                    <p className="text-sm text-muted-foreground">{plan.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm flex items-center">
                          <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h4 className="text-xl font-semibold text-center mb-6">Дополнительные aбонементы</h4>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {additionalPlans.map((plan, index) => (
                <Card key={index} className="text-center bg-accent/5 border-accent/20">
                  <CardContent className="p-4">
                    <p className="font-semibold mb-1">{plan.title}</p>
                    <p className="text-accent font-bold text-lg">{plan.price}</p>
                    <p className="text-sm text-muted-foreground">{plan.duration}</p>
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

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Подробный прайс</h3>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              {pricingCategories.map((category, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{category.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-2">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0"
                        >
                          <span className="text-sm">{item.service}</span>
                          <span className="font-medium text-accent">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <Card className="bg-accent/5 border-accent/20 m-auto mb-8 max-w-4xl">
            <CardHeader>
              <CardTitle className="text-center">Срочные заказы и наценки</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className='flex flex-col gap-1 items-center'>
                  <div className='text-left'>
                    <p><strong>Срочность:</strong></p>                  
                    <p>• 24 часа: +20%</p>
                    <p>• 1–2 часа: +50%</p>
                  </div>                  
                </div>
                <div className='flex flex-col gap-1 items-center'>
                  <div className='text-left'>
                    <p><strong>Особые материалы:</strong></p>
                    <p>• Белые ткани: +25%</p>
                    <p>• Совмещение рисунка: +30%</p>
                    <p>• Сложные ткани: +20%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

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
