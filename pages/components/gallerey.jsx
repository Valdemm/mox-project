import Image from "next/image";

export default function Gallerey() {
  return (
    <section id="screenshots" class="padd-section text-center">
      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">
          <h2>Фотогалерея</h2>
          <p className="separator">Фото контент помещений</p>
        </div>

        <div className="screens-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <Image
                src=""
                className="img-fluid"
                alt="Фото схемы"
                role="presentation"
                width={1000}
                hidden={1000}
              />
            </div>
            <div className="swiper-slide">
              <img src="assets/img/screen/2.jpg" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="assets/img/screen/3.jpg" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="assets/img/screen/4.jpg" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="assets/img/screen/5.jpg" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="assets/img/screen/6.jpg" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="assets/img/screen/7.jpg" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="assets/img/screen/8.jpg" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
