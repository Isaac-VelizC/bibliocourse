import T1 from "assets/images/teachers/t-1.jpg";
import T2 from "assets/images/teachers/t-2.jpg";
import T3 from "assets/images/teachers/t-3.jpg";
import T4 from "assets/images/teachers/t-4.jpg";
import T5 from "assets/images/teachers/t-5.jpg";
import T6 from "assets/images/teachers/t-6.jpg";
import T7 from "assets/images/teachers/t-7.jpg";
import T8 from "assets/images/teachers/t-8.jpg";

function TeachersPage() {
    return (
        <section id="teachers-page" class="pt-90 pb-120 gray-bg">
        <div class="container">
           <div class="row">
               <div class="col-lg-3 col-sm-6">
                   <div class="singel-teachers mt-30 text-center">
                        <div class="image">
                            <img src={T1} alt="Teachers"/>
                        </div>
                        <div class="cont">
                            <a href="#"><h6>MarkMark alen</h6></a>
                            <span>Vice chencelor</span>
                        </div>
                    </div>
               </div>
               <div class="col-lg-3 col-sm-6">
                   <div class="singel-teachers mt-30 text-center">
                        <div class="image">
                            <img src={T2} alt="Teachers"/>
                        </div>
                        <div class="cont">
                            <a href="teachers-singel.html"><h6>David card </h6></a>
                            <span>Pro chencelor</span>
                        </div>
                    </div>
               </div>
               <div class="col-lg-3 col-sm-6">
                   <div class="singel-teachers mt-30 text-center">
                        <div class="image">
                            <img src={T3} alt="Teachers"/>
                        </div>
                        <div class="cont">
                            <a href="teachers-singel.html"><h6>Rebeka alig</h6></a>
                            <span>Pro chencelor</span>
                        </div>
                    </div>
               </div>
               <div class="col-lg-3 col-sm-6">
                   <div class="singel-teachers mt-30 text-center">
                        <div class="image">
                            <img src={T4} alt="Teachers"/>
                        </div>
                        <div class="cont">
                            <a href="teachers-singel.html"><h6>Hanna bein</h6></a>
                            <span>Aerobics head</span>
                        </div>
                    </div>
               </div>
               <div class="col-lg-3 col-sm-6">
                   <div class="singel-teachers mt-30 text-center">
                        <div class="image">
                            <img src={T5} alt="Teachers"/>
                        </div>
                        <div class="cont">
                            <a href="teachers-singel.html"><h6>David card </h6></a>
                            <span>Pro chencelor</span>
                        </div>
                    </div>
               </div>
               <div class="col-lg-3 col-sm-6">
                   <div class="singel-teachers mt-30 text-center">
                        <div class="image">
                            <img src={T6} alt="Teachers"/>
                        </div>
                        <div class="cont">
                            <a href="teachers-singel.html"><h6>Mark alen</h6></a>
                            <span>Vice chencelor</span>
                        </div>
                    </div>
               </div>
               <div class="col-lg-3 col-sm-6">
                   <div class="singel-teachers mt-30 text-center">
                        <div class="image">
                            <img src={T7} alt="Teachers"/>
                        </div>
                        <div class="cont">
                            <a href="teachers-singel.html"><h6>Rebeka alig</h6></a>
                            <span>Pro chencelor</span>
                        </div>
                    </div>
               </div>
               <div class="col-lg-3 col-sm-6">
                   <div class="singel-teachers mt-30 text-center">
                        <div class="image">
                            <img src={T8} alt="Teachers"/>
                        </div>
                        <div class="cont">
                            <a href="teachers-singel.html"><h6>Hanna bein</h6></a>
                            <span>Aerobics head</span>
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
                            <li class="page-item"><a class="active" href="#">1</a></li>
                            <li class="page-item"><a href="#">2</a></li>
                            <li class="page-item"><a href="#">3</a></li>
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
    )
}

export default TeachersPage;