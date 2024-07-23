import { Link } from "react-router-dom";
import CoursesData from "services/courses";

function CoursesPage() {
  return (
    <section id="courses-part" className="pt-120 pb-120 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="courses-top-search">
              <ul className="nav float-left" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="active"
                    id="courses-grid-tab"
                    data-toggle="tab"
                    href="#courses-grid"
                    role="tab"
                    aria-controls="courses-grid"
                    aria-selected="true"
                  >
                    <i className="fa fa-th-large"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    id="courses-list-tab"
                    data-toggle="tab"
                    href="#courses-list"
                    role="tab"
                    aria-controls="courses-list"
                    aria-selected="false"
                  >
                    <i className="fa fa-th-list"></i>
                  </a>
                </li>
                <li className="nav-item">Showning 4 0f 24 Results</li>
              </ul>

              <div className="courses-search float-right">
                <form action="#">
                  <input type="text" placeholder="Search" />
                  <button type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="courses-grid"
            role="tabpanel"
            aria-labelledby="courses-grid-tab"
          >
            <div className="row">
              {CoursesData.map((data) => (
                <div key={data.id} className="col-lg-4 col-md-6">
                  <div className="singel-course mt-30">
                    <div className="thum">
                      <div className="image">
                        <img src={data.img} alt="Course" />
                      </div>
                      <div className="price">
                        <span>Free</span>
                      </div>
                    </div>
                    <div className="cont">
                      <ul>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <span>(20 Reviws)</span>
                      <Link to={`/course-single/${data.id}`}>
                        <h4>{data.title}</h4>
                      </Link>
                      <div className="course-teacher">
                        <div className="thum">
                          <a href="#">
                            <img src={data.teacher.avatar} alt="teacher" />
                          </a>
                        </div>
                        <div className="name">
                          <a href="#">
                            <h6>{data.teacher.name}</h6>
                          </a>
                        </div>
                        <div className="admin">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-user"></i>
                                <span>{data.users}</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                                <span>{data.star}</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="courses-list"
            role="tabpanel"
            aria-labelledby="courses-list-tab"
          >
            <div className="row">
              {CoursesData.map((course) => (
                <div key={course.id} className="col-lg-12">
                  <div className="singel-course mt-30">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <div className="thum">
                          <div className="image">
                            <img src={course.img} alt="Course" />
                          </div>
                          <div className="price">
                            <span>Free</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="cont">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          <span>(20 Reviws)</span>
                          <Link to={`/course-single/${course.id}`}>
                            <h4>{course.title}</h4>
                          </Link>
                          <div className="course-teacher">
                            <div className="thum">
                              <a href={course.teacher.avatar}>
                                <img
                                  src={course.teacher.avatar}
                                  alt="teacher"
                                />
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
                                    <span>{course.star}</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <nav className="courses-pagination mt-50">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a href="#" aria-label="Previous">
                    <i className="fa fa-angle-left"></i>
                  </a>
                </li>
                <li className="page-item">
                  <a className="active" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#">2</a>
                </li>
                <li className="page-item">
                  <a href="#">3</a>
                </li>
                <li className="page-item">
                  <a href="#" aria-label="Next">
                    <i className="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoursesPage;
