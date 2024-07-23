import { Link } from "react-router-dom";
import EventData from "services/events";

function EventsPage() {
  return (
    <section id="event-page" className="pt-90 pb-120 gray-bg">
      <div className="container">
        <div className="row">
          {EventData.map((data) => (
            <div key={data.id} className="col-lg-6">
              <div className="singel-event-list mt-30">
                <div className="event-thum">
                  <img src={data.img} alt="Event" />
                </div>
                <div className="event-cont">
                  <span>
                    <i className="fa fa-calendar"></i> {data.date}
                  </span>
                  <Link to={`/event-single/${data.id}`}>
                    <h4>{data.name}</h4>
                  </Link>
                  <span>
                    <i className="fa fa-clock-o"></i> {data.time}
                  </span>
                  <span>
                    <i className="fa fa-map-marker"></i> Rc {data.location}
                  </span>
                  <p>{data.text}</p>
                </div>
              </div>
            </div>
          ))}
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

export default EventsPage;
