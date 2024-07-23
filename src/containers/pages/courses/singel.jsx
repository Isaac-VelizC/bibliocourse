import { useParams } from 'react-router-dom';
import CoursesData from 'services/courses';
import I1 from "assets/images/instructor/i-1.jpg";
import R1 from "assets/images/review/r-1.jpg";
import R2 from "assets/images/review/r-2.jpg";
import R3 from "assets/images/review/r-3.jpg";
import Y1 from "assets/images/your-make/y-1.jpg";
import Cu2 from "assets/images/course/cu-2.jpg";
import Cu1 from "assets/images/course/cu-1.jpg";
import T1 from "assets/images/course/teacher/t-3.jpg";
import T2 from "assets/images/course/teacher/t-2.jpg";

function CourseSingel() {
  const { id } = useParams(); // Obtén el ID del curso de la URL
  const course = CoursesData.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
     <section id="corses-singel" className="pt-90 pb-120 gray-bg">
     <div className="container">
         <div className="row">
             <div className="col-lg-8">
                 <div className="corses-singel-left mt-30">
                     <div className="title">
                         <h3>{course.title}</h3>
                     </div>
                     <div className="course-terms">
                         <ul>
                             <li>
                                 <div className="teacher-name">
                                     <div className="thum">
                                         <img src={course.teacher.avatar} alt="Teacher" />
                                     </div>
                                     <div className="name">
                                         <span>Teacher</span>
                                         <h6>{course.teacher.name}</h6>
                                     </div>
                                 </div>
                             </li>
                             <li>
                                 <div className="course-category">
                                     <span>Category</span>
                                     <h6>Programaming </h6>
                                 </div>
                             </li>
                             <li>
                                 <div className="review">
                                     <span>Review</span>
                                     <ul>
                                         <li><a href="#"><i className="fa fa-star"></i></a></li>
                                         <li><a href="#"><i className="fa fa-star"></i></a></li>
                                         <li><a href="#"><i className="fa fa-star"></i></a></li>
                                         <li><a href="#"><i className="fa fa-star"></i></a></li>
                                         <li><a href="#"><i className="fa fa-star"></i></a></li>
                                         <li className="rating">({course.star} Reviws)</li>
                                     </ul>
                                 </div>
                             </li>
                         </ul>
                     </div>
                     
                     <div className="corses-singel-image pt-50">
                         <img src={course.img} alt="Courses" />
                     </div>
                     
                     <div className="corses-tab mt-30">
                         <ul className="nav nav-justified" id="myTab" role="tablist">
                             <li className="nav-item">
                                 <a className="active" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                             </li>
                             <li className="nav-item">
                                 <a id="curriculam-tab" data-toggle="tab" href="#curriculam" role="tab" aria-controls="curriculam" aria-selected="false">Curriculam</a>
                             </li>
                             <li className="nav-item">
                                 <a id="instructor-tab" data-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false">Instructor</a>
                             </li>
                             <li className="nav-item">
                                 <a id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                             </li>
                         </ul>
                         
                         <div className="tab-content" id="myTabContent">
                             <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                 <div className="overview-description">
                                     <div className="singel-description pt-40">
                                         <h6>Course Summery</h6>
                                         <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .</p>
                                     </div>
                                     <div className="singel-description pt-40">
                                         <h6>Requrements</h6>
                                         <p>Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="tab-pane fade" id="curriculam" role="tabpanel" aria-labelledby="curriculam-tab">
                                 <div className="curriculam-cont">
                                     <div className="title">
                                         <h6>Learn basis javascirpt Lecture Started</h6>
                                     </div>
                                     <div className="accordion" id="accordionExample">
                                         <div className="card">
                                             <div className="card-header" id="headingOne">
                                                 <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                     <ul>
                                                         <li><i className="fa fa-file-o"></i></li>
                                                         <li><span className="lecture">Lecture 1.1</span></li>
                                                         <li><span className="head">What is javascirpt</span></li>
                                                         <li><span className="time d-none d-md-block"><i className="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                     </ul>
                                                 </a>
                                             </div>

                                             <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                 <div className="card-body">
                                                     <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                 </div>
                                             </div>
                                         </div>
                                         
                                         <div className="card">
                                             <div className="card-header" id="headingTow">
                                                 <a href="#" data-toggle="collapse" className="collapsed" data-target="#collapseTow" aria-expanded="true" aria-controls="collapseTow">
                                                     <ul>
                                                         <li><i className="fa fa-file-o"></i></li>
                                                         <li><span className="lecture">Lecture 1.2</span></li>
                                                         <li><span className="head">What is javascirpt</span></li>
                                                         <li><span className="time d-none d-md-block"><i className="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                     </ul>
                                                 </a>
                                             </div>

                                             <div id="collapseTow" className="collapse" aria-labelledby="headingTow" data-parent="#accordionExample">
                                                 <div className="card-body">
                                                     <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                 </div>
                                             </div>
                                         </div>

                                         <div className="card">
                                             <div className="card-header" id="headingThree">
                                                 <a href="#" data-toggle="collapse" className="collapsed" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                     <ul>
                                                         <li><i className="fa fa-file-o"></i></li>
                                                         <li><span className="lecture">Lecture 1.3</span></li>
                                                         <li><span className="head">What is javascirpt</span></li>
                                                         <li><span className="time d-none d-md-block"><i className="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                     </ul>
                                                 </a>
                                             </div>
                                             <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                 <div className="card-body">
                                                     <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                 </div>
                                             </div>
                                         </div>

                                         <div className="card">
                                             <div className="card-header" id="headingFore">
                                                 <a href="#" data-toggle="collapse" className="collapsed" data-target="#collapseFore" aria-expanded="false" aria-controls="collapseFore">
                                                     <ul>
                                                         <li><i className="fa fa-file-o"></i></li>
                                                         <li><span className="lecture">Lecture 1.4</span></li>
                                                         <li><span className="head">What is javascirpt</span></li>
                                                         <li><span className="time d-none d-md-block"><i className="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                     </ul>
                                                 </a>
                                             </div>
                                             <div id="collapseFore" className="collapse" aria-labelledby="headingFore" data-parent="#accordionExample">
                                                 <div className="card-body">
                                                     <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                 </div>
                                             </div>
                                         </div>

                                         <div className="card">
                                             <div className="card-header" id="headingFive">
                                                 <a href="#" data-toggle="collapse" className="collapsed" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                     <ul>
                                                         <li><i className="fa fa-file-o"></i></li>
                                                         <li><span className="lecture">Lecture 1.5</span></li>
                                                         <li><span className="head">What is javascirpt</span></li>
                                                         <li><span className="time d-none d-md-block"><i className="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                     </ul>
                                                 </a>
                                             </div>
                                             <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                                 <div className="card-body">
                                                     <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                 </div>
                                             </div>
                                         </div>
                                         
                                         <div className="card">
                                             <div className="card-header" id="headingSix">
                                                 <a href="#" data-toggle="collapse" className="collapsed" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                     <ul>
                                                         <li><i className="fa fa-file-o"></i></li>
                                                         <li><span className="lecture">Lecture 1.6</span></li>
                                                         <li><span className="head">What is javascirpt</span></li>
                                                         <li><span className="time d-none d-md-block"><i className="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                     </ul>
                                                 </a>
                                             </div>
                                             <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                                 <div className="card-body">
                                                     <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                 </div>
                                             </div>
                                         </div>
                                         
                                         <div className="card">
                                             <div className="card-header" id="headingSeven">
                                                 <a href="#" data-toggle="collapse" className="collapsed" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                     <ul>
                                                         <li><i className="fa fa-file-o"></i></li>
                                                         <li><span className="lecture">Lecture 1.7</span></li>
                                                         <li><span className="head">What is javascirpt</span></li>
                                                         <li><span className="time d-none d-md-block"><i className="fa fa-clock-o"></i> <span> 00.30.00</span></span></li>
                                                     </ul>
                                                 </a>
                                             </div>
                                             <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                                 <div className="card-body">
                                                     <p>Ut quis scelerisque risus, et viverra nisi. Phasellus ultricies luctus augue, eget maximus felis laoreet quis. Maecenasbibendum tempor eros.</p>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                                 <div className="instructor-cont">
                                     <div className="instructor-author">
                                         <div className="author-thum">
                                             <img src={I1} alt="Instructor" />
                                         </div>
                                         <div className="author-name">
                                             <a href="#"><h5>Sumon Hasan</h5></a>
                                             <span>Senior WordPress Developer</span>
                                             <ul className="social">
                                                 <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                                 <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                 <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                 <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                             </ul>
                                         </div>
                                     </div>
                                     <div className="instructor-description pt-25">
                                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus fuga ratione molestiae unde provident quibusdam sunt, doloremque. Error omnis mollitia, ex dolor sequi. Et, quibusdam excepturi. Animi assumenda, consequuntur dolorum odio sit inventore aliquid, optio fugiat alias. Veritatis minima, dicta quam repudiandae repellat non sit, distinctio, impedit, expedita tempora numquam?</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                 <div className="reviews-cont">
                                     <div className="title">
                                         <h6>Student Reviews</h6>
                                     </div>
                                     <ul>
                                        <li>
                                            <div className="singel-reviews">
                                                 <div className="reviews-author">
                                                     <div className="author-thum">
                                                         <img src={R1} alt="Reviews"/>
                                                     </div>
                                                     <div className="author-name">
                                                         <h6>Bobby Aktar</h6>
                                                         <span>April 03, 2019</span>
                                                     </div>
                                                 </div>
                                                 <div className="reviews-description pt-20">
                                                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                                     <div className="rating">
                                                         <ul>
                                                             <li><i className="fa fa-star"></i></li>
                                                             <li><i className="fa fa-star"></i></li>
                                                             <li><i className="fa fa-star"></i></li>
                                                             <li><i className="fa fa-star"></i></li>
                                                             <li><i className="fa fa-star"></i></li>
                                                         </ul>
                                                         <span>/ 5 Star</span>
                                                     </div>
                                                 </div>
                                             </div>
                                        </li>
                                        <li>
                                            <div className="singel-reviews">
                                                 <div className="reviews-author">
                                                     <div className="author-thum">
                                                         <img src={R2} alt="Reviews"/>
                                                     </div>
                                                     <div className="author-name">
                                                         <h6>Humayun Ahmed</h6>
                                                         <span>April 13, 2019</span>
                                                     </div>
                                                 </div>
                                                 <div className="reviews-description pt-20">
                                                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                                     <div className="rating">
                                                         <ul>
                                                             <li><i className="fa fa-star"></i></li>
                                                             <li><i className="fa fa-star"></i></li>
                                                             <li><i className="fa fa-star"></i></li>
                                                             <li><i className="fa fa-star"></i></li>
                                                             <li><i className="fa fa-star"></i></li>
                                                         </ul>
                                                         <span>/ 5 Star</span>
                                                     </div>
                                                 </div>
                                             </div>
                                        </li>
                                        <li>
                                            <div className="singel-reviews">
                                                 <div className="reviews-author">
                                                     <div className="author-thum">
                                                         <img src={R3} alt="Reviews"/>
                                                     </div>
                                                     <div className="author-name">
                                                         <h6>Tania Aktar</h6>
                                                         <span>April 20, 2019</span>
                                                     </div>
                                                 </div>
                                                 <div className="reviews-description pt-20">
                                                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
                                                     <div className="rating">
                                                         <ul>
                                                             <li><i className="fa fa-star"></i></li>
                                                             <li><i className="fa fa-star"></i></li>
                                                             <li><i className="fa fa-star"></i></li>
                                                             <li><i className="fa fa-star"></i></li>
                                                             <li><i className="fa fa-star"></i></li>
                                                         </ul>
                                                         <span>/ 5 Star</span>
                                                     </div>
                                                 </div>
                                             </div>
                                        </li>
                                     </ul>
                                     <div className="title pt-15">
                                         <h6>Leave A Comment</h6>
                                     </div>
                                     <div className="reviews-form">
                                         <form action="#">
                                             <div className="row">
                                                 <div className="col-md-6">
                                                     <div className="form-singel">
                                                         <input type="text" placeholder="Fast name"/>
                                                     </div>
                                                 </div>
                                                 <div className="col-md-6">
                                                     <div className="form-singel">
                                                         <input type="text" placeholder="Last Name"/>
                                                     </div>
                                                 </div>
                                                 <div className="col-lg-12">
                                                     <div className="form-singel">
                                                         <div className="rate-wrapper">
                                                             <div className="rate-label">Your Rating:</div>
                                                             <div className="rate">
                                                                 <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                                                 <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                                                 <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                                                 <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                                                 <div className="rate-item"><i className="fa fa-star" aria-hidden="true"></i></div>
                                                             </div>
                                                         </div>
                                                     </div>
                                                 </div>
                                                 <div className="col-lg-12">
                                                     <div className="form-singel">
                                                         <textarea placeholder="Comment"></textarea>
                                                     </div>
                                                 </div>
                                                 <div className="col-lg-12">
                                                     <div className="form-singel">
                                                         <button type="button" className="main-btn">Post Comment</button>
                                                     </div>
                                                 </div>
                                             </div>
                                         </form>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 
             </div>
             <div className="col-lg-4">
                 <div className="row">
                     <div className="col-lg-12 col-md-6">
                         <div className="course-features mt-30">
                            <h4>Course Features </h4>
                             <ul>
                                 <li><i className="fa fa-clock-o"></i>Duaration : <span>10 Hours</span></li>
                                 <li><i className="fa fa-clone"></i>Leactures : <span>09</span></li>
                                 <li><i className="fa fa-beer"></i>Quizzes :  <span>05</span></li>
                                 <li><i className="fa fa-user-o"></i>Students :  <span>100</span></li>
                             </ul>
                             <div className="price-button pt-10">
                                 <span>Price : <b>$25</b></span>
                                 <a href="#" className="main-btn">Enroll Now</a>
                             </div>
                         </div>
                     </div>
                     <div className="col-lg-12 col-md-6">
                         <div className="You-makelike mt-30">
                             <h4>You make like </h4> 
                             <div className="singel-makelike mt-20">
                                 <div className="image">
                                     <img src={Y1} alt="Image"/>
                                 </div>
                                 <div className="cont">
                                     <a href="#"><h4>Introduction to machine languages</h4></a>
                                     <ul>
                                         <li><a href="#"><i className="fa fa-user"></i>31</a></li>
                                         <li>$50</li>
                                     </ul>
                                 </div>
                             </div>
                             <div className="singel-makelike mt-20">
                                 <div className="image">
                                     <img src={Y1} alt="Image"/>
                                 </div>
                                 <div className="cont">
                                     <a href="#"><h4>How to build a basis game with java </h4></a>
                                     <ul>
                                         <li><a href="#"><i className="fa fa-user"></i>31</a></li>
                                         <li>$50</li>
                                     </ul>
                                 </div>
                             </div>
                             <div className="singel-makelike mt-20">
                                 <div className="image">
                                     <img src={Y1} alt="Image"/>
                                 </div>
                                 <div className="cont">
                                     <a href="#"><h4>Basic accounting from primary</h4></a>
                                     <ul>
                                         <li><a href="#"><i className="fa fa-user"></i>31</a></li>
                                         <li>$50</li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div className="row">
             <div className="col-lg-8">
                 <div className="releted-courses pt-95">
                     <div className="title">
                         <h3>Releted Courses</h3>
                     </div>
                     <div className="row">
                         <div className="col-md-6">
                             <div className="singel-course mt-30">
                                 <div className="thum">
                                     <div className="image">
                                         <img src={Cu2} alt="Course"/>
                                     </div>
                                     <div className="price">
                                         <span>Free</span>
                                     </div>
                                 </div>
                                 <div className="cont">
                                     <ul>
                                         <li><i className="fa fa-star"></i></li>
                                         <li><i className="fa fa-star"></i></li>
                                         <li><i className="fa fa-star"></i></li>
                                         <li><i className="fa fa-star"></i></li>
                                         <li><i className="fa fa-star"></i></li>
                                     </ul>
                                     <span>(20 Reviws)</span>
                                     <a href="courses-singel.html"><h4>Learn basis javascirpt from start for beginner</h4></a>
                                     <div className="course-teacher">
                                         <div className="thum">
                                             <a href="#"><img src={T1} alt="teacher"/></a>
                                         </div>
                                         <div className="name">
                                             <a href="#"><h6>Mark anthem</h6></a>
                                         </div>
                                         <div className="admin">
                                             <ul>
                                                 <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                                 <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
                                             </ul>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-6">
                             <div className="singel-course mt-30">
                                 <div className="thum">
                                     <div className="image">
                                         <img src={Cu1} alt="Course"/>
                                     </div>
                                     <div className="price">
                                         <span>Free</span>
                                     </div>
                                 </div>
                                 <div className="cont">
                                     <ul>
                                         <li><i className="fa fa-star"></i></li>
                                         <li><i className="fa fa-star"></i></li>
                                         <li><i className="fa fa-star"></i></li>
                                         <li><i className="fa fa-star"></i></li>
                                         <li><i className="fa fa-star"></i></li>
                                     </ul>
                                     <span>(20 Reviws)</span>
                                     <a href="courses-singel.html"><h4>Learn basis javascirpt from start for beginner</h4></a>
                                     <div className="course-teacher">
                                         <div className="thum">
                                             <a href="#"><img src={T2} alt="teacher"/></a>
                                         </div>
                                         <div className="name">
                                             <a href="#"><h6>Mark anthem</h6></a>
                                         </div>
                                         <div className="admin">
                                             <ul>
                                                 <li><a href="#"><i className="fa fa-user"></i><span>31</span></a></li>
                                                 <li><a href="#"><i className="fa fa-heart"></i><span>10</span></a></li>
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
 </section>
  );
}

export default CourseSingel;
