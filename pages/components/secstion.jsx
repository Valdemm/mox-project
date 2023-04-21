// import Image from "next/image";

export default function Secstion() {
  return (
    <section id="hero">
      <div class="hero-container" data-aos="fade-in">
        <h1>Добро пожаловать в коворкинг</h1>
        <h2>Мох и Перья</h2>
        {/* <Image
          src=""
          alt="Hero Imgs"
          data-aos="zoom-out"
          data-aos-delay="100"
        /> */}
        <a href="#get-started" class="btn-get-started scrollto">
          Забронировать
        </a>
        <div class="btns">
          <a href="#">
            <i class="fa fa-apple fa-3x"></i> Рабочее место
          </a>
          <a href="#">
            <i class="fa fa-play fa-3x"></i> Стол
          </a>
          <a href="#">
            <i class="fa fa-windows fa-3x"></i> Локация
          </a>
        </div>
      </div>
    </section>
  );
}
