import { Link } from "react-router-dom";
import Slider from "react-slick";
import CoursesData from "services/courses";
function generateStars(starCount) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <li key={i}>
        <i className={`fa fa-star${i < starCount ? "" : "-o"}`}></i>
      </li>
    );
  }
  return stars;
}

function Courses() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section id="course-part" className="pt-115 pb-120 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-45">
              <h5>Our course</h5>
              <h2>Featured courses </h2>
            </div>
          </div>
        </div>
        <div className="course-slied mt-30">
          <Slider {...settings}>
            {CoursesData.map((course) => (
              <div key={course.id} className="col-12">
                <div className="singel-course">
                  <div className="thum">
                    <div className="image">
                      <img src={course.img} alt="Course" />
                    </div>
                    <div className="price">
                      <span>{course.price}</span>
                    </div>
                  </div>
                  <div className="cont">
                    <ul>{generateStars(course.star)}</ul>
                    <span>({course.star} Reviws)</span>
                    <Link to={`/course-single/${course.id}`}>
                      <h4>{course.title}</h4>
                    </Link>
                    <div className="course-teacher">
                      <div className="thum">
                        <a href="#">
                          <img src={course.teacher.avatar} alt="teacher" />
                        </a>
                      </div>
                      <div className="name">
                        <a href="#">
                          <h6>{course.teacher.name}</h6>
                        </a>
                      </div>
                      <div className="admin">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa fa-user"></i>
                              <span>{course.users}</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-heart"></i>
                              <span>{course.heart}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default Courses;
