import { Link, useParams } from "react-router-dom";
import BooksDataModule from "services/books";
import R1 from "assets/images/review/r-1.jpg";
import R2 from "assets/images/review/r-2.jpg";

function SingelShop() {
  const { BooksData, BooksDataList } = BooksDataModule;
  const { id } = useParams(); // Obtén el ID del curso de la URL
  const book = BooksDataList.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>book not found</div>;
  }

  return (
    <section id="shop-singel" className="pt-120 pb-120 gray-bg">
      <div className="container">
        <div className="shop-destails">
          <div className="row">
            <div className="col-lg-6">
              <div className="shop-left pt-30">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-image-1"
                    role="tabpanel"
                    aria-labelledby="pills-image-1-tab"
                  >
                    <div className="shop-image">
                      <a href={book.img} className="shop-items">
                        <img src={book.img} alt="Shop" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-image-2"
                    role="tabpanel"
                    aria-labelledby="pills-image-2-tab"
                  >
                    <div className="shop-image">
                      <a href="images/shop-singel/ss-2.jpg" className="shop-items">
                        <img src="images/shop-singel/ss-2.jpg" alt="Shop" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-image-3"
                    role="tabpanel"
                    aria-labelledby="pills-image-3-tab"
                  >
                    <div className="shop-image">
                      <a href="images/shop-singel/ss-3.jpg" className="shop-items">
                        <img src="images/shop-singel/ss-3.jpg" alt="Shop" />
                      </a>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-image-4"
                    role="tabpanel"
                    aria-labelledby="pills-image-4-tab"
                  >
                    <div className="shop-image">
                      <a href="images/shop-singel/ss-1.jpg" className="shop-items">
                        <img src="images/shop-singel/ss-1.jpg" alt="Shop" />
                      </a>
                    </div>
                  </div>
                </div>
                <ul
                  className="nav nav-justified mt-30"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="active"
                      id="pills-image-1-tab"
                      data-toggle="pill"
                      href="#pills-image-1"
                      role="tab"
                      aria-controls="pills-image-1"
                      aria-selected="true"
                    >
                      <span className="shop-thum">
                        <img src="images/shop-singel/ss-s1.jpg" alt="Thum" />
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      id="pills-image-2-tab"
                      data-toggle="pill"
                      href="#pills-image-2"
                      role="tab"
                      aria-controls="pills-image-2"
                      aria-selected="false"
                    >
                      <span className="shop-thum">
                        <img src="images/shop-singel/ss-s2.jpg" alt="Thum" />
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      id="pills-image-3-tab"
                      data-toggle="pill"
                      href="#pills-image-3"
                      role="tab"
                      aria-controls="pills-image-1"
                      aria-selected="false"
                    >
                      <span className="shop-thum">
                        <img src="images/shop-singel/ss-s3.jpg" alt="Thum" />
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      id="pills-image-4-tab"
                      data-toggle="pill"
                      href="#pills-image-4"
                      role="tab"
                      aria-controls="pills-image-4"
                      aria-selected="false"
                    >
                      <span className="shop-thum">
                        <img src="images/shop-singel/ss-s1.jpg" alt="Thum" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shop-right pt-30">
                <h6>{book.title} </h6>
                <span>{book.price}</span>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
                <div className="nice-number pt-15">
                  <input type="number" value="1" />
                </div>
                <div className="add-btn pt-15">
                  <button type="button" className="main-btn">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shop-reviews mt-60">
                <ul className="nav" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="active"
                      id="description-tab"
                      data-toggle="tab"
                      href="#description"
                      role="tab"
                      aria-controls="description"
                      aria-selected="true"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      id="reviews-tab"
                      data-toggle="tab"
                      href="#reviews"
                      role="tab"
                      aria-controls="reviews"
                      aria-selected="false"
                    >
                      Reviews
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                    aria-labelledby="description-tab"
                  >
                    <div className="description-cont pt-40">
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Vestibulum tortor
                        quam, feugiat vitae, ultricies eget, tempor sit amet,
                        ante. Donec eu libero sit amet quam egestas semper.
                        Aenean ultricies mi vitae est. Mauris placerat eleifend
                        leo.
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="reviews"
                    role="tabpanel"
                    aria-labelledby="reviews-tab"
                  >
                    <div className="reviews-cont">
                      <ul>
                        <li>
                          <div className="singel-reviews">
                            <div className="reviews-author">
                              <div className="author-thum">
                                <img
                                  src={R1}
                                  alt="Reviews"
                                />
                              </div>
                              <div className="author-name">
                                <h6>Bobby Aktar</h6>
                                <span>April 03, 2019</span>
                              </div>
                            </div>
                            <div className="reviews-description pt-20">
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which.
                              </p>
                              <div className="rating">
                                <ul>
                                  <li>
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa fa-star"></i>
                                  </li>
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
                                <img
                                  src={R2}
                                  alt="Reviews"
                                />
                              </div>
                              <div className="author-name">
                                <h6>Humayun Ahmed</h6>
                                <span>April 13, 2019</span>
                              </div>
                            </div>
                            <div className="reviews-description pt-20">
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which.
                              </p>
                              <div className="rating">
                                <ul>
                                  <li>
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fa fa-star"></i>
                                  </li>
                                </ul>
                                <span>/ 5 Star</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="reviews-form">
                        <form action="#">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-singel">
                                <input type="text" placeholder="Fast name" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-singel">
                                <input type="text" placeholder="Last Name" />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-singel">
                                <div className="rate-wrapper">
                                  <div className="rate-label">Your Rating:</div>
                                  <div className="rate">
                                    <div className="rate-item">
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                    <div className="rate-item">
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                    <div className="rate-item">
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                    <div className="rate-item">
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                    <div className="rate-item">
                                      <i
                                        className="fa fa-star"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
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
                                <button type="button" className="main-btn">
                                  Post Comment
                                </button>
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
        </div>
        <div className="releted-item pt-110">
          <div className="row">
            <div className="col-lg-12">
              <div className="title pb-10">
                <h3>Releted products</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {BooksData.map((data) => (
              <div key={data.id} className="col-lg-3 col-md-6 col-sm-8">
                <div className="singel-publication mt-30">
                  <div className="image">
                    <img src={data.img} alt="Publication" />
                    <div className="add-cart">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart-o"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="cont">
                    <div className="name">
                      <Link to={`/shop-single/${data.id}`}>
                        <h6>{data.title} </h6>
                      </Link>
                      <span>{data.price}</span>
                    </div>
                    <div className="button text-right">
                      <a href="#" className="main-btn">
                        Buy Now
                      </a>
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

export default SingelShop;
