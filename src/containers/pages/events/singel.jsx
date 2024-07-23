import { useParams } from "react-router-dom";
import EventData from "services/events";
import Coundown from "assets/images/event/singel-event/coundown.jpg";

function SingelEvent() {
  const { id } = useParams(); // Obtén el ID del curso de la URL
  const event = EventData.find((event) => event.id === parseInt(id));

  if (!event) {
    return <div>event not found</div>;
  }

  return (
    <section id="event-singel" class="pt-120 pb-120 gray-bg">
      <div class="container">
        <div class="events-area">
          <div class="row">
            <div class="col-lg-8">
              <div class="events-left">
                <h3>{event.name}</h3>
                <a href="#">
                  <span>
                    <i class="fa fa-calendar"></i> {event.date}
                  </span>
                </a>
                <a href="#">
                  <span>
                    <i class="fa fa-clock-o"></i> {event.time}
                  </span>
                </a>
                <a href="#">
                  <span>
                    <i class="fa fa-map-marker"></i> Rc {event.location}
                  </span>
                </a>
                <img src={event.img} alt="Event" />
                <p>{event.text}</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="events-right">
                <div
                  class="events-coundwon bg_cover"
                  data-overlay="8"
                  style={{backgroundImage: `url(${Coundown})`}}
                >
                  <div data-countdown="2020/03/12"></div>
                  <div class="events-coundwon-btn pt-30">
                    <a href="#" class="main-btn">
                      Book Your Seat
                    </a>
                  </div>
                </div>
                <div class="events-address mt-30">
                  <ul>
                    <li>
                      <div class="singel-address">
                        <div class="icon">
                          <i class="fa fa-clock-o"></i>
                        </div>
                        <div class="cont">
                          <h6>Start Time</h6>
                          <span>12:00 Am</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="singel-address">
                        <div class="icon">
                          <i class="fa fa-bell-slash"></i>
                        </div>
                        <div class="cont">
                          <h6>Finish Time</h6>
                          <span>05:00 Am</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="singel-address">
                        <div class="icon">
                          <i class="fa fa-map"></i>
                        </div>
                        <div class="cont">
                          <h6>Address</h6>
                          <span>Street Park ,America</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div id="contact-map" class="mt-25"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingelEvent;
