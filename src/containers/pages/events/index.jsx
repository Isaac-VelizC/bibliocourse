import { Link } from "react-router-dom";
import EventData from "services/events";

function EventsPage() {
  return (
    <section id="event-page" class="pt-90 pb-120 gray-bg">
      <div class="container">
        <div class="row">
          {EventData.map((data) => (
            <div key={data.id} class="col-lg-6">
              <div class="singel-event-list mt-30">
                <div class="event-thum">
                  <img src={data.img} alt="Event" />
                </div>
                <div class="event-cont">
                  <span>
                    <i class="fa fa-calendar"></i> {data.date}
                  </span>
                  <Link to={`/event-single/${data.id}`}>
                    <h4>{data.name}</h4>
                  </Link>
                  <span>
                    <i class="fa fa-clock-o"></i> {data.time}
                  </span>
                  <span>
                    <i class="fa fa-map-marker"></i> Rc {data.location}
                  </span>
                  <p>{data.text}</p>
                </div>
              </div>
            </div>
          ))}
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

export default EventsPage;
