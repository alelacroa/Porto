import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FaRegComments, FaCalendarAlt } from "react-icons/fa";
import Swiper from "react-id-swiper";

const BlogPostGridWrapper = ({ columns }) => {
  const params = {
    loop: false,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  };
  return (
    <Row>
      <Col xl={columns && columns == 4 ? 3 : 4} md={6}>
        <div className="blog-post">
          <div className="blog-post__image">
            <Link href="/entregas/post-left-sidebar">
              <a>
                <img
                  src="/assets/images/blog/blog_small_img1.jpg"
                  alt="blog_small_img1"
                />
              </a>
            </Link>
          </div>
          <div className="blog-post__content">
            <div className="blog-text">
              <ul className="blog-meta">
                <li>
                  <Link href="/entregas/post-left-sidebar">
                    <a>
                      <FaCalendarAlt /> April 14, 2021
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={columns && columns == 4 ? 3 : 4} md={6}>
        <div className="blog-post">
          <div className="blog-post__image">
            <Link href="/entregas/post-left-sidebar">
              <a>
                <img
                  src="/assets/images/blog/blog_small_img2.jpg"
                  alt="blog_small_img1"
                />
              </a>
            </Link>
          </div>
          <div className="blog-post__content">
            <div className="blog-text">
              <ul className="blog-meta">
                <li>
                  <Link href="/entregas/post-left-sidebar">
                    <a>
                      <FaCalendarAlt /> April 14, 2021
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={columns && columns == 4 ? 3 : 4} md={6}>
        <div className="blog-post">
          <div className="blog-post__image">
            <Link href="/entregas/post-left-sidebar">
              <a>
                <img
                  src="/assets/images/blog/blog_small_img3.jpg"
                  alt="blog_small_img1"
                />
              </a>
            </Link>
          </div>
          <div className="blog-post__content">
            <div className="blog-text">
              <ul className="blog-meta">
                <li>
                  <Link href="/entregas/post-left-sidebar">
                    <a>
                      <FaCalendarAlt /> April 14, 2021
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={columns && columns == 4 ? 3 : 4} md={6}>
        <div className="blog-post">
          <div className="blog-post__image">
            <div className="fit-videos">
              <div className="fluid-width-video-wrapper">
                <iframe
                  src="https://player.vimeo.com/video/132464682?byline=0&portrait=0"
                  width="540"
                  height="360"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="blog-post__content">
            <div className="blog-text">
              <ul className="blog-meta">
                <li>
                  <Link href="/entregas/post-left-sidebar">
                    <a>
                      <FaCalendarAlt /> April 14, 2021
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={columns && columns == 4 ? 3 : 4} md={6}>
        <div className="blog-post">
          <div className="blog-post__image">
            <Link href="/entregas/post-left-sidebar">
              <a>
                <img
                  src="/assets/images/blog/blog_small_img5.jpg"
                  alt="blog_small_img1"
                />
              </a>
            </Link>
          </div>
          <div className="blog-post__content">
            <div className="blog-text">
              <ul className="blog-meta">
                <li>
                  <Link href="/entregas/post-left-sidebar">
                    <a>
                      <FaCalendarAlt /> April 14, 2021
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={columns && columns == 4 ? 3 : 4} md={6}>
        <div className="blog-post">
          <div className="blog-post__image">
            <div className="fit-videos">
              <div className="fluid-width-video-wrapper">
                <iframe
                  width="540"
                  height="360"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/118951274&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="blog-post__content">
            <div className="blog-text">
              <ul className="blog-meta">
                <li>
                  <Link href="/entregas/post-left-sidebar">
                    <a>
                      <FaCalendarAlt /> April 14, 2021
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={columns && columns == 4 ? 3 : 4} md={6}>
        <div className="blog-post">
          <div className="blog-post__image">
            <Link href="/entregas/post-left-sidebar">
              <a>
                <img
                  src="/assets/images/blog/blog_small_img6.jpg"
                  alt="blog_small_img1"
                />
              </a>
            </Link>
          </div>
          <div className="blog-post__content">
            <div className="blog-text">
              <ul className="blog-meta">
                <li>
                  <Link href="/entregas/post-left-sidebar">
                    <a>
                      <FaCalendarAlt /> April 14, 2021
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={columns && columns == 4 ? 3 : 4} md={6}>
        <div className="blog-post">
          <div className="blog-post__image">
            <div className="fit-videos">
              <div className="fluid-width-video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/7e90gBu4pas"
                  width="540"
                  height="360"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="blog-post__content">
            <div className="blog-text">
              <ul className="blog-meta">
                <li>
                  <Link href="/entregas/post-left-sidebar">
                    <a>
                      <FaCalendarAlt /> April 14, 2021
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={columns && columns == 4 ? 3 : 4} md={6}>
        <div className="blog-post">
          <div className="blog-post__image">
            <Swiper {...params}>
              <div className="item">
                <Link href="/entregas/post-left-sidebar">
                  <a>
                    <img
                      src="/assets/images/blog/blog_small_img4.jpg"
                      alt="blog_small_img1"
                    />
                  </a>
                </Link>
              </div>
              <div className="item">
                <Link href="/entregas/post-left-sidebar">
                  <a>
                    <img
                      src="/assets/images/blog/blog_small_img5.jpg"
                      alt="blog_small_img1"
                    />
                  </a>
                </Link>
              </div>
            </Swiper>
          </div>
          <div className="blog-post__content">
            <div className="blog-text">
              <ul className="blog-meta">
                <li>
                  <Link href="/entregas/post-left-sidebar">
                    <a>
                      <FaCalendarAlt /> April 14, 2021
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default BlogPostGridWrapper;
