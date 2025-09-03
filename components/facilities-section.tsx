'use client';
import { Card, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { Coffee, Armchair, Ruler, Zap, Camera as Camera2, Shirt } from "lucide-react"

export function FacilitiesSection() {
  const facilities = [
    {
      icon: <Shirt className="w-12 h-12 text-accent" />,
      title: "Примерочная",
      description: "Уютное пространство, где вы можете оценить свои творения и внести последние штрихи.",
    },
    {
      icon: <Ruler className="w-12 h-12 text-accent" />,
      title: "Раскройные столы",
      description: "Профессиональные раскройные столы стандарта Burda для точной работы с выкройками.",
    },
    {
      icon: <Zap className="w-12 h-12 text-accent" />,
      title: "Глажка и отпаривание",
      description: "Профессиональные станции, которые помогут довести каждую деталь до идеала.",
    },
    {
      icon: <Camera2 className="w-12 h-12 text-accent" />,
      title: "Фотозона",
      description: "Стильный уголок для съёмки готовых проектов — делитесь своими швейными историями красиво.",
    },
    {
      icon: <Coffee className="w-12 h-12 text-accent" />,
      title: "Зона отдыха",
      description: "Комфортное место с ароматным чаем и кофе. По запросу — вкусный обед, чтобы восстановить силы.",
    },
    {
      icon: <Armchair className="w-12 h-12 text-accent" />,
      title: "Массажное кресло",
      description: "Мгновенное расслабление во время творческих пауз — забота о вас и вашем вдохновении.",
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="facilities" 
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Наши удобства</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Мы создали место, где каждая деталь работает на ваш комфорт и вдохновение. 
            Здесь всё продумано так, чтобы шитьё стало удовольствием, а процесс — лёгким и творческим.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="bg-primary border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">{facility.icon}</div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">{facility.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-accent/20 border-accent/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Комфорт и вдохновение</h3>
              <p className="text-muted-foreground leading-relaxed">
                3S Atelier — это больше, чем мастерская. 
                Это место, где вы чувствуете себя как дома: работаете над быстрым проектом или погружаетесь в шитьё на целый день. 
                Здесь есть всё, чтобы вы оставались в комфорте, сосредоточенными и наполненными идеями.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  )
}
