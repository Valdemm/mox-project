import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about-us" class="about-us padd-section">
      <div class="container" data-aos="fade-up">
        <div class="row justify-content-center">
          <div class="col-md-5 col-lg-3">
            {/* <img src="assets/img/about-img.png" alt="About" data-aos="zoom-in" data-aos-delay="100"> */}
          </div>

          <div class="col-md-7 col-lg-5">
            <div
              class="about-content"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h2>
                <span>Мох</span> и Перья{" "}
              </h2>
              <p>Описание </p>

              <ul class="list-unstyled">
                <li>
                  <i class="vi bi-chevron-right"></i>Описание
                </li>
                <li>
                  <i class="vi bi-chevron-right"></i>Описание
                </li>
                <li>
                  <i class="vi bi-chevron-right"></i>Описание
                </li>
                <li>
                  <i class="vi bi-chevron-right"></i>Описание
                </li>
                <li>
                  <i class="vi bi-chevron-right"></i>Описание
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
