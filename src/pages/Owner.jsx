import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

function Owner() {
  const swiperRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  // Carousel images - bu yerga o'z rasmlaringizni qo'yiladi
  const carouselImages = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    'public/images/image1.jpg',
    'public/images/image2.jpg',
    'public/images/image3.jpg',
    'public/images/back.jpg',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop")',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          {/* Play Button */}
          <div className="mb-8">
            <button className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-500 transition shadow-lg">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <polygon points="5 3 19 12 5 21" />
              </svg>
            </button>
          </div>

          {/* Title */}
          <h1 className="text-white text-5xl font-bold text-center max-w-4xl leading-tight">
            TRUE FITNESS - ПРЕМИУМ<br />ТРЕНАЖЕРЫ ИЗ США
          </h1>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-cyan-400 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Decorative Line */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-yellow-300"></div>
          </div>

          {/* Main Text */}
          <div className="text-center">
            <h2 className="text-white text-4xl font-bold leading-tight">
              TRUE - ВЕДУЩИЙ МИРОВОЙ<br />
              ПРОИЗВОДИТЕЛЬ ПРЕМИАЛЬНОГО ФИТНЕС<br />
              ОБОРУДОВАНИЯ
            </h2>
          </div>

          {/* Bottom Decorative Line */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-yellow-300"></div>
          </div>
        </div>
      </section>

      {/* Swiper Carousel Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-8 items-center min-h-[500px]">
            {/* Left Column - Text */}
            <div className="flex flex-col justify-center">
              <h3 className="text-black text-5xl font-bold mb-2">
                TRUE
              </h3>
              <h3 className="text-cyan-400 text-5xl font-bold mb-6">
                FITNESS
              </h3>
              
              <div className="w-12 h-1 bg-yellow-300 mb-6"></div>

              <p className="text-gray-800 text-lg font-semibold mb-8 leading-tight">
                СОВРЕМЕННОЕ И<br />
                НАДЕЖНОЕ<br />
                ОБОРУДОВАНИЕ ДЛЯ<br />
                ФИТНЕС-КЛУБОВ
              </p>

              <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg hover:gap-4 transition cursor-pointer group">
                <span>КАРДИО ТРЕНАЖЕРЫ</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Pagination Dots */}
              <div className="flex gap-3 mt-8">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => swiperRef.current?.swiper.slideTo(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      activeSlide === index ? 'bg-yellow-300' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Carousel */}
            <div className="relative h-[500px]">
              <Swiper
                ref={swiperRef}
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                className="h-full"
              >
                {carouselImages.map((image, index) => (
                  <SwiperSlide key={index} className="flex items-center justify-center">
                    <img
                      src={image}
                      alt={`Carousel ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Blue Triangle Decoration */}
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-cyan-400 clip-triangle opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section - 2x2 */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-6">
            {/* Top Left - Image + Title */}
            <div className="relative h-96 overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/images/cardio-best.jpg"
                alt="Лучшие характеристики"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <h3 className="text-white text-4xl font-bold">
                  ЛУЧШИЕ<br />ХАРАКТЕРИСТИКИ
                </h3>
                <div>
                  <div className="w-12 h-1 bg-yellow-300 mb-4"></div>
                  <p className="text-white text-sm leading-relaxed">
                    Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических деталей до расширенных функциональных возможностей
                  </p>
                </div>
              </div>
            </div>

            {/* Top Right - Cyan Box */}
            <div className="bg-cyan-400 rounded-lg shadow-lg p-8 flex flex-col justify-between h-96">
              <h3 className="text-white text-3xl font-bold">
                НИЗКАЯ СТОИМОСТЬ<br />ВЛАДЕНИЕ
              </h3>
              <div>
                <div className="w-12 h-1 bg-yellow-300 mb-4"></div>
                <p className="text-white text-sm leading-relaxed">
                  Надежность Оборудования Обеспечивает Низкие Затраты На Сервисное Обслуживание. Так По Стоимости Затрат На Эксплуатацию TRUE Выигрывает У Конкурентов.
                </p>
              </div>
            </div>

            {/* Bottom Left - Cyan Box */}
            <div className="bg-cyan-400 rounded-lg shadow-lg p-8 flex flex-col justify-between h-96">
              <h3 className="text-white text-3xl font-bold">
                ВЫСОКОЕ КАЧЕСТВО И<br />НАДЕЖНОСТЬ
              </h3>
              <div>
                <div className="w-12 h-1 bg-yellow-300 mb-4"></div>
                <p className="text-white text-sm leading-relaxed">
                  Высокое Качество Тренажеров - Это Визитная Карточка TRUE. Кроме Того TRUE Предоставляет До 5 Лет Гарантии На Кардиотренажеры.
                </p>
              </div>
            </div>

            {/* Bottom Right - Image + Title */}
            <div className="relative h-96 overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop"
                alt="Качественный сервис"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <h3 className="text-white text-4xl font-bold">
                  КАЧЕСТВЕННЫЕ И<br />ОПЕРАТИВНЫЙ СЕРВИС
                </h3>
                <div>
                  <div className="w-12 h-1 bg-yellow-300 mb-4"></div>
                  <p className="text-white text-sm leading-relaxed">
                    Оборудование Должно Работать Безпережаойно. Поэтому Мы Уделяем Особое Внимание Наличию Всех Необходимых Запчастей И Высокой Срочности Технического Ремонирования
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-12 items-stretch">
            {/* Left Column - Services */}
            <div className="flex flex-col justify-center bg-gray-100 p-12 rounded-lg">
              <h2 className="text-cyan-400 text-4xl font-bold mb-12">
                МЫ ПРЕДЛАГАЕМ<br />ПОЛНЫЙ КОМПЛЕКС УСЛУГ
              </h2>

              {/* Services Grid 2x3 */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-16">
                {/* Service 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-cyan-100">
                      <svg className="h-8 w-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 6L7 4m2 2l12-3m-12 3v0m0 0l-2 2" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-bold text-sm mb-2">КОНСУЛЬТИНГ</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Помогаем в разработке концепции клуба, учитываем пожелания и расчете финансовых показателей.
                    </p>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-cyan-100">
                      <svg className="h-8 w-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <polygon points="5 3 19 12 5 21" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-bold text-sm mb-2">МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Полный цикл; кусто-ппроботаж работ и раннее сортамений обслуживанй о дб сервисов.
                    </p>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-cyan-100">
                      <svg className="h-8 w-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-bold text-sm mb-2">ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Помощём подбориии, оборудование, представляем и показываем 3d визуализацию вашего будущего проекта
                    </p>
                  </div>
                </div>

                {/* Service 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-cyan-100">
                      <svg className="h-8 w-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 6h2v12H3V6zm4 0h2v12H7V6zm4 0h2v12h-2V6zm4 0h2v12h-2V6zm4 0h2v12h-2V6z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-bold text-sm mb-2">ФИРМЕННЫЙ SHOW-ROOM</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Площа тесс-сч мю большое оборудование - перее тарасоментвлен.
                    </p>
                  </div>
                </div>

                {/* Service 5 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-cyan-100">
                      <svg className="h-8 w-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-bold text-sm mb-2">ПОСТАВКА ЗАПЧАСТЕЙ</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Поставка как дополнительных, так и постгарантийных запчастей.
                    </p>
                  </div>
                </div>

                {/* Service 6 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-cyan-100">
                      <svg className="h-8 w-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-bold text-sm mb-2">ДОСТАВКА ПО ВСЕМУ УЗБЕКИСТАНУ</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Мы доставляем оборудование не по всему узбекистану.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="/images/run.png"
                alt="Услуги TRUE Fitness"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Offer Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
         style={{
  backgroundImage: 'url("/images/back.jpg")',
}}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4 ">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex justify-center">
              {/* Form Box */}
              <div className="bg-white rounded-lg p-12 shadow-2xl max-w-md">
                <h2 className="text-gray-800 text-3xl font-bold leading-tight mb-6">
                  ПОЛУЧИТЕ ЭКСКЛЮЗИВНОЕ<br />ПРЕДЛОЖЕНИЕ НА ТРЕНАЖЕРЫ<br />TRUE FITNESS
                </h2>

                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  Мы будем рады проконсультировать вас и помочь с подбором оборудования
                </p>

                {/* Form Inputs */}
                <form className="space-y-4">
                  <input 
                    type="text"
                    placeholder="ИМЯ"
                    className="w-full px-4 py-3 bg-gray-100 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />

                  <input 
                    type="email"
                    placeholder="EMAIL"
                    className="w-full px-4 py-3 bg-gray-100 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />

                  <div className="flex gap-2">
                    <select className="px-3 py-3 bg-gray-100 rounded text-gray-800 border border-gray-300">
                      <option>🇺🇿 +998</option>
                      <option>🇷🇺 +7</option>
                    </select>
                    <input 
                      type="tel"
                      placeholder="(99)-999-99-99"
                      className="flex-1 px-4 py-3 bg-gray-100 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-cyan-400 text-white font-bold py-3 rounded hover:bg-cyan-500 transition text-lg"
                  >
                    ОТПРАВИТЬ
                  </button>
                </form>

                <p className="text-gray-600 text-xs mt-6 leading-relaxed">
                  Нажимая на кнопку, вы даете согласия на обработку персональных данных и согласуетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Owner