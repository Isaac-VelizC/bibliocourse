import { Link } from "react-router-dom";
import BooksDataModule from "services/books";

function Books() {
  const {BooksData} = BooksDataModule;
  return (
    <section id="publication-part" className="pt-115 pb-120 gray-bg">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6 col-md-8 col-sm-7">
            <div className="section-title pb-60">
              <h5>Publications</h5>
              <h2>From Store </h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-5">
            <div className="products-btn text-right pb-60">
              <a href="#" className="main-btn">
                All Products
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {BooksData.map((book) => (
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
                      <h6>{book.title} </h6>
                    </Link>
                    <span>By {book.author}</span>
                  </div>
                  <div className="button text-right">
                    <a href="#" className="main-btn">
                      Buy Now ({book.price})
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Books;
