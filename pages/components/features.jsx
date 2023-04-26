import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="padd-section text-center">
      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">
          <h2>Специалисты</h2>
          <p className="separator">
            Вы можете связаться с нами по телефону для уточнения информации
          </p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <Image
                src="@/public/img/svg/paint-palette.svg"
                alt="Фото специалиста"
                width={60}
                height={60}
              />
              <h4>Специалист</h4>
              <p>Услуга специалиста</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <Image
                src="@/public/img/svg/paint-palette.svg"
                alt="Фотография специалиста"
                width={60}
                height={60}
              />
              <h4>Специалист</h4>
              <p>Услуга специалиста</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <Image
                src="@/public/img/svg/paint-palette.svg"
                alt="Фотография специалиста"
                width={60}
                height={60}
              />
              <h4>Специалист</h4>
              <p>Услуга специалиста</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <Image
                src="@/public/img/svg/paint-palette.svg"
                alt="Фотография специалиста"
                width={60}
                height={60}
              />
              <h4>Специалист</h4>
              <p>Услуга специалиста</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <Image
                src="@/public/img/svg/paint-palette.svg"
                alt="Фотография специалиста"
                width={60}
                height={60}
              />
              <h4>Специалист</h4>
              <p>Услуга специалиста</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <Image
                src="@/public/img/svg/paint-palette.svg"
                alt="Фотография специалиста"
                width={60}
                height={60}
              />
              <h4>Специалист</h4>
              <p>Услуга специалиста</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <Image
                src="@/public/img/svg/paint-palette.svg"
                alt="Фотография специалиста"
                width={60}
                height={60}
              />
              <h4>Специалист</h4>
              <p>Услуга специалиста</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <Image
                src="@/public/img/svg/paint-palette.svg"
                alt="Фотография специалиста"
                width={60}
                height={60}
              />
              <h4>Специалист</h4>
              <p>Услуга специалиста</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
