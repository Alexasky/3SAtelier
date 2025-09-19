import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export function ServicesPricing() {
  const pricingCategories = [
    {
      title: "Укорачивание / Подшив",
			popular: true,
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
        { service: "Накладки на локти", price: "1800 ₽" },
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
      title: "Постельное бельё",
      items: [
        { service: "Пододеяльник 1.5/2", price: "500/700 ₽" },
        { service: "Пододеяльник с застёжкой 1.5/2", price: "800/1000 ₽" },
        { service: "Простыня 1.5/2", price: "400/500 ₽" },
        { service: "Простыня на резинке", price: "от 1000 ₽" },
        { service: "Наволочка с запахом", price: "от 300 ₽" },
        { service: "Наволочка с застёжкой", price: "от 400 ₽" },
        { service: "Наволочка с ушками", price: "от 600 ₽" },
      ],
    },
    {
      title: "Услуги раскройного стола",
      items: [
        { service: "Бумажная выкройка", price: "от 500 ₽" },
        { service: "Раскрой ткани", price: "от 1000 ₽" },
        { service: "Аренда журнала", price: "500 ₽" },
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
        { service: "Покрывало(пошив)", price: "от 8000 ₽" },
        { service: "Скатерть простая (пошив)", price: "от 100 ₽/м" },
        { service: "Скатерть с широким подгибом (пошив)", price: "от 200 ₽/м" },
        { service: "Обработка срезов с оборкой", price: "от 300 ₽/м" },        
      ],
    },
  ]

  return (
    <section id='price' className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Услуги ателье и цены</h2>
          <p className="text-lg text-gray-600">
            Профессиональная работа с прозрачным ценообразованием. <br/> Экспресс-услуги доступны с наценкой 20-50%.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {pricingCategories.map((category, index) => (
            <AccordionItem key={index} value={`category-${index}`} className="border rounded-lg mb-4 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold">{category.title}</span>
                  {category.popular && (
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      Популярное
                    </Badge>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-3 pt-4">
                  {category.items.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-gray-700">{service.service}</span>
                      <span className="font-semibold text-accent">{service.price}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
				<Card className="bg-accent/5 border-accent/20 m-auto mb-8 max-w-4xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Срочные заказы и наценки</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className='flex flex-col gap-1'>
                  <div className='text-left'>
                    <p><strong>Экспресс-сервис:</strong></p>                  
                    <p>• 24 часа: +20%</p>
                    <p>• 1–2 часа: +50%</p>
                  </div>                  
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='text-left'>
                    <p><strong>Особенности ткани:</strong></p>
                    <p>• Белые ткани: +25%</p>
                    <p>• Совпадение узора: +30%</p>
                    <p>• Сложные ткани: +20%</p>
                  </div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='text-left'>
                    <p><strong>Особенности изделия:</strong></p>
                    <p>• Длинные изделия: +10%</p>
                    <p>• Асимметричные изделия: +20%</p>
                    <p>• Размер выше 58: +10%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
      </div>
    </section>
  )
}
