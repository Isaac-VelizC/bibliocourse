import { Link } from "react-router-dom";
import BooksDataModule from "services/books";

function ShopPage() {
  const { BooksData, BooksDataList } = BooksDataModule;
  return (
    <section id="shop-page" className="pt-120 pb-120 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="shop-top-search">
              <div className="shop-bar">
                <ul className="nav" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="active"
                      id="shop-grid-tab"
                      data-toggle="tab"
                      href="#shop-grid"
                      role="tab"
                      aria-controls="shop-grid"
                      aria-selected="true"
                    >
                      <i className="fa fa-th-large"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      id="shop-list-tab"
                      data-toggle="tab"
                      href="#shop-list"
                      role="tab"
                      aria-controls="shop-list"
                      aria-selected="false"
                    >
                      <i className="fa fa-th-list"></i>
                    </a>
                  </li>
                  <li className="nav-item">Showning 4 0f 24 Results</li>
                </ul>
              </div>
              <div className="shop-select">
                <select>
                  <option value="1">Sort by</option>
                  <option value="1">Sort by 01</option>
                  <option value="2">Sort by 02</option>
                  <option value="3">Sort by 03</option>
                  <option value="4">Sort by 04</option>
                  <option value="5">Sort by 05</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="shop-grid"
            role="tabpanel"
            aria-labelledby="shop-grid-tab"
          >
            <div className="row justify-content-center">
              {BooksDataList.map((book) => (
                <div key={book.id} className="col-lg-3 col-md-6 col-sm-8">
                  <div className="singel-publication mt-30">
                    <div className="image">
                      <img src={book.img} alt="Publication" />
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
                        <Link to={`/shop-single/${book.id}`}>
                          <h6>{book.title}</h6>
                        </Link>
                        <span>{book.price}.00</span>
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
          <div
            className="tab-pane fade"
            id="shop-list"
            role="tabpanel"
            aria-labelledby="shop-list-tab"
          >
            <div className="row">
              {BooksData.map((book) => (
                <div key={book.id} className="col-lg-6">
                  <div className="singel-publication mt-30">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="image">
                          <img src={book.img} alt="Publication" />
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
                      </div>
                      <div className="col-sm-6">
                        <div className="cont">
                          <div className="name">
                            <a href="shop-singel.html">
                              <h6>Set for life </h6>
                            </a>
                            <span>$50.00</span>
                          </div>
                          <div className="description pt-10">
                            <p>
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley.
                            </p>
                          </div>
                          <div className="button">
                            <a href="#" className="main-btn">
                              Buy Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

export default ShopPage;
