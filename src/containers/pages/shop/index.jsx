import P1 from "assets/images/publication/p-1.jpg";
import P2 from "assets/images/publication/p-2.jpg";
import P3 from "assets/images/publication/p-3.jpg";
import P4 from "assets/images/publication/p-4.jpg";
import P5 from "assets/images/publication/p-5.jpg";
import P6 from "assets/images/publication/p-6.jpg";
import P7 from "assets/images/publication/p-7.jpg";
import P8 from "assets/images/publication/p-8.jpg";

function ShopPage() {
    return (
        <section id="shop-page" class="pt-120 pb-120 gray-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="shop-top-search">
                        <div class="shop-bar">
                            <ul class="nav" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="active" id="shop-grid-tab" data-toggle="tab" href="#shop-grid" role="tab" aria-controls="shop-grid" aria-selected="true"><i class="fa fa-th-large"></i></a>
                                </li>
                                <li class="nav-item">
                                    <a id="shop-list-tab" data-toggle="tab" href="#shop-list" role="tab" aria-controls="shop-list" aria-selected="false"><i class="fa fa-th-list"></i></a>
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
              <div class="tab-pane fade show active" id="shop-grid" role="tabpanel" aria-labelledby="shop-grid-tab">
                    <div class="row justify-content-center">
                        <div class="col-lg-3 col-md-6 col-sm-8">
                            <div class="singel-publication mt-30">
                                <div class="image">
                                    <img src={P1} alt="Publication"/>
                                    <div class="add-cart">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="cont">
                                    <div class="name">
                                        <a href="shop-singel.html"><h6>Magazine</h6></a>
                                        <span>$50.00</span>
                                    </div>
                                    <div class="button text-right">
                                        <a href="#" class="main-btn">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-8">
                            <div class="singel-publication mt-30">
                                <div class="image">
                                    <img src={P2} alt="Publication"/>
                                    <div class="add-cart">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="cont">
                                    <div class="name">
                                        <a href="shop-singel.html"><h6>Notebook </h6></a>
                                        <span>$50.00</span>
                                    </div>
                                    <div class="button text-right">
                                        <a href="#" class="main-btn">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-8">
                            <div class="singel-publication mt-30">
                                <div class="image">
                                    <img src={P3} alt="Publication"/>
                                    <div class="add-cart">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="cont">
                                    <div class="name">
                                        <a href="shop-singel.html"><h6>Staionary set </h6></a>
                                        <span>$50.00</span>
                                    </div>
                                    <div class="button text-right">
                                        <a href="#" class="main-btn">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-8">
                            <div class="singel-publication mt-30">
                                <div class="image">
                                    <img src={P4} alt="Publication"/>
                                    <div class="add-cart">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="cont">
                                    <div class="name">
                                        <a href="shop-singel.html"><h6>Set for life </h6></a>
                                        <span>$50.00</span>
                                    </div>
                                    <div class="button text-right">
                                        <a href="#" class="main-btn">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-8">
                            <div class="singel-publication mt-30">
                                <div class="image">
                                    <img src={P5} alt="Publication"/>
                                    <div class="add-cart">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="cont">
                                    <div class="name">
                                        <a href="shop-singel.html"><h6>Set for life </h6></a>
                                        <span>$50.00</span>
                                    </div>
                                    <div class="button text-right">
                                        <a href="#" class="main-btn">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-8">
                            <div class="singel-publication mt-30">
                                <div class="image">
                                    <img src={P6} alt="Publication"/>
                                    <div class="add-cart">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="cont">
                                    <div class="name">
                                        <a href="shop-singel.html"><h6>Set for life </h6></a>
                                        <span>$50.00</span>
                                    </div>
                                    <div class="button text-right">
                                        <a href="#" class="main-btn">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-8">
                            <div class="singel-publication mt-30">
                                <div class="image">
                                    <img src={P7} alt="Publication"/>
                                    <div class="add-cart">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="cont">
                                    <div class="name">
                                        <a href="shop-singel.html"><h6>Magazine </h6></a>
                                        <span>$50.00</span>
                                    </div>
                                    <div class="button text-right">
                                        <a href="#" class="main-btn">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-8">
                            <div class="singel-publication mt-30">
                                <div class="image">
                                    <img src={P8} alt="Publication"/>
                                    <div class="add-cart">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="cont">
                                    <div class="name">
                                        <a href="shop-singel.html"><h6>Set for life </h6></a>
                                        <span>$50.00</span>
                                    </div>
                                    <div class="button text-right">
                                        <a href="#" class="main-btn">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="shop-list" role="tabpanel" aria-labelledby="shop-list-tab">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="singel-publication mt-30">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="image">
                                            <img src={P1} alt="Publication"/>
                                            <div class="add-cart">
                                                <ul>
                                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="cont">
                                            <div class="name">
                                                <a href="shop-singel.html"><h6>Set for life </h6></a>
                                                <span>$50.00</span>
                                            </div>
                                            <div class="description pt-10">
                                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                            </div>
                                            <div class="button">
                                                <a href="#" class="main-btn">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="singel-publication mt-30">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="image">
                                            <img src={P2} alt="Publication"/>
                                            <div class="add-cart">
                                                <ul>
                                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="cont">
                                            <div class="name">
                                                <a href="shop-singel.html"><h6>Set for life </h6></a>
                                                <span>$50.00</span>
                                            </div>
                                            <div class="description pt-10">
                                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                            </div>
                                            <div class="button">
                                                <a href="#" class="main-btn">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="singel-publication mt-30">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="image">
                                            <img src={P3} alt="Publication"/>
                                            <div class="add-cart">
                                                <ul>
                                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="cont">
                                            <div class="name">
                                                <a href="shop-singel.html"><h6>Set for life </h6></a>
                                                <span>$50.00</span>
                                            </div>
                                            <div class="description pt-10">
                                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                            </div>
                                            <div class="button">
                                                <a href="#" class="main-btn">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="singel-publication mt-30">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="image">
                                            <img src={P4} alt="Publication"/>
                                            <div class="add-cart">
                                                <ul>
                                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="cont">
                                            <div class="name">
                                                <a href="shop-singel.html"><h6>Set for life </h6></a>
                                                <span>$50.00</span>
                                            </div>
                                            <div class="description pt-10">
                                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                            </div>
                                            <div class="button">
                                                <a href="#" class="main-btn">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default ShopPage;