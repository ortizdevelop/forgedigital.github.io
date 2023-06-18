import bg from "./images/bg1.png";
import logo from "./images/Logo.png";
import dot from "./images/dot.svg";

import "./styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <div className="header__bg">
            <img src={bg} alt="" />
          </div>
          <img src={logo} alt="" className="header__logo" />
          <ul className="header__column">
            <li className="header__list">
              <a href="" className="header__list-text">
                О нас
              </a>
            </li>
            <li className="header__list">
              <a href="" className="header__list-text">
                Работы
              </a>
            </li>
            <li className="header__list">
              <a href="" className="header__list-text">
                Контакты
              </a>
            </li>
          </ul>
          <a href="mailto:contact@forgedigital.ru" className="header__mail">
            contact@forgedigital.ru
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
