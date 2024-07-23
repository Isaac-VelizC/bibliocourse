import N1 from "assets/images/news/n-1.jpg";
import NewsData from "services/news";

function News() {
  return (
    <section id="news-part" className="pt-115 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-50">
              <h5>Latest News</h5>
              <h2>From the news</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="singel-news mt-30">
              <div className="news-thum pb-25">
                <img src={N1} alt="News" />
              </div>
              <div className="news-cont">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-calendar"></i>2 December 2018{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span>By</span> Adam linn
                    </a>
                  </li>
                </ul>
                <a href="blog-singel.html">
                  <h3>Tips to grade high cgpa in university life</h3>
                </a>
                <p>
                  Lorem ipsum gravida nibh vel velit auctor aliquetn
                  sollicitudirem quibibendum auci elit cons equat ipsutis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a
                  odio tincidunt .
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {NewsData.map((data) => (
              <div key={data.id} className="singel-news news-list">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="news-thum mt-30">
                      <img src={data.img} alt="News" />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="news-cont mt-30">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-calendar"></i>{data.date}{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <span>By</span> {data.author}
                          </a>
                        </li>
                      </ul>
                      <a href="blog-singel.html">
                        <h3>{data.title}</h3>
                      </a>
                      <p>{data.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
