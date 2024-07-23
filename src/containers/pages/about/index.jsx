import About2 from "assets/images/about/about-2.jpg";
import Bg2 from "assets/images/bg-2.jpg";
import Testimonial from "../home/testimonial";
import Teachers from "../home/teachers";
import LogoSection from "components/section/logos";
import Counter from "components/counter";

function AboutPage() {
  return (
    <>
      <section id="about-page" className="pt-70 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title mt-50">
                <h5>About us</h5>
                <h2>Welcome to Edubin </h2>
              </div>
              <div className="about-cont">
                <p>
                  Lorem ipsum gravida nibh vel velit auctor aliquetn
                  sollicitudirem quibibendum auci elit cons equat ipsutis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio
                  tincidunt mauris. <br /> <br /> auci elit cons equat ipsutis
                  sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
                  a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio
                  tincidunt mauris
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-image mt-50">
                <img src={About2} alt="About" />
              </div>
            </div>
          </div>
          <div className="about-items pt-60">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-singel-items mt-30">
                  <span>01</span>
                  <h4>Why Choose us</h4>
                  <p>
                    Lorem ipsum gravida nibh vel velit auctor aliquetn
                    sollicitudirem quibibendum auci elit sollicitudirem
                    quibibendum auci
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-singel-items mt-30">
                  <span>02</span>
                  <h4>Our Mission</h4>
                  <p>
                    Lorem ipsum gravida nibh vel velit auctor aliquetn
                    sollicitudirem quibibendum auci elit sollicitudirem
                    quibibendum auci
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-singel-items mt-30">
                  <span>03</span>
                  <h4>Our vission</h4>
                  <p>
                    Lorem ipsum gravida nibh vel velit auctor aliquetn
                    sollicitudirem quibibendum auci elit sollicitudirem
                    quibibendum auci
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id="counter-part"
        className="bg_cover pt-65 pb-110"
        data-overlay="8"
        style={{ backgroundImage: `url(${Bg2})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="singel-counter text-center mt-40">
                <span>
                  <Counter end={30000} duration={2000} suffix="+" />
                </span>
                <p>Students enrolled</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="singel-counter text-center mt-40">
                <span>
                  <Counter end={41000} duration={2000} suffix="+" />
                </span>
                <p>Courses Uploaded</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="singel-counter text-center mt-40">
                <span>
                  <Counter end={11000} duration={2000} suffix="+" />
                </span>
                <p>People certifie</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="singel-counter text-center mt-40">
                <span>
                <Counter end={39000} duration={2000} suffix="+" />
                </span>
                <p>Global Teachers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Teachers/>
      <Testimonial />
      <LogoSection/>
    </>
  );
}

export default AboutPage;
