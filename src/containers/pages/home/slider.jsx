import React from "react";
import Slider from "react-slick";
import Slider1 from "assets/images/slider/s-1.jpg";
import Slider2 from "assets/images/slider/s-2.jpg";
import Slider3 from "assets/images/slider/s-3.jpg";
import { PrevArrow, NextArrow } from "components/arrows";

const SliderComponent = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section id="slider-part" className="slider-active">
      <Slider {...settings}>
        <div className="single-slider pt-150" data-overlay="4">
          <img src={Slider1} className="bg_cover" alt="Slider Background" />
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-9">
                <div className="slider-cont">
                  <h1 data-animation="bounceInLeft" data-delay="1s">
                    Choose the right theme for education
                  </h1>
                  <p data-animation="fadeInUp" data-delay="1.3s">
                    Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt Sed fringilla mauri amet nibh.
                  </p>
                  <ul>
                    <li>
                      <a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#">
                        Read More
                      </a>
                    </li>
                    <li>
                      <a data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" href="#">
                        Get Started
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-slider pt-150" data-overlay="4">
          <img src={Slider2} className="bg_cover" alt="Slider Background" />
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-9">
                <div className="slider-cont">
                  <h1 data-animation="bounceInLeft" data-delay="1s">
                    Choose the right theme for education
                  </h1>
                  <p data-animation="fadeInUp" data-delay="1.3s">
                    Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt Sed fringilla mauri amet nibh.
                  </p>
                  <ul>
                    <li>
                      <a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#">
                        Read More
                      </a>
                    </li>
                    <li>
                      <a data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" href="#">
                        Get Started
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-slider pt-150" data-overlay="4">
          <img src={Slider3} className="bg_cover" alt="Slider Background" />
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-9">
                <div className="slider-cont">
                  <h1 data-animation="bounceInLeft" data-delay="1s">
                    Choose the right theme for education
                  </h1>
                  <p data-animation="fadeInUp" data-delay="1.3s">
                    Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt Sed fringilla mauri amet nibh.
                  </p>
                  <ul>
                    <li>
                      <a data-animation="fadeInUp" data-delay="1.6s" className="main-btn" href="#">
                        Read More
                      </a>
                    </li>
                    <li>
                      <a data-animation="fadeInUp" data-delay="1.9s" className="main-btn main-btn-2" href="#">
                        Get Started
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default SliderComponent;
