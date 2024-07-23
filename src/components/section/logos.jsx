import Slider from "react-slick";
import P1 from "assets/images/patnar-logo/p-1.png";
import P2 from "assets/images/patnar-logo/p-2.png";
import P3 from "assets/images/patnar-logo/p-3.png";
import P4 from "assets/images/patnar-logo/p-4.png";

function LogoSection() {
  const settings = {
    dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        ]
  }
  return (
    <div id="patnar-logo" className="pt-40 pb-80 gray-bg">
      <div className="container">
        <div className="patnar-slied">
          <Slider {...settings}>
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src={P1} alt="Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src={P2} alt="Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src={P3} alt="Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src={P4} alt="Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src={P2} alt="Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src={P3} alt="Logo" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
