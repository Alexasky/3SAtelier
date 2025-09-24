"use client"

export default function YandexReviews() {
  return (
    <div className="w-full h-[700px] md:h-[450px] ">
      <iframe
        src="https://yandex.ru/maps-reviews-widget/2630207706?comments"
        style={{ width: "100%", height: "100%", border: "none" }}
        loading="lazy"
        title="Отзывы о 3SAtelier на Яндекс.Картах"
      />
    </div>
  )
}
