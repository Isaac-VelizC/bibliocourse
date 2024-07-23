import { Link } from "react-router-dom";
import CoursesData from "services/courses";

function CoursesPage() {
  return (
    <section id="courses-part" class="pt-120 pb-120 gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="courses-top-search">
              <ul class="nav float-left" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="active"
                    id="courses-grid-tab"
                    data-toggle="tab"
                    href="#courses-grid"
                    role="tab"
                    aria-controls="courses-grid"
                    aria-selected="true"
                  >
                    <i class="fa fa-th-large"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    id="courses-list-tab"
                    data-toggle="tab"
                    href="#courses-list"
                    role="tab"
                    aria-controls="courses-list"
                    aria-selected="false"
                  >
                    <i class="fa fa-th-list"></i>
                  </a>
                </li>
                <li class="nav-item">Showning 4 0f 24 Results</li>
              </ul>

              <div class="courses-search float-right">
                <form action="#">
                  <input type="text" placeholder="Search" />
                  <button type="button">
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="courses-grid"
            role="tabpanel"
            aria-labelledby="courses-grid-tab"
          >
            <div class="row">
              {CoursesData.map((data) => (
                <div key={data.id} class="col-lg-4 col-md-6">
                  <div class="singel-course mt-30">
                    <div class="thum">
                      <div class="image">
                        <img src={data.img} alt="Course" />
                      </div>
                      <div class="price">
                        <span>Free</span>
                      </div>
                    </div>
                    <div class="cont">
                      <ul>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                      </ul>
                      <span>(20 Reviws)</span>
                      <Link to={`/course-single/${data.id}`}>
                        <h4>{data.title}</h4>
                      </Link>
                      <div class="course-teacher">
                        <div class="thum">
                          <a href="#">
                            <img src={data.teacher.avatar} alt="teacher" />
                          </a>
                        </div>
                        <div class="name">
                          <a href="#">
                            <h6>{data.teacher.name}</h6>
                          </a>
                        </div>
                        <div class="admin">
                          <ul>
                            <li>
                              <a href="#">
                                <i class="fa fa-user"></i>
                                <span>{data.users}</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-heart"></i>
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
            class="tab-pane fade"
            id="courses-list"
            role="tabpanel"
            aria-labelledby="courses-list-tab"
          >
            <div class="row">
              {CoursesData.map((course) => (
                <div key={course.id} class="col-lg-12">
                  <div class="singel-course mt-30">
                    <div class="row no-gutters">
                      <div class="col-md-6">
                        <div class="thum">
                          <div class="image">
                            <img src={course.img} alt="Course" />
                          </div>
                          <div class="price">
                            <span>Free</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="cont">
                          <ul>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                            <li>
                              <i class="fa fa-star"></i>
                            </li>
                          </ul>
                          <span>(20 Reviws)</span>
                          <Link to={`/course-single/${course.id}`}>
                            <h4>{course.title}</h4>
                          </Link>
                          <div class="course-teacher">
                            <div class="thum">
                              <a href={course.teacher.avatar}>
                                <img
                                  src={course.teacher.avatar}
                                  alt="teacher"
                                />
                              </a>
                            </div>
                            <div class="name">
                              <a href="#">
                                <h6>{course.teacher.name}</h6>
                              </a>
                            </div>
                            <div class="admin">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i class="fa fa-user"></i>
                                    <span>{course.users}</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="fa fa-heart"></i>
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
        <div class="row">
          <div class="col-lg-12">
            <nav class="courses-pagination mt-50">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a href="#" aria-label="Previous">
                    <i class="fa fa-angle-left"></i>
                  </a>
                </li>
                <li class="page-item">
                  <a class="active" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a href="#">2</a>
                </li>
                <li class="page-item">
                  <a href="#">3</a>
                </li>
                <li class="page-item">
                  <a href="#" aria-label="Next">
                    <i class="fa fa-angle-right"></i>
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
