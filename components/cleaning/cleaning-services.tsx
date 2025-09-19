import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Shirt, Cat as Coat, Sparkles, Droplets, Wind, Star } from "lucide-react"

export function CleaningServices() {
  const services = [
    {
      icon: <Shirt className="w-8 h-8 text-accent" />,
      title: "Чистка одежды",
      description: "Профессиональная чистка повседневной одежды: рубашек, блузок, брюк и платьев.",
      features: ["Выведение пятен", "Уход за тканью", "Сохранение цвета", "Безупречная гладкость"],
    },
    {
      icon: <Coat className="w-8 h-8 text-accent" />,
      title: "Верхняя одежда и пальто",
      description: "Специализированный уход за куртками, пальто и верхней одеждой с применением правильных методов чистки.",
      features: ["Чистка пуховиков", "Уход за кожей", "Водоотталкивающая обработка", "Сохранение формы"],
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "Праздничная и деловая одежда",
      description: "Экспертная чистка нарядов для особых случаев, костюмов и деликатной одежды.",
      features: ["Свадебные платья", "Костюмы и смокинги", "Вечерние наряды", "Деликатные ткани"],
    },
    {
      icon: <Droplets className="w-8 h-8 text-accent" />,
      title: "Удаление пятен",
      description: "Современные технологии для устранения даже самых сложных пятен и загрязнений.",
      features: ["Жировые пятна", "Вино и еда", "Чернила и краска", "Следы пота и дезодоранта"],
    },
    {
      icon: <Wind className="w-8 h-8 text-accent" />,
      title: "Химчистка",
      description: "Профессиональная химчистка одежды, требующей особого ухода.",
      features: ["Шёлк и шерсть", "Структурированные изделия", "Декорированные вещи", "Винтажная одежда"],
    },
    {
      icon: <Star className="w-8 h-8 text-accent" />,
      title: "Премиум-уход",
      description: "Элитные услуги по чистке для дизайнерских и брендовых вещей.",
      features: ["Ручная отделка", "Индивидуальный уход", "Сохранение одежды", "Эксклюзивный сервис"],
    },
  ]

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Наши услуги по чистке</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Полный спектр решений для ухода за вашей одеждой — профессионально, качественно и с вниманием к деталям.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  {service.icon}
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
      </div>
    </section>
  )
}
