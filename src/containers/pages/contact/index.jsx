function ContactPage() {
  return (
    <>
      <section id="contact-page" class="pt-90 pb-120 gray-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="contact-from">
                <div class="section-title">
                  <h5>Contact Us</h5>
                  <h2>Keep in touch</h2>
                </div>
                <div class="main-form pt-45">
                  <form
                    id="contact-form"
                    action="#"
                    method="post"
                    data-toggle="validator"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <div class="singel-form form-group">
                          <input
                            name="name"
                            type="text"
                            placeholder="Your name"
                            data-error="Name is required."
                            required="required"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="singel-form form-group">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            data-error="Valid email is required."
                            required="required"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="singel-form form-group">
                          <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            data-error="Subject is required."
                            required="required"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="singel-form form-group">
                          <input
                            name="phone"
                            type="text"
                            placeholder="Phone"
                            data-error="Phone is required."
                            required="required"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="singel-form form-group">
                          <textarea
                            name="messege"
                            placeholder="Messege"
                            data-error="Please,leave us a message."
                            required="required"
                          ></textarea>
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <p class="form-message"></p>
                      <div class="col-md-12">
                        <div class="singel-form">
                          <button type="submit" class="main-btn">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="contact-address">
                <div class="contact-heading">
                  <h5>Address</h5>
                  <p>
                    If you have any further questions, please don’t hesitate to
                    contact me.
                  </p>
                </div>
                <ul>
                  <li>
                    <div class="singel-address">
                      <div class="icon">
                        <i class="fa fa-home"></i>
                      </div>
                      <div class="cont">
                        <p>
                          143 castle road 517 district, kiyev port south Canada
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="singel-address">
                      <div class="icon">
                        <i class="fa fa-phone"></i>
                      </div>
                      <div class="cont">
                        <p>+3 123 456 789</p>
                        <p>+1 222 345 342</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="singel-address">
                      <div class="icon">
                        <i class="fa fa-envelope-o"></i>
                      </div>
                      <div class="cont">
                        <p>info@yourmail.com</p>
                        <p>info@yourmail.com</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="singel-address">
                      <div class="icon">
                        <i class="fa fa-globe"></i>
                      </div>
                      <div class="cont">
                        <p>www.yoursite.com</p>
                        <p>www.example.com</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="map map-big">
        <div id="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.741563498039!2d90.4573132152565!3d23.694182383512416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c747b918df6b%3A0x406c883717f9b640!2sCryptox!5e0!3m2!1sen!2sbd!4v1637319312846!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
