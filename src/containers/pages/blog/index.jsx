import { Link } from "react-router-dom";
import PostsDataLists from "services/blogs";

function BlogPage() {
    const { PostsData, PostsDataNew } = PostsDataLists;
  return (
    <section id="blog-page" class="pt-90 pb-120 gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            {PostsDataNew.map((post) => (
              <div key={post.id} class="singel-blog mt-30">
                <div class="blog-thum">
                  <img src={post.img} alt="Blog" />
                </div>
                <div class="blog-cont">
                  <Link to={`/blog-single/${post.id}`}>
                    <h3>{post.title}</h3>
                  </Link>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa fa-calendar"></i>{post.date}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-user"></i>{post.user}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-tags"></i>{post.tags}
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
            <nav class="courses-pagination mt-50">
              <ul class="pagination justify-content-lg-end justify-content-center">
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
          <div class="col-lg-4">
            <div class="saidbar">
              <div class="row">
                <div class="col-lg-12 col-md-6">
                  <div class="saidbar-search mt-30">
                    <form action="#">
                      <input type="text" placeholder="Search" />
                      <button type="button">
                        <i class="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <div class="categories mt-30">
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
                <div class="col-lg-12 col-md-6">
                  <div class="saidbar-post mt-30">
                    <h4>Popular Posts</h4>
                    <ul>
                      {PostsData.map((post) => (
                        <li key={post.id}>
                          <Link to={`/blog-single/${post.id}`}>
                            <div class="singel-post">
                              <div class="thum">
                                <img src={post.img} alt="Blog" />
                              </div>
                              <div class="cont">
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
