import React from 'react'
import Card from './Card'
import house from "../assets/house.png";

function Solixa() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Top section */}
      <div className="text-center mb-8">
        <span className="text-sm font-semibold tracking-widest text-orange-500 uppercase">
          КЛУБ TRUE
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900">
          Открыть клуб вместе с TRUE
        </h2>
      </div>

      {/* Photo section */}
      <div className="mb-10 rounded-2xl overflow-hidden shadow-md">
        <Card image={house} />
      </div>

      {/* Form section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h1 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">
          Отправить заявку
        </h1>

        <div>
          <form className="flex flex-col gap-6">

            {/* Имя */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
                Ваше имя
              </label>
              <input
                type="text"
                placeholder="ИМЯ"
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
                E-mail
              </label>
              <input
                type="email"
                placeholder="E-MAIL:"
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 transition"
              />
            </div>

            {/* Телефон */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
                Номер телефона
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-orange-500 transition">
                <span className="mr-2">🇺🇿</span>
                <input
                  type="tel"
                  placeholder="+998 (99)-999-99-99"
                  className="outline-none w-full"
                />
              </div>
            </div>

            {/* Город */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
                Город
              </label>
              <input
                type="text"
                placeholder="ГОРОД"
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 transition"
              />
            </div>

            {/* Хотите открыть */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-gray-800 uppercase">
                Хотите открыть:
              </h4>
              <div className="flex flex-col gap-2 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input type="radio" name="open" className="accent-orange-500 w-4 h-4" />
                  Фитнес студию
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="open" className="accent-orange-500 w-4 h-4" />
                  Фитнес клуб
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="open" className="accent-orange-500 w-4 h-4" />
                  Домашний Спортзал
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="open" className="accent-orange-500 w-4 h-4" />
                  Тренажерный Зал В Отеле, Санатории
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="open" className="accent-orange-500 w-4 h-4" />
                  Корпоративный Спортзал
                </label>
              </div>
            </div>

            {/* Срок запуска */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-gray-800 uppercase">
                Планируемый срок запуска проекта:
              </h4>
              <div className="flex flex-col gap-2 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input type="radio" name="time" className="accent-orange-500 w-4 h-4" />
                  Фитнес студия
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="time" className="accent-orange-500 w-4 h-4" />
                  Фитнес клуб
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="time" className="accent-orange-500 w-4 h-4" />
                  Домашний Спортзал
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="time" className="accent-orange-500 w-4 h-4" />
                  Тренажерный зал в отеле, санатории
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="time" className="accent-orange-500 w-4 h-4" />
                  Корпоративный Спортзал
                </label>
              </div>
            </div>

            {/* Услуги */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-gray-800 uppercase">
                Какие услуги вас интересуют:
              </h4>
              <div className="flex flex-col gap-2 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                  Консультация
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                  Подбор Оборудования
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                  Расстановка Тренажеров На Плане
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                  Дизайн
                </label>
              </div>
            </div>

            {/* Загрузить план */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
                Загрузить план помещения
              </label>
              <label className="cursor-pointer inline-block w-fit border-2 border-dashed border-gray-300 rounded-lg px-6 py-3 text-sm font-semibold text-gray-600 hover:border-orange-500 hover:text-orange-500 transition">
                ADD FILES
                <input type="file" hidden />
              </label>
            </div>

            {/* Комментарий */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
                Комментарий
              </label>
              <textarea
                rows="4"
                className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide py-4 rounded-lg transition"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Solixa