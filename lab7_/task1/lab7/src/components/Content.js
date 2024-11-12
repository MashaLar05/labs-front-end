import React, { Component } from "react";
import "../style.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
  }

  changeColor = (element) => {
    const firstElement = document.getElementById("date-of-birth");
    const secondElement = document.querySelector(".education");
    let { clickCount } = this.state;

    if (element === "date-of-birth") {
      firstElement.classList.add("first-element-active");
    }

    if (clickCount % 2 === 1) {
      secondElement.classList.add("second-element-active");
    }

    clickCount++;

    if (clickCount > 2) {
      if (clickCount % 2 === 1) {
        firstElement.classList.remove("first-element-active");
        firstElement.classList.add("second-element-active");

        secondElement.classList.remove("second-element-active");
        secondElement.classList.add("first-element-active");
      } else {
        firstElement.classList.remove("second-element-active");
        firstElement.classList.add("first-element-active");

        secondElement.classList.remove("first-element-active");
        secondElement.classList.add("second-element-active");
      }
    }
    this.setState({ clickCount });
  };

  render() {
    return (
      <div>
        <p id="date-of-birth" onClick={() => this.changeColor("date-of-birth")}>
          Дата і місце народження: 23 серпня 2005 року, м. Миколаєв
        </p>
        <p className="education" onClick={() => this.changeColor("education")}>
          Освіта:
        </p>
        <pre>
          Миколаївський морський ліцей імені професора М. Александрова, м.
          Миколаєв НТНН "КПІ", м. Київ
        </pre>

        <div>
          Хобі:
          <ul>
            <li>Танці</li>
            <li>Малювання</li>
            <li>Спортивні прогулянки</li>
            <li>Комп'ютерні ігри</li>
            <li>Писемництво</li>
          </ul>
        </div>

        <div>
          Улюбленні книги або фільми
          <ul>
            <li>
              Книги
              <ol>
                <li>Благословення небожителів, Мосян Тунсю</li>
                <li>Сповідь неполноцінної людини, Дазай Осаму</li>
                <li>Код да Вінчі, Ден Браун</li>
              </ol>
            </li>
            <li>
              Фільми
              <ol>
                <li>Шерлок Холмс, 2010-2017</li>
                <li>Пірати Карибського моря, 2003-2017</li>
                <li>Тихе місце, 2018</li>
              </ol>
            </li>
          </ul>
        </div>

        <p>
          <b>Букове́ль (Bukovel)</b> — популярний всесезонний курорт у серці
          Карпат, один з найбільших гірськолижних курортів східної Європи.
          Курорт розташований в Україні в Карпатах на території села Поляниця,
          біля підніжжя гори Буковель на висоті 920 метрів над рівнем моря.
          Найвища точка курорту — г. Довга — 1372 м. Зимовий сезон може тривати
          з грудня до квітня. Власником водойми з 2021р. — по теперішній час
          Штучний Давид Васильвич. <br />
          Курорт розташований неподалік від села Поляниця Івано-Франківської
          області, за 30 км від міста Яремче і за 100 кілометрів на південний
          захід від міста Івано-Франківськ. Буковель розташований на п'яти
          горах: Буковель (1127 м), Бульчиньоха (1455 м, Буковель освоїв висоту
          1150 м), Довга (1373 м), Бабин Погар (1 180 м), Чорна Клева (1 241 м).
        </p>
      </div>
    );
  }
}

export default Content;
