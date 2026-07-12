import React from 'react'
import './Solixa.css'
import Card from './Card'
import house from "../assets/house.png";

function Solixa() {



  return (
    <div>

     <div className='topp'>
        <span>КЛУБ TRUE</span>
        <h2>Открыть клуб вместе с TRUE</h2>
      </div>

<div className='photo'>
  <Card image={house}> </Card>
</div>

<div className="form-boxs">
  <h1>Отправить заявку</h1>
    <div className="form-container">
      <form className="contact-form">
        <div className="form-group">
          <label>ВАШЕ ИМЯ</label>
          <input type="text" placeholder="ИМЯ" />
        </div>

        <div className="form-group">
          <label>E-MAIL:</label>
          <input type="email" placeholder="E-MAIL:" />
        </div>

        <div className="form-group">
          <label>НОМЕР ТЕЛЕФОНА</label>
          <div className="phone-input">
            <span>🇺🇿</span>
            <input type="tel" placeholder="+998 (99)-999-99-99" />
          </div>
        </div>

        <div className="form-group">
          <label>ГОРОД</label>
          <input type="text" placeholder="ГОРОД" />
        </div>

        <div className="form-section">
          <h4>ХОТИТЕ ОТКРЫТЬ:</h4>

          <label><input type="radio" name="open" /> Фитнес студию</label>
          <label><input type="radio" name="open" /> Фитнес клуб</label>
          <label><input type="radio" name="open" /> Домашний Спортзал</label>
          <label><input type="radio" name="open" /> Тренажерный Зал В Отеле, Санатории</label>
          <label><input type="radio" name="open" /> Корпоративный Спортзал</label>
        </div>

        <div className="form-section">
          <h4>ПЛАНИРУЕМЫЙ СРОК ЗАПУСКА ПРОЕКТА:</h4>

          <label><input type="radio" name="time" /> Фитнес студия</label>
          <label><input type="radio" name="time" /> Фитнес клуб</label>
          <label><input type="radio" name="time" /> Домашний Спортзал</label>
          <label><input type="radio" name="time" /> Тренажерный зал в отеле, санатории</label>
          <label><input type="radio" name="time" /> Корпоративный Спортзал</label>
        </div>

        <div className="form-section">
          <h4>КАКИЕ УСЛУГИ ВАС ИНТЕРЕСУЮТ:</h4>

          <label><input type="checkbox" /> Консультация</label>
          <label><input type="checkbox" /> Подбор Оборудования</label>
          <label><input type="checkbox" /> Расстановка Тренажеров На Плане</label>
          <label><input type="checkbox" /> Дизайн</label>
        </div>

        <div className="form-group">
          <label>ЗАГРУЗИТЬ ПЛАН ПОМЕЩЕНИЯ</label>

          <label className="upload-btn">
            ADD FILES
            <input type="file" hidden />
          </label>
        </div>

        <div className="form-group">
          <label>КОММЕНТАРИЙ</label>
          <textarea rows="4"></textarea>
        </div>

        <button className="submit-btn">ОТПРАВИТЬ</button>
      </form>
    </div>
</div>

















    </div>
  )
}

export default Solixa