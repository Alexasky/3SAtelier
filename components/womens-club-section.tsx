import { Calendar, Clock, Coffee, Heart, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeInSection } from './fade-in-section'

export function WomensClubSection() {
  return (
		<FadeInSection>
			<section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<Card className="overflow-hidden border-0 shadow-xl bg-white/80 backdrop-blur-sm">
							<CardContent className="p-0">
								<div className="grid md:grid-cols-2 gap-0">
									{/* Левая сторона - Контент */}
									<div className="p-8 lg:p-12">
										<div className="flex items-center gap-2 mb-4">
											<Heart className="h-6 w-6 text-pink-500" />
											<span className="text-sm font-medium text-pink-600 uppercase tracking-wide">Специальное событие</span>
										</div>

										<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
											Женский клуб в 3S Atelier
										</h2>

										<p className="text-lg text-gray-600 mb-6 leading-relaxed">
											Девичник без повода? У нас есть причина! ✨ Приходите на уютные вечера в компании единомышленниц.
										</p>

										<div className="space-y-4 mb-8">
											<div className="flex items-start gap-3">
												<Coffee className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
												<div>
													<p className="font-medium text-gray-900">Вкусные угощения</p>
													<p className="text-sm text-gray-600">Кофе, чай и домашняя выпечка включены</p>
												</div>
											</div>

											<div className="flex items-start gap-3">
												<Users className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
												<div>
													<p className="font-medium text-gray-900">Душевные беседы</p>
													<p className="text-sm text-gray-600">Мода, творчество, книги, путешествия и жизнь</p>
												</div>
											</div>

											<div className="flex items-start gap-3">
												<Heart className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
												<div>
													<p className="font-medium text-gray-900">Творческое вдохновение</p>
													<p className="text-sm text-gray-600">Познакомьтесь с нашим ателье и откройте новые хобби</p>
												</div>
											</div>
										</div>
	{/* 
										<Button size="lg" className="w-full md:w-auto">
											Присоединиться к Женскому клубу
										</Button> */}
									</div>

									{/* Правая сторона - Детали события */}
									<div className="bg-gradient-to-br from-accent/5 to-pink-100/50 p-8 lg:p-12 flex flex-col justify-center">
										<div className="space-y-6">
											<div className="text-center mb-8">
												<div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
													<Calendar className="h-8 w-8 text-accent" />
												</div>
												<h3 className="text-2xl font-bold text-gray-900 mb-2">Каждую субботу</h3>
												<p className="text-gray-600">Еженедельные встречи для творческих душ</p>
											</div>

											<div className="space-y-4">
												<div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
													<Clock className="h-5 w-5 text-accent flex-shrink-0" />
													<div>
														<p className="font-medium text-gray-900">18:00 — до закрытия</p>
														<p className="text-sm text-gray-600">Оставайтесь столько, сколько захотите!</p>
													</div>
												</div>

												<div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
													<div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
														<span className="text-white text-xs font-bold">₽</span>
													</div>
													<div>
														<p className="font-medium text-gray-900">Вход — 200 ₽</p>
														<p className="text-sm text-gray-600">Включены напитки и угощения</p>
													</div>
												</div>

												<div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
													<MapPin className="h-5 w-5 text-accent flex-shrink-0" />
													<div>
														<p className="font-medium text-gray-900">Ул. Парашютная, 42</p>
														<p className="text-sm text-gray-600">Корпус 1</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</FadeInSection>
  )
}

