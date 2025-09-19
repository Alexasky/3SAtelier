import Image from 'next/image'

export function ServicesGallery() {
  const beforeAfterImages = [
    {
      title: "Подгонка платья",
      before: "/dress-before-alteration.jpg",
      after: "/dress-after-professional-hemming-and-fitting.jpg",
    },
    {
      title: "Подгонка жакета",
      before: "/oversized-jacket-before-tailoring.jpg",
      after: "/perfectly-fitted-jacket-after-tailoring.jpg",
    },
    {
      title: "Замена молнии",
      before: "/broken-zipper-on-garment.jpg",
      after: "/new-zipper-professionally-installed.jpg",
    },
  ]
  return (
    <section className="py-20 px-4 bg-brand/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Галерея «До и После»</h2>
          <p className="text-lg text-gray-600">
            Посмотрите, какие преображения могут сделать наши экспертные подгонки с вашими вещами
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {beforeAfterImages.map((item, index) => (
            <div key={index} className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4 text-center">{item.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center relative w-full h-full p-0">
										<div className='relative h-48 rounded-lg mb-2 overflow-hidden'>
											<Image
												src={item.before || "/placeholder.svg"}
												alt={`До ${item.title}`}
												className="w-full object-cover "
												sizes='400'
												fill
												priority
											/>
										</div>
                    {/* <span className="text-sm text-gray-600 font-medium">До</span> */}
                  </div>
                  <div className="text-center w-full h-full p-0">
										<div className='relative h-48 rounded-lg mb-2 overflow-hidden'>
											<Image
												src={item.after || "/placeholder.svg"}
												alt={`После ${item.title}`}
												className="w-full object-cover"
												sizes='400'
												fill
												priority
											/>
										</div>
                    {/* <span className="text-sm text-accent font-medium">После</span> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
