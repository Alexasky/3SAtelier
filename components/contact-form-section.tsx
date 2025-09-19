import ContactForm from './contact-form'
import { Card, CardContent } from "./ui/card"

export function ContactFormSection() {
  return (
    <section className="py-20 px-4 bg-brand">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">Отправьте нам сообщение</h2>
					<p className="text-lg text-gray-600">
						Есть вопросы или хотите записаться на визит? Заполните форму ниже, и мы свяжемся с вами в ближайшее время.
					</p>
				</div>

				<Card>
					<CardContent>
						<ContactForm/>
					</CardContent>
				</Card>
			</div>
		</section>
  )
}
