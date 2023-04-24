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
                alt="img"
                width={60}
                height={60}
              />
              <h4>creative design</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <Image
                src="@/public/img/svg/paint-palette.svg"
                alt="img"
                width={60}
                height={60}
              />
              <h4>Retina Ready</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <Image
                src="@/public/img/svg/paint-palette.svg"
                alt="img"
                width={60}
                height={60}
              />
              <h4>easy to use</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <Image
                src="@/public/img/svg/paint-palette.svg"
                alt="img"
                width={60}
                height={60}
              />
              <h4>Free Updates</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <Image
                src="@/public/img/svg/paint-palette.svg"
                alt="img"
                width={60}
                height={60}
              />
              <h4>Free Updates</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <Image
                src="@/public/img/svg/paint-palette.svg"
                alt="img"
                width={60}
                height={60}
              />
              <h4>App store support</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <Image
                src="@/public/img/svg/paint-palette.svg"
                alt="img"
                width={60}
                height={60}
              />
              <h4>Perfect Pixel</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <Image
                src="@/public/img/svg/paint-palette.svg"
                alt="img"
                width={60}
                height={60}
              />
              <h4>clean codes</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
