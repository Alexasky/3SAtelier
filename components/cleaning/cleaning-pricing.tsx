import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { Badge } from "../ui/badge"

export function CleaningPricing() {
  const pricingCategories = [
    {
      title: "Верхняя одежда",
      items: [
        { service: "Куртка ветровка", price: "1350 ₽" },
        { service: "Жилет пуховый", price: "1850 ₽" },
        { service: "Жилет утепленный (иск. мех, синтепон, экокожа)", price: "1750 ₽" },
        { service: "Жилет облегченный (пух, синтепон, флис, шерсть, экокожа)", price: "1600 ₽" },
        { service: "Куртка утепленная (флис, шерсть, синтепон, экокожа) до 90 см", price: "2000 ₽" },
        { service: "Куртка утепленная (флис, шерсть, синтепон, экокожа) от 90 см", price: "2250 ₽" },
        { service: "Куртка облегченная (пух, синтепон, флис, шерсть, экокожа) до 90 см", price: "1850 ₽" },
        { service: "Куртка облегченная (пух, синтепон, флис, шерсть, экокожа) от 90 см", price: "2100 ₽" },
        { service: "Пуховик до 90 см", price: "2250 ₽" },
        { service: "Пуховик от 90 см", price: "2700 ₽" },
        { service: "Комбинезон на пуху", price: "3300 ₽" },
        { service: "Полукомбинезон на пуху", price: "2200 ₽" },
        { service: "Куртка-пихора до 90 см", price: "3450 ₽" },
        { service: "Пальто-пихора от 90 см", price: "4150 ₽" },
        { service: "Пальто демисезонное до 90 см", price: "2100 ₽" },
        { service: "Пальто демисезонное от 90 см", price: "2400 ₽" },
        { service: "Пальто зимнее до 90 см", price: "2300 ₽" },
        { service: "Пальто зимнее от 90 см", price: "2700 ₽" },
        { service: "Палантин, шарф (большие)", price: "950 ₽" },
        { service: "Платок, шарф (маленькие)", price: "650 ₽" },
        { service: "Перчатки, варежки", price: "450 ₽" },
        { service: "Плащ, летнее пальто", price: "1950 ₽" },
        { service: "Шапка, берет, кепка", price: "600 ₽" },
        { service: "Удаление катышей или шерсти с 1-го изделия", price: "500 ₽" },
      ],
    },
    {
      title: "Костюмная и плательная группа",
      items: [
        { service: "Блуза, рубашка", price: "740 ₽" },
        { service: "Блуза сложная (шёлк, фасон и пр.)", price: "950 ₽" },
        { service: "Блуза, рубашка (полоскание+глажение без чистки)", price: "580 ₽" },
        { service: "Бриджи, капри", price: "950 ₽" },
        { service: "Брюки", price: "1050 ₽" },
        { service: "Галстук, жабо, манжеты", price: "670 ₽" },
        { service: "Жилет, шорты", price: "720 ₽" },
        { service: "Корсет", price: "1800 ₽" },
        { service: "Костюм театральный, карнавальный", price: "3500 ₽" },
        { service: "Пиджак, жакет (с подкладом и без подклада)", price: "1200 ₽" },
        { service: "Комбинезон из лёгких тканей", price: "1500 ₽" },
        { service: "Платье, туника, халат, сарафан", price: "1400 ₽" },
        { service: "Платье сложное (шерсть, шелк, фасон и пр.)", price: "1950 ₽" },
        { service: "Платье вечернее, комбинезон", price: "3300 ₽" },
        { service: "Платье свадебное простое (1 юбка)", price: "4900 ₽" },
        { service: "Платье свадебное сложное (много юбок или шлейф)", price: "6100 ₽" },
        { service: "Смокинг, фрак", price: "2200 ₽" },
        { service: "Юбка простая без подкладки", price: "850 ₽" },
        { service: "Юбка простая с подкладкой", price: "1000 ₽" },
        { service: "Юбка сложная (фасон, рюши, плиссе и пр.)", price: "1400 ₽" },
        { service: "Фата", price: "980 ₽" },
        { service: "Ростовая кукла", price: "5000 ₽" },        
      ],
    },
    {
      title: "Спортивная одежда",
      items: [
        { service: "Горнолыжная куртка", price: "2300 ₽" },
        { service: "Горнолыжные брюки, утепленные", price: "1800 ₽" },
        { service: "Горнолыжные перчатки", price: "550 ₽" },
        { service: "Джинсы, спортивные брюки, брюки х/б без стрелок", price: "950 ₽" },
        { service: "Комбинезон утепленный (иск. мех, синтепон)", price: "2800 ₽" },
        { service: "Полукомбинезон утепленный (иск. мех, синтепон)", price: "1700 ₽" },
        { service: "Куртка джинсовая, спортивная, толстовка", price: "1350 ₽" },
        { service: "Футболка с воротником или с длинным рукавом", price: "700 ₽" },
        { service: "Футболка, топ", price: "650 ₽" },        
      ],
    },
    {
      title: "Трикотаж",
      items: [
        { service: "Джемпер", price: "1000 ₽" },
        { service: "Пончо, кардиган", price: "1200 ₽" },
        { service: "Кофта толстой вязки", price: "1800 ₽" },
        { service: "Жилет, болеро", price: "800 ₽" },
        { service: "Брюки трикотажные", price: "900 ₽" },
        { service: "Удаление катышей или шерсти с 1-го изделия", price: "500 ₽" },        
      ],
    },
    {
      title: "Натуральный мех",
      items: [
        { service: "Воротник, шапка, капюшон, манжеты 1-й категории", price: "1150 ₽" },
        { service: "Воротник, шапка, капюшон, манжеты 2-й категории", price: "1650 ₽" },
        { service: "Подстежка 1-й категории", price: "2250 ₽" },
        { service: "Подстежка 2-й категории", price: "3100 ₽" },
        { service: "Полушубок до 90 см 1-й категории", price: "4500 ₽" },
        { service: "Полушубок до 90 см 2-й категории", price: "6100 ₽" },
        { service: "Шуба от 90 см 1-ой категории", price: "5100 ₽" },
        { service: "Шуба от 90 см 2-ой категории", price: "7800 ₽" },
        { service: "Жилет меховой, болеро 1-й категории", price: "2760 ₽" },
        { service: "Жилет меховой, болеро 2-й категории", price: "4800 ₽" },
        { service: "Шкура натуральная, 1 м2", price: "1150 ₽" },
        { service: "Опушка меховая", price: "600 ₽" },
        { service: "Палантин из натурального меха 1-й категории", price: "1550 ₽" },
        { service: "Палантин из натурального меха 2-й категории", price: "2150 ₽" },
      ],
    },
    {
      title: "Искусственный мех",
      items: [
        { service: "Дубленка, шуба искусств. до 90 см", price: "2000 ₽" },
        { service: "Дубленка, шуба искусств. от 90 см", price: "2350 ₽" },
        { service: "Болеро из искусственного меха", price: "980 ₽" },
        { service: "Подстежка (иск. мех, синтепон)", price: "1150 ₽" },
        { service: "Шапка из искусственного меха", price: "830 ₽" },
        { service: "Шкура из искусственного меха, 1м2", price: "860 ₽" },
        { service: "Шуба из натуральной шерсти до 90 см", price: "2200 ₽" },
        { service: "Шуба из натуральной шерсти от 90 см", price: "2650 ₽" },
      ],
    },
    {
      title: "Кожаные изделия",
      items: [
        { service: "Брюки, бриджи, шорты", price: "3600 ₽" },
        { service: "Перчатки, варежки", price: "1600 ₽" },
        { service: "Шапка, кепка, капюшон", price: "1650 ₽" },
        { service: "Жилет кожа, замша", price: "2900 ₽" },
        { service: "Юбка от 40 см", price: "3500 ₽" },
        { service: "Юбка до 40 см", price: "2850 ₽" },
        { service: "Рубашка", price: "3600 ₽" },
        { service: "Пиджак, куртка, полупальто", price: "5500 ₽" },
        { service: "Пальто, плащ от 90 см", price: "6100 ₽" },
        { service: "Сарафан", price: "3600 ₽" },
        { service: "Куртка на меховой подкладке до 90 см", price: "5850 ₽" },
        { service: "Куртка на меховой подкладке от 90 см", price: "6500 ₽" },
        { service: "Кожаный пуховик до 90 см", price: "6300 ₽" },
        { service: "Кожаный пуховик от 90 см", price: "7150 ₽" },
        { service: "Дубленка до 90 см без окраса", price: "4750 ₽" },
        { service: "Дубленка от 90 см без окраса", price: "4950 ₽" },
        { service: "Жилет из дубленой овчины", price: "4400 ₽" },
        { service: "Гидрофобная (водоотталкивающая) пропитка", price: "1000 ₽" },
      ],
    },
    {
      title: "Домашний текстиль",
      items: [
        { service: "Одеяло, плед, покрывало 1,5 сп.", price: "1550 ₽" },
        { service: "Одеяло, плед, покрывало 2 сп.", price: "1800 ₽" },
        { service: "Одеяло, плед, покрывало ЕВРО", price: "2200 ₽" },
        { service: "Одеяло пуховое 1,5 сп.", price: "2900 ₽" },
        { service: "Одеяло пуховое 2 сп.", price: "3200 ₽" },
        { service: "Одеяло пуховое ЕВРО", price: "3500 ₽" },
        { service: "Подушка (синтепон, шерсть) 45х45, 50х50, 50х60", price: "780 ₽" },
        { service: "Подушка (синтепон, шерсть) 50х70, 60х60, 70х70", price: "810 ₽" },
        { service: "Покрывало (гобелен 1,5 сп.)", price: "1150 ₽" },
        { service: "Покрывало (гобелен 2 сп.)", price: "1550 ₽" },
        { service: "Салфетка нестандартная, 1 шт.", price: "300 ₽" },
        { service: "Салфетка стандартная 45х45 см, 1 шт.", price: "250 ₽" },
        { service: "Скатерть нестандартная 1 шт.", price: "1350 ₽" },
        { service: "Скатерть стандартная 1,5м х2м, 1 шт.", price: "1000 ₽" },
        { service: "Спальный мешок", price: "1650 ₽" },
        { service: "Флаг за 1 кв.м.", price: "1100 ₽" },
        { service: "Конверт детский облегченный", price: "1265 ₽" },
        { service: "Конверт детский утепленный (синтепон, пух)", price: "1450 ₽" },
        { service: "Сумка, рюкзак текстиль (малая) 30х30 см", price: "960 ₽" },
        { service: "Сумка, рюкзак текстиль (средняя) 50х50 см", price: "1600 ₽" },
        { service: "Сумка, рюкзак текстиль (большая) от 50 см", price: "2000 ₽" },
        { service: "Чехлы для автомобиля (комплект)", price: "2500 ₽" },
        { service: "Чехол на кресло", price: "1100 ₽" },
        { service: "Чехол на диван 3 посадочных места", price: "2350 ₽" },
        { service: "Чехол на диван 2 посадочных места", price: "1950 ₽" },
        { service: "Чехол на подушку, стул", price: "590 ₽" },
        { service: "Наматрасник 1 и 1,5 сп.", price: "1850 ₽" },
        { service: "Наматрасник 2 сп.", price: "2250 ₽" },
        { service: "Наматрасник 1 и 1,5 сп. двусторонний", price: "2800 ₽" },
        { service: "Намастрасник 2 сп. двусторонний", price: "3200 ₽" },
        { service: "Реставрация подушки (45х45, 50х50, 50х60)", price: "970 ₽" },
        { service: "Реставрация подушки (50х70, 60х60, 70х70)", price: "1100 ₽" },
      ],
    },
    {
      title: "Шторы",
      items: [
        { service: "Гардинно-тюлевые изделия (за м2)", price: "250 ₽" },
        { service: "Шторы простые (за м2)", price: "400 ₽" },
        { service: "Портьеры (за м2)", price: "450 ₽" },
        { service: "Ламбрекены (за п.м.)", price: "600 ₽" },
      ],
    },
    {
      title: "Ковры",
      items: [
        { service: "Ковер синтетический или хлопковый с длиной ворса менее 2х см, 1 м2", price: "840 ₽" },
        { service: "Ковер синтетический или хлопковый с длиной ворса более 2х см, 1 м2", price: "1080 ₽" },
        { service: "Ковер шерстяной с длиной ворса менее 2х см, 1 м2", price: "1080 ₽" },
        { service: "Ковер шерстяной с длиной ворса более 2х см, 1 м2", price: "1340 ₽" },
        { service: "Ковер ручной работы из шелка или вискозы, 1 м2", price: "2560 ₽" },
        { service: "Ковер машинной вязки из шелка или вискозы, 1 м2", price: "2180 ₽" },
        { service: "Ковер набивной на клеевой основе, джутовый, циновка, морские водоросли, 1 м2", price: "1520 ₽" },
        { service: "Отбеливание бахромы, кисточек, за 1 п. м.", price: "560 ₽" },
        { service: "Удаление неприятного запаха, за 1 кв.м.", price: "560 ₽" },
      ],
    },
    {
      title: "Индивидуальная стирка",
      items: [
        { service: "Прямое белье (1 загрузка до 6 кг)", price: "1600 ₽" },
        { service: "Махровый халат", price: "800 ₽" },
        { service: "Мягкая игрушка (за 10 см)", price: "250 ₽" },
        { service: "Коврик для ванной малый (до 2 кв.м.)", price: "1100 ₽" },
        { service: "Коврик для ванной большой (2 кв.м.)", price: "1200 ₽" },
      ],
    },
  ]

  const additionalServices = [
    { service: "Наценка за капюшон", surcharge: "+15%" },
    { service: "Наценка за воротник из натурального меха", surcharge: "+20%" },
    { service: "Наценка за кожаную отделку", surcharge: "+15%" },
    { service: "Наценка за комбинированное изделие", surcharge: "+100%" },
    { service: "Наценка за чистку в углеводороде", surcharge: "+70%" },
    { service: "Наценка за сильное загрязнение", surcharge: "+30%" },
    { service: "Наценка за срочность (от 1часа до 12 часов)", surcharge: "+50%" },
    { service: "Удаление сложных пятен", surcharge: "+300–500 ₽" },
  ]

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Цены на услуги химчистки</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Прозрачные цены на профессиональные услуги чистки. Все цены включают приём и выдачу изделий в пределах зоны обслуживания.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible>
            {pricingCategories.map((category, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">{category.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-center py-3 border-b border-border/50 last:border-b-0"
                      >
                        <span className="text-sm font-medium">{item.service}</span>
                        <span className="font-semibold text-accent">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Card className="bg-accent/5 border-accent/20 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Дополнительные услуги и наценки</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex justify-between items-center py-2 px-4">
                  <span className="text-sm font-medium">{service.service}</span>
                  <Badge variant="outline" className="text-accent border-accent">
                    {service.surcharge}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-background/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Важно:</strong> Стоимость может меняться в зависимости от состояния изделия, типа ткани и сложности обработки. Для специальных изделий доступна бесплатная консультация и расчёт цены.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
