import { Link } from "react-router-dom";
import BooksDataModule from "services/books";

function ShopPage() {
  const { BooksData, BooksDataList } = BooksDataModule;
  return (
    <section id="shop-page" class="pt-120 pb-120 gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="shop-top-search">
              <div class="shop-bar">
                <ul class="nav" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="active"
                      id="shop-grid-tab"
                      data-toggle="tab"
                      href="#shop-grid"
                      role="tab"
                      aria-controls="shop-grid"
                      aria-selected="true"
                    >
                      <i class="fa fa-th-large"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      id="shop-list-tab"
                      data-toggle="tab"
                      href="#shop-list"
                      role="tab"
                      aria-controls="shop-list"
                      aria-selected="false"
                    >
                      <i class="fa fa-th-list"></i>
                    </a>
                  </li>
                  <li class="nav-item">Showning 4 0f 24 Results</li>
                </ul>
              </div>
              <div class="shop-select">
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
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="shop-grid"
            role="tabpanel"
            aria-labelledby="shop-grid-tab"
          >
            <div class="row justify-content-center">
              {BooksDataList.map((book) => (
                <div key={book.id} class="col-lg-3 col-md-6 col-sm-8">
                  <div class="singel-publication mt-30">
                    <div class="image">
                      <img src={book.img} alt="Publication" />
                      <div class="add-cart">
                        <ul>
                          <li>
                            <a href="#">
                              <i class="fa fa-shopping-cart"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-heart-o"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="cont">
                      <div class="name">
                        <Link to={`/shop-single/${book.id}`}>
                          <h6>{book.title}</h6>
                        </Link>
                        <span>{book.price}.00</span>
                      </div>
                      <div class="button text-right">
                        <a href="#" class="main-btn">
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
            class="tab-pane fade"
            id="shop-list"
            role="tabpanel"
            aria-labelledby="shop-list-tab"
          >
            <div class="row">
              {BooksData.map((book) => (
                <div key={book.id} class="col-lg-6">
                  <div class="singel-publication mt-30">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="image">
                          <img src={book.img} alt="Publication" />
                          <div class="add-cart">
                            <ul>
                              <li>
                                <a href="#">
                                  <i class="fa fa-shopping-cart"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fa fa-heart-o"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="cont">
                          <div class="name">
                            <a href="shop-singel.html">
                              <h6>Set for life </h6>
                            </a>
                            <span>$50.00</span>
                          </div>
                          <div class="description pt-10">
                            <p>
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley.
                            </p>
                          </div>
                          <div class="button">
                            <a href="#" class="main-btn">
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

export default ShopPage;
