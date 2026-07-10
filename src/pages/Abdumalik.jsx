import React from "react";
import bgImage from "../assets/Abdumalik.png";
import innovation1 from "../assets/props1.png";
import innovation2 from "../assets/props2.png";
import innovation3 from "../assets/props3.png";
import innovation4 from "../assets/props4.png";
import innovation5 from "../assets/props5.png";
import innovation6 from "../assets/props6.png";
import offerBg from "../assets/Abdumalik2.png";


function Abdumalik( img, title) {
  const innovationsData = [
    {
      id: 1,
      img: innovation1,
      title: "ТРЕНАЖЕР ЛЕСТНИЦА TRUE PALISADE",
    },
    {
      id: 2,
      img: innovation2,
      title: "ФУНКЦИОНАЛЬНЫЙ ТРЕНИНГ С COMPOSITE STRENGTH",
    },
    {
      id: 3,
      img: innovation3,
      title: "РАМЫ ДЛЯ СТРЕТЧИНГА TRUE STRETCH",
    },
    {
      id: 4,
      img: innovation4,
      title: "ЛАТЕРАЛЬНЫЙ ТРЕНАЖЕР TRUE TRAVERSE",
    },
    {
      id: 5,
      img: innovation5,
      title: "БЕГОВАЯ ДОРОЖКА TRUE ALPINE RUNNER",
    },
    {
      id: 6,
      img: innovation6,
      title: "ЭЛЛИПТИЧЕСКИЙ ТРЕНАЖЕР TRUE SPECTRUM",
    },
  ];
  return (
    <div>
      <div className="w-full bg-[#12A8E3] py-14 shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
        <div className="max-w-[1300px] mx-auto px-4 text-center">
          <p className="text-yellow-300 font-bold uppercase text-[14px] md:text-[18px] mb-8">
            О НАШЕМ БРЕНДЕ
          </p>

          <div className="flex items-center justify-center gap-5">
            <div></div>

            <h2 className="text-white font-extrabold uppercase text-[28px] sm:text-[38px] md:text-[56px] leading-[1.1]">
              TRUE - СОВЕРШЕННОЕ <br />
              ФИТНЕС-ОБОРУДОВАНИЕ
            </h2>

            <div></div>
          </div>
        </div>
      </div>
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-16"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-full max-w-[1250px] bg-white px-8 md:px-16 py-10 md:py-16 shadow-xl">
          <p className="text-[#19A7E8] text-[24px] md:text-[30px] leading-[1.8] mb-10">
            Это совершенство обеспечивается высококачественными, долговечными
            материалами и технологиями, которые мы используем для производства
            наших машин, но оно также создается и благодаря нашей преданности
            клиентам и их потребностям.
          </p>

          <p className="text-[#1f2937] text-[22px] md:text-[28px] leading-[1.8] mb-10">
            Наша опытная команда предлагает комплексное обслуживание, начиная от
            планирования объекта до технического обслуживания и оснащения ваших
            залов новейшими технологиями. Являясь вашим надежным партнером, мы
            делаем все возможное, чтобы ваше предприятие продолжало эффективно
            работать годы и годы.
          </p>

          <p className="text-[#1f2937] text-[22px] md:text-[28px] leading-[1.8] mb-10">
            Вы можете рассчитывать на нас в предоставлении одних из лучших услуг
            в отрасли. Мы ориентированы на оптимизацию срока службы вашего
            фитнес-оборудования. Мы всегда ищем способы расширить сферу
            взаимодействия с нашими клиентами, будь то предоставление учебных
            материалов для ваших сотрудников и инструкторов, или разработка
            технологических решений, отвечающих потребностям современных
            пользователей.
          </p>

          <p className="text-[#19A7E8] font-semibold text-[24px] md:text-[30px] leading-[1.8]">
            Свяжитесь с нами, чтобы узнать, как партнерство с true может помочь
            вашей компании добиться успеха.
          </p>
        </div>
      </div>
     <div className="w-full bg-[#12A8E3] py-16">
      <div className="max-w-[1300px] mx-auto px-4">
        <h2 className="text-center text-white font-extrabold uppercase text-[28px] md:text-[44px] mb-14">
          НАШИ ИННОВАЦИИ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {innovationsData.map((item) => (
            <div key={item.id} className="w-full">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[230px] object-cover"
              />

              <h3 className="text-white font-bold uppercase text-[18px] leading-[1.3] mt-5 min-h-[60px]">
                {item.title}
              </h3>

              <div className="w-[150px] h-[3px] bg-yellow-400 mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
     <div
      className="w-full bg-cover bg-center bg-no-repeat py-20 px-4"
      style={{ backgroundImage: `url(${offerBg})` }}
    >
      <div className="max-w-[1400px] mx-auto bg-black/35 px-6 md:px-12 py-12 md:py-16 text-center">
        <p className="text-yellow-300 font-bold uppercase text-[14px] md:text-[16px] mb-6">
          TRUE FITNESS
        </p>

        <h2 className="text-white font-extrabold uppercase leading-[1.05] text-[28px] sm:text-[40px] md:text-[64px]">
          ПОЛУЧИТЕ <br />
          <span className="text-[#12A8E3]">ЭКСКЛЮЗИВНОЕ</span> <br />
          <span className="text-[#12A8E3]">ПРЕДЛОЖЕНИЕ</span> НА <br />
          ТРЕНАЖЕРЫ <span className="text-[#12A8E3]">TRUE FITNESS</span>
        </h2>

        <div className="flex items-center justify-center gap-5 mt-6 mb-5">
          <div className="hidden md:block w-[180px] border-t-[3px] border-dotted border-[#12A8E3]"></div>

          <p className="text-yellow-300 font-bold uppercase text-[12px] md:text-[14px]">
            МЫ БУДЕМ РАДЫ ПРОКОНСУЛЬТИРОВАТЬ ВАС И ПОМОЧЬ С ПОДБОРОМ ОБОРУДОВАНИЯ
          </p>

          <div className="hidden md:block w-[180px] border-t-[3px] border-dotted border-[#12A8E3]"></div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto">
          <input
            type="text"
            placeholder="ИМЯ"
            className="h-[60px] bg-white px-5 outline-none text-black font-semibold placeholder:text-black"
          />

          <input
            type="text"
            placeholder="+998 (99)-999-99-99"
            className="h-[60px] bg-white px-5 outline-none text-black font-semibold placeholder:text-black"
          />

          <input
            type="email"
            placeholder="E-MAIL"
            className="h-[60px] bg-white px-5 outline-none text-black font-semibold placeholder:text-black"
          />

          <button className="h-[60px] bg-[#12A8E3] text-white font-bold uppercase hover:bg-[#0f98cf] duration-300">
            ОТПРАВИТЬ
          </button>
        </div>

        <p className="text-white font-bold text-[12px] md:text-[14px] uppercase mt-8 max-w-[950px] mx-auto leading-[1.5]">
          *НАЖИМАЯ НА КНОПКУ, ВЫ ДАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ И
          СОГЛАШАЕТЕСЬ С ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ.
        </p>
      </div>
    </div>
    </div>
  );
}

export default Abdumalik;


