import { Link } from "react-router-dom";
import PostsDataLists from "services/blogs";

function BlogPage() {
    const { PostsData, PostsDataNew } = PostsDataLists;
  return (
    <section id="blog-page" className="pt-90 pb-120 gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {PostsDataNew.map((post) => (
              <div key={post.id} className="singel-blog mt-30">
                <div className="blog-thum">
                  <img src={post.img} alt="Blog" />
                </div>
                <div className="blog-cont">
                  <Link to={`/blog-single/${post.id}`}>
                    <h3>{post.title}</h3>
                  </Link>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-calendar"></i>{post.date}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-user"></i>{post.user}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-tags"></i>{post.tags}
                      </a>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum gravida nibh vel velit auctor aliquetn
                    sollicitudirem quibibendum auci elit cons equat ipsutis sem
                    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                    sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus
                    .
                  </p>
                </div>
              </div>
            ))}
            <nav className="courses-pagination mt-50">
              <ul className="pagination justify-content-lg-end justify-content-center">
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
          <div className="col-lg-4">
            <div className="saidbar">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="saidbar-search mt-30">
                    <form action="#">
                      <input type="text" placeholder="Search" />
                      <button type="button">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <div className="categories mt-30">
                    <h4>Categories</h4>
                    <ul>
                      <li>
                        <a href="#">Fronted</a>
                      </li>
                      <li>
                        <a href="#">Backend</a>
                      </li>
                      <li>
                        <a href="#">Photography</a>
                      </li>
                      <li>
                        <a href="#">Teachnology</a>
                      </li>
                      <li>
                        <a href="#">GMET</a>
                      </li>
                      <li>
                        <a href="#">Language</a>
                      </li>
                      <li>
                        <a href="#">Science</a>
                      </li>
                      <li>
                        <a href="#">Accounting</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="saidbar-post mt-30">
                    <h4>Popular Posts</h4>
                    <ul>
                      {PostsData.map((post) => (
                        <li key={post.id}>
                          <Link to={`/blog-single/${post.id}`}>
                            <div className="singel-post">
                              <div className="thum">
                                <img src={post.img} alt="Blog" />
                              </div>
                              <div className="cont">
                                <h6>{post.title}</h6>
                                <span>{post.date}</span>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
