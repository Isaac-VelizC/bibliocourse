import E1 from 'assets/images/event/e-1.jpg';
import E2 from 'assets/images/event/e-2.jpg';
import E3 from 'assets/images/event/e-3.jpg';
import E4 from 'assets/images/event/e-4.jpg';

function EventsPage() {
    return (
        <section id="event-page" class="pt-90 pb-120 gray-bg">
        <div class="container">
           <div class="row">
               <div class="col-lg-6">
                   <div class="singel-event-list mt-30">
                       <div class="event-thum">
                           <img src={E1} alt="Event"/>
                       </div>
                       <div class="event-cont">
                           <span><i class="fa fa-calendar"></i> 2 December 2018</span>
                            <a href="events-singel.html"><h4>Tech Summit</h4></a>
                            <span><i class="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                            <span><i class="fa fa-map-marker"></i> Rc Auditorim</span>
                            <p>Nam nec tellus a odio tincidunt auctor a ornare odionon mauris itae erat conuat</p>
                       </div>
                   </div>
               </div>
               <div class="col-lg-6">
                   <div class="singel-event-list mt-30">
                       <div class="event-thum">
                           <img src={E2} alt="Event"/>
                       </div>
                       <div class="event-cont">
                           <span><i class="fa fa-calendar"></i> 2 December 2018</span>
                            <a href="events-singel.html"><h4>Tech Summit</h4></a>
                            <span><i class="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                            <span><i class="fa fa-map-marker"></i> Rc Auditorim</span>
                            <p>Nam nec tellus a odio tincidunt auctor a ornare odionon mauris itae erat conuat</p>
                       </div>
                   </div>
               </div>
               <div class="col-lg-6">
                   <div class="singel-event-list mt-30">
                       <div class="event-thum">
                           <img src={E3} alt="Event"/>
                       </div>
                       <div class="event-cont">
                           <span><i class="fa fa-calendar"></i> 2 December 2018</span>
                            <a href="events-singel.html"><h4>Tech Summit</h4></a>
                            <span><i class="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                            <span><i class="fa fa-map-marker"></i> Rc Auditorim</span>
                            <p>Nam nec tellus a odio tincidunt auctor a ornare odionon mauris itae erat conuat</p>
                       </div>
                   </div>
               </div>
               <div class="col-lg-6">
                   <div class="singel-event-list mt-30">
                       <div class="event-thum">
                           <img src={E4} alt="Event"/>
                       </div>
                       <div class="event-cont">
                           <span><i class="fa fa-calendar"></i> 2 December 2018</span>
                            <a href="events-singel.html"><h4>Tech Summit</h4></a>
                            <span><i class="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                            <span><i class="fa fa-map-marker"></i> Rc Auditorim</span>
                            <p>Nam nec tellus a odio tincidunt auctor a ornare odionon mauris itae erat conuat</p>
                       </div>
                   </div>
               </div>
               <div class="col-lg-6">
                   <div class="singel-event-list mt-30">
                       <div class="event-thum">
                           <img src={E1} alt="Event"/>
                       </div>
                       <div class="event-cont">
                           <span><i class="fa fa-calendar"></i> 2 December 2018</span>
                            <a href="events-singel.html"><h4>Tech Summit</h4></a>
                            <span><i class="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                            <span><i class="fa fa-map-marker"></i> Rc Auditorim</span>
                            <p>Nam nec tellus a odio tincidunt auctor a ornare odionon mauris itae erat conuat</p>
                       </div>
                   </div>
               </div>
               <div class="col-lg-6">
                   <div class="singel-event-list mt-30">
                       <div class="event-thum">
                           <img src={E2} alt="Event"/>
                       </div>
                       <div class="event-cont">
                           <span><i class="fa fa-calendar"></i> 2 December 2018</span>
                            <a href="events-singel.html"><h4>Tech Summit</h4></a>
                            <span><i class="fa fa-clock-o"></i> 10:00 Am - 3:00 Pm</span>
                            <span><i class="fa fa-map-marker"></i> Rc Auditorim</span>
                            <p>Nam nec tellus a odio tincidunt auctor a ornare odionon mauris itae erat conuat</p>
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

export default EventsPage;