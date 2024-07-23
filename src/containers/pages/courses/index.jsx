import Cu1 from "assets/images/course/cu-1.jpg";
import T1 from "assets/images/course/teacher/t-1.jpg";
import Cu2 from "assets/images/course/cu-2.jpg";
import T2 from "assets/images/course/teacher/t-2.jpg";
import Cu3 from "assets/images/course/cu-3.jpg";
import T3 from "assets/images/course/teacher/t-3.jpg";
import Cu4 from "assets/images/course/cu-4.jpg";
import T4 from "assets/images/course/teacher/t-4.jpg";
import Cu5 from "assets/images/course/cu-5.jpg";
import T5 from "assets/images/course/teacher/t-5.jpg";
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
              <div class="col-lg-4 col-md-6">
                <div class="singel-course mt-30">
                  <div class="thum">
                    <div class="image">
                      <img src={Cu1} alt="Course" />
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
                    <a href="courses-singel.html">
                      <h4>Learn basis javascirpt from start for beginner</h4>
                    </a>
                    <div class="course-teacher">
                      <div class="thum">
                        <a href="#">
                          <img
                            src={T1}
                            alt="teacher"
                          />
                        </a>
                      </div>
                      <div class="name">
                        <a href="#">
                          <h6>Mark anthem</h6>
                        </a>
                      </div>
                      <div class="admin">
                        <ul>
                          <li>
                            <a href="#">
                              <i class="fa fa-user"></i>
                              <span>31</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-heart"></i>
                              <span>10</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="singel-course mt-30">
                  <div class="thum">
                    <div class="image">
                      <img src={Cu2} alt="Course" />
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
                    <a href="courses-singel.html">
                      <h4>Learn basis javascirpt from start for beginner</h4>
                    </a>
                    <div class="course-teacher">
                      <div class="thum">
                        <a href="#">
                          <img
                            src={T2}
                            alt="teacher"
                          />
                        </a>
                      </div>
                      <div class="name">
                        <a href="#">
                          <h6>Mark anthem</h6>
                        </a>
                      </div>
                      <div class="admin">
                        <ul>
                          <li>
                            <a href="#">
                              <i class="fa fa-user"></i>
                              <span>31</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-heart"></i>
                              <span>10</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="singel-course mt-30">
                  <div class="thum">
                    <div class="image">
                      <img src={Cu3} alt="Course" />
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
                    <a href="courses-singel.html">
                      <h4>Learn basis javascirpt from start for beginner</h4>
                    </a>
                    <div class="course-teacher">
                      <div class="thum">
                        <a href="#">
                          <img
                            src={T3}
                            alt="teacher"
                          />
                        </a>
                      </div>
                      <div class="name">
                        <a href="#">
                          <h6>Mark anthem</h6>
                        </a>
                      </div>
                      <div class="admin">
                        <ul>
                          <li>
                            <a href="#">
                              <i class="fa fa-user"></i>
                              <span>31</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-heart"></i>
                              <span>10</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="singel-course mt-30">
                  <div class="thum">
                    <div class="image">
                      <img src={Cu4} alt="Course" />
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
                    <a href="courses-singel.html">
                      <h4>Learn basis javascirpt from start for beginner</h4>
                    </a>
                    <div class="course-teacher">
                      <div class="thum">
                        <a href="#">
                          <img
                            src={T4}
                            alt="teacher"
                          />
                        </a>
                      </div>
                      <div class="name">
                        <a href="#">
                          <h6>Mark anthem</h6>
                        </a>
                      </div>
                      <div class="admin">
                        <ul>
                          <li>
                            <a href="#">
                              <i class="fa fa-user"></i>
                              <span>31</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-heart"></i>
                              <span>10</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="singel-course mt-30">
                  <div class="thum">
                    <div class="image">
                      <img src={Cu5} alt="Course" />
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
                    <a href="courses-singel.html">
                      <h4>Learn basis javascirpt from start for beginner</h4>
                    </a>
                    <div class="course-teacher">
                      <div class="thum">
                        <a href="#">
                          <img
                            src={T5}
                            alt="teacher"
                          />
                        </a>
                      </div>
                      <div class="name">
                        <a href="#">
                          <h6>Mark anthem</h6>
                        </a>
                      </div>
                      <div class="admin">
                        <ul>
                          <li>
                            <a href="#">
                              <i class="fa fa-user"></i>
                              <span>31</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-heart"></i>
                              <span>10</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="singel-course mt-30">
                  <div class="thum">
                    <div class="image">
                      <img src={Cu1} alt="Course" />
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
                    <a href="courses-singel.html">
                      <h4>Learn basis javascirpt from start for beginner</h4>
                    </a>
                    <div class="course-teacher">
                      <div class="thum">
                        <a href="#">
                          <img
                            src={T1}
                            alt="teacher"
                          />
                        </a>
                      </div>
                      <div class="name">
                        <a href="#">
                          <h6>Mark anthem</h6>
                        </a>
                      </div>
                      <div class="admin">
                        <ul>
                          <li>
                            <a href="#">
                              <i class="fa fa-user"></i>
                              <span>31</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-heart"></i>
                              <span>10</span>
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
          <div
            class="tab-pane fade"
            id="courses-list"
            role="tabpanel"
            aria-labelledby="courses-list-tab"
          >
            <div class="row">
              <div class="col-lg-12">
                <div class="singel-course mt-30">
                  <div class="row no-gutters">
                    <div class="col-md-6">
                      <div class="thum">
                        <div class="image">
                          <img src={Cu1} alt="Course" />
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
                        <a href="#">
                          <h4>
                            Learn basis javascirpt from start for beginner
                          </h4>
                        </a>
                        <div class="course-teacher">
                          <div class="thum">
                            <a href="#">
                              <img
                                src={T1}
                                alt="teacher"
                              />
                            </a>
                          </div>
                          <div class="name">
                            <a href="#">
                              <h6>Mark anthem</h6>
                            </a>
                          </div>
                          <div class="admin">
                            <ul>
                              <li>
                                <a href="#">
                                  <i class="fa fa-user"></i>
                                  <span>31</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fa fa-heart"></i>
                                  <span>10</span>
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
              <div class="col-lg-12">
                <div class="singel-course mt-30">
                  <div class="row no-gutters">
                    <div class="col-md-6">
                      <div class="thum">
                        <div class="image">
                          <img src={Cu2} alt="Course" />
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
                        <a href="#">
                          <h4>
                            Learn basis javascirpt from start for beginner
                          </h4>
                        </a>
                        <div class="course-teacher">
                          <div class="thum">
                            <a href="#">
                              <img
                                src={T2}
                                alt="teacher"
                              />
                            </a>
                          </div>
                          <div class="name">
                            <a href="#">
                              <h6>Mark anthem</h6>
                            </a>
                          </div>
                          <div class="admin">
                            <ul>
                              <li>
                                <a href="#">
                                  <i class="fa fa-user"></i>
                                  <span>31</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fa fa-heart"></i>
                                  <span>10</span>
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
              <div class="col-lg-12">
                <div class="singel-course mt-30">
                  <div class="row no-gutters">
                    <div class="col-md-6">
                      <div class="thum">
                        <div class="image">
                          <img src={Cu3} alt="Course" />
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
                        <a href="#">
                          <h4>
                            Learn basis javascirpt from start for beginner
                          </h4>
                        </a>
                        <div class="course-teacher">
                          <div class="thum">
                            <a href="#">
                              <img
                                src={T3}
                                alt="teacher"
                              />
                            </a>
                          </div>
                          <div class="name">
                            <a href="#">
                              <h6>Mark anthem</h6>
                            </a>
                          </div>
                          <div class="admin">
                            <ul>
                              <li>
                                <a href="#">
                                  <i class="fa fa-user"></i>
                                  <span>31</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fa fa-heart"></i>
                                  <span>10</span>
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
              <div class="col-lg-12">
                <div class="singel-course mt-30">
                  <div class="row no-gutters">
                    <div class="col-md-6">
                      <div class="thum">
                        <div class="image">
                          <img src={Cu4} alt="Course" />
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
                        <a href="#">
                          <h4>
                            Learn basis javascirpt from start for beginner
                          </h4>
                        </a>
                        <div class="course-teacher">
                          <div class="thum">
                            <a href="#">
                              <img
                                src={T4}
                                alt="teacher"
                              />
                            </a>
                          </div>
                          <div class="name">
                            <a href="#">
                              <h6>Mark anthem</h6>
                            </a>
                          </div>
                          <div class="admin">
                            <ul>
                              <li>
                                <a href="#">
                                  <i class="fa fa-user"></i>
                                  <span>31</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fa fa-heart"></i>
                                  <span>10</span>
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
