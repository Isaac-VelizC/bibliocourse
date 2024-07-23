import { useParams } from "react-router-dom";
import PostsDataLists from "services/blogs";
import R1 from "assets/images/review/r-1.jpg";
import R2 from "assets/images/review/r-2.jpg";
import R3 from "assets/images/review/r-3.jpg";

function SingelPost() {
  const { PostsData, PostsDataNew } = PostsDataLists;
  const { id } = useParams(); // Obtén el ID del curso de la URL
  const post = PostsDataNew.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>post not found</div>;
  }

  return (
    <section id="blog-singel" class="pt-90 pb-120 gray-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="blog-details mt-30">
              <div class="thum">
                <img src={post.img} alt="Blog Details" />
              </div>
              <div class="cont">
                <h3>{post.title}</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-calendar"></i>25 Dec 2018
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-user"></i>Mark anthem
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-tags"></i>Education
                    </a>
                  </li>
                </ul>
                <p>
                  Lorem ipsum gravida nibh vel velit auctor aliquetn
                  sollicitudirem quibibendum auci elit cons equat ipsutis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus .
                  <br />
                  <br />
                  gravida nibh vel velit auctor aliquetn sollicitudirem
                  quibibendum auci elit cons equat ipsutis sem nibh id elit.
                  Duis sed odio sit amet nibh vulputate cursus a sit amet
                  mauris. Morbi accumsan ipsum velit. Nam nec tellus .
                  <br />
                  <br />
                  gravida nibh vel velit auctor aliquetn sollicitudirem
                  quibibendum auci elit cons equat ipsutis sem nibh id elit.
                  Duis sed odio sit amet nibh vulputate cursus a sit amet
                  mauris. Morbi accumsan ipsum velit. Nam nec tellus .
                </p>
                <ul class="share">
                  <li class="title">Share :</li>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
                <div class="blog-comment pt-45">
                  <div class="title pb-15">
                    <h3>Comment (3)</h3>
                  </div>
                  <ul>
                    <li>
                      <div class="comment">
                        <div class="comment-author">
                          <div class="author-thum">
                            <img src={R1} alt="Reviews" />
                          </div>
                          <div class="comment-name">
                            <h6>Bobby Aktar</h6>
                            <span>April 03, 2019</span>
                          </div>
                        </div>
                        <div class="comment-description pt-20">
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which.
                          </p>
                        </div>
                        <div class="comment-replay">
                          <a href="#">Reply</a>
                        </div>
                      </div>
                      <ul class="replay">
                        <li>
                          <div class="comment">
                            <div class="comment-author">
                              <div class="author-thum">
                                <img
                                  src={R2}
                                  alt="Reviews"
                                />
                              </div>
                              <div class="comment-name">
                                <h6>Humayun Ahmed</h6>
                                <span>April 03, 2019</span>
                              </div>
                            </div>
                            <div class="comment-description pt-20">
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form.
                              </p>
                            </div>
                            <div class="comment-replay">
                              <a href="#">Reply</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div class="comment">
                        <div class="comment-author">
                          <div class="author-thum">
                            <img src={R3} alt="Reviews" />
                          </div>
                          <div class="comment-name">
                            <h6>Bobby Aktar</h6>
                            <span>April 03, 2019</span>
                          </div>
                        </div>
                        <div class="comment-description pt-20">
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which.
                          </p>
                        </div>
                        <div class="comment-replay">
                          <a href="#">Reply</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="title pt-45 pb-25">
                    <h3>Leave a comment</h3>
                  </div>
                  <div class="comment-form">
                    <form action="#">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-singel">
                            <input type="text" placeholder="Name" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-singel">
                            <input type="email" placeholder="email" />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-singel">
                            <textarea placeholder="Comment"></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-singel">
                            <button class="main-btn">Submit</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
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
                          <a href="#">
                            <div class="singel-post">
                              <div class="thum">
                                <img src={post.img} alt="Blog" />
                              </div>
                              <div class="cont">
                                <h6>{post.title}</h6>
                                <span>{post.date}</span>
                              </div>
                            </div>
                          </a>
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

export default SingelPost;
