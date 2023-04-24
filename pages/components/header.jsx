export default function Header() {
  return (
    <header
      id="header"
      classNameName="header fixed-top d-flex align-items-center"
    >
      <div class="container d-flex align-items-center justify-content-between">
        <div id="logo">
          <h1>
            <a href="index.html">
              <span>Мох</span> и Перья
            </a>
          </h1>

          <a href="index.html">
            <img src="assets/img/logo.png" alt="" title="" />
          </a>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a classNameName="nav-link scrollto active" href="#hero">
                Главная
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about-us">
                О Нас
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#features">
                Бронирование
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#screenshots">
                Оплата
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Галлерея
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#pricing">
                ЧТО то
              </a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Выкидное меню</span>{" "}
                <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Выкидное меню</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Контакты
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
