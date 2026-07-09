import React from 'react'

function Footer() {
  return (
    <footer className="bg-cyan-400 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-4 gap-6 text-sm">
          {/* Column 1: КАТАЛОГ ТОВАРОВ */}
          <div>
            <h3 className="font-bold text-base mb-5 uppercase">КАТАЛОГ ТОВАРОВ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline transition">КАРДИО ТРЕНАЖЕРЫ</a></li>
              <li><a href="#" className="hover:underline transition">COMPOSITE STRENGTH</a></li>
              <li><a href="#" className="hover:underline transition">TRUE STRETCH</a></li>
              <li><a href="#" className="hover:underline transition">САЙКЛИНГ</a></li>
              <li><a href="#" className="hover:underline transition">ГРУППОВЫЕ ТРЕНИРОВКИ</a></li>
              <li><a href="#" className="hover:underline transition">СИЛОВЫЕ ТРЕНАЖЕРЫ</a></li>
              <li><a href="#" className="hover:underline transition">КОНСОЛИ</a></li>
              <li className="pt-3 border-t border-cyan-300 mt-3"><a href="#" className="font-semibold hover:underline transition">© TRUE FITNESS</a></li>
            </ul>
          </div>

          {/* Column 2: ИНФОРМАЦИЯ */}
          <div>
            <h3 className="font-bold text-base mb-5 uppercase">ИНФОРМАЦИЯ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline transition">О БРЕНДЕ</a></li>
              <li><a href="#" className="hover:underline transition">ПРЕИМУЩЕСТВА</a></li>
              <li><a href="#" className="hover:underline transition">ОТКРЫТЬ КЛУБ</a></li>
              <li><a href="#" className="hover:underline transition">ПРОДУКЦИИ</a></li>
              <li><a href="#" className="hover:underline transition">КОНТАКТЫ</a></li>
            </ul>
          </div>

          {/* Column 3: КОНТАКТЫ */}
          <div>
            <h3 className="font-bold text-base mb-5 uppercase">КОНТАКТЫ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline transition">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a></li>
              <li><a href="#" className="hover:underline transition">КОНТАКТЫ</a></li>
            </ul>
          </div>

          {/* Column 4: ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ */}
          <div>
            <h3 className="font-bold text-base mb-5 uppercase">ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ</h3>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-3 py-2 rounded text-gray-800 text-sm placeholder-gray-500 focus:outline-none"
              />
              <button 
                type="submit"
                className="w-full bg-white text-cyan-400 font-semibold py-2 rounded hover:bg-gray-100 transition text-sm"
              >
                ПОДПИСАТЬСЯ
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer