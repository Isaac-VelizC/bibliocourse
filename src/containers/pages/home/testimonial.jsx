import Slider from "react-slick";
import Bg2 from "assets/images/bg-2.jpg";
import TestimonialData from "services/testimonial";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="testimonial"
      className="bg_cover pt-115 pb-115"
      data-overlay="8"
      style={{ backgroundImage: `url(${Bg2})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-40">
              <h5>Testimonial</h5>
              <h2>What they say</h2>
            </div>
          </div>
        </div>
        <div className="testimonial-slied mt-40">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="col-md-12">
                <div className="singel-testimonial">
                  <div className="testimonial-thum">
                    <img src={data.img} alt="Testimonial" />
                    <div className="quote">
                      <i className="fa fa-quote-right"></i>
                    </div>
                  </div>
                  <div className="testimonial-cont">
                    <p>{data.content}</p>
                    <h6>{data.name}</h6>
                    <span>Bsc, {data.proffesion}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
