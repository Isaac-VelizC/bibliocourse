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
        <section id="teachers-page" className="pt-90 pb-120 gray-bg">
        <div className="container">
           <div className="row">
               <div className="col-lg-3 col-sm-6">
                   <div className="singel-teachers mt-30 text-center">
                        <div className="image">
                            <img src={T1} alt="Teachers"/>
                        </div>
                        <div className="cont">
                            <a href="#"><h6>MarkMark alen</h6></a>
                            <span>Vice chencelor</span>
                        </div>
                    </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                   <div className="singel-teachers mt-30 text-center">
                        <div className="image">
                            <img src={T2} alt="Teachers"/>
                        </div>
                        <div className="cont">
                            <a href="teachers-singel.html"><h6>David card </h6></a>
                            <span>Pro chencelor</span>
                        </div>
                    </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                   <div className="singel-teachers mt-30 text-center">
                        <div className="image">
                            <img src={T3} alt="Teachers"/>
                        </div>
                        <div className="cont">
                            <a href="teachers-singel.html"><h6>Rebeka alig</h6></a>
                            <span>Pro chencelor</span>
                        </div>
                    </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                   <div className="singel-teachers mt-30 text-center">
                        <div className="image">
                            <img src={T4} alt="Teachers"/>
                        </div>
                        <div className="cont">
                            <a href="teachers-singel.html"><h6>Hanna bein</h6></a>
                            <span>Aerobics head</span>
                        </div>
                    </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                   <div className="singel-teachers mt-30 text-center">
                        <div className="image">
                            <img src={T5} alt="Teachers"/>
                        </div>
                        <div className="cont">
                            <a href="teachers-singel.html"><h6>David card </h6></a>
                            <span>Pro chencelor</span>
                        </div>
                    </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                   <div className="singel-teachers mt-30 text-center">
                        <div className="image">
                            <img src={T6} alt="Teachers"/>
                        </div>
                        <div className="cont">
                            <a href="teachers-singel.html"><h6>Mark alen</h6></a>
                            <span>Vice chencelor</span>
                        </div>
                    </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                   <div className="singel-teachers mt-30 text-center">
                        <div className="image">
                            <img src={T7} alt="Teachers"/>
                        </div>
                        <div className="cont">
                            <a href="teachers-singel.html"><h6>Rebeka alig</h6></a>
                            <span>Pro chencelor</span>
                        </div>
                    </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                   <div className="singel-teachers mt-30 text-center">
                        <div className="image">
                            <img src={T8} alt="Teachers"/>
                        </div>
                        <div className="cont">
                            <a href="teachers-singel.html"><h6>Hanna bein</h6></a>
                            <span>Aerobics head</span>
                        </div>
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
                            <li className="page-item"><a className="active" href="#">1</a></li>
                            <li className="page-item"><a href="#">2</a></li>
                            <li className="page-item"><a href="#">3</a></li>
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
    )
}

export default TeachersPage;