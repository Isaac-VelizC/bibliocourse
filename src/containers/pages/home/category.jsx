import Slider from "react-slick";
import { PrevArrow, NextArrow } from "components/arrows";
import categories from "services/category";

function Category() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 922,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
    <section id="category-part">
      <div className="container">
        <div className="category pt-40 pb-80">
          <div className="row">
            <div className="col-lg-4">
              <div className="category-text pt-40">
                <h2>Best platform to learn everything</h2>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2">
              <div className="category-slied mt-40">
                <Slider {...settings}>
                  {categories.map((item, index) => (
                    <div className="col-12" key={index}>
                      <a href={item.link}>
                        <span className={`singel-category text-center color-${item.color}`}>
                          <span className="icon">
                            <img src={item.icon} alt="Icon" />
                          </span>
                          <span className="cont">
                            <span>{item.name}</span>
                          </span>
                        </span>
                      </a>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
