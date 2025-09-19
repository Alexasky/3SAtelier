import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'


export function MembershipFAQ() {
  const faqs = [
    {
      question: "Что входит в мой абонемент?",
      answer:
        "Все тарифы включают доступ к профессиональным швейным машинам, базовым инструментам, раскройным столам и нашему творческому сообществу. Планы более высокого уровня включают дополнительные преимущества, такие как приоритетное бронирование и индивидуальную консультацию.",
    },
    {
      question: "Могу ли я повысить тариф или изменить план?",
      answer:
        "Конечно! Вы можете повысить свой тариф в любое время. Свяжитесь с нами, чтобы обсудить лучший вариант для ваших потребностей, и мы поможем вам перейти на новый план.",
    },
    {
      question: "Предлагаете ли вы пробные занятия?",
      answer:
        "Мы проводим экскурсии по студии и можем организовать пробное занятия. Свяжитесь с нами, чтобы запланировать визит и узнать, подходит ли 3S Atelier для ваших творческих проектов.",
    },
    {
      question: "Что если я не использую все свои часы?",
      answer:
        "Часы действительны в течение срока, указанного в вашем плане. Мы рекомендуем выбирать план, соответствующий вашему ожидаемому использованию. Наши сотрудники помогут вам выбрать правильный вариант.",
    },
    {
      question: "Есть ли парковка?",
      answer:
        "Да, рядом с нашим расположением по адресу Парашютная 42, корпус 1 в Приморском районе имеется возможность парковки.",
    },
  ]
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
          <p className="text-lg text-gray-600">Всё, что вам нужно знать о наших тарифных планах</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
