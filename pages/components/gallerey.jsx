import Image from "next/image";

export default function Gallerey() {
  return (
    <section id="screenshots" class="padd-section text-center">
      <div class="container" data-aos="fade-up">
        <div class="section-title text-center">
          <h2>App Gallery</h2>
          <p class="separator">Integer cursus bibendum augue ac cursus .</p>
        </div>

        <div class="screens-slider swiper">
          <div class="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <img src="assets/img/screen/1.jpg" className="img-fluid" alt="" />
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
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
