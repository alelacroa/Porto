import { Fragment } from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import {
  FaCalendarAlt,
  FaInstagram,
  FaTh,
  FaArrowLeft,
  FaArrowRight,
  FaReplyAll
} from "react-icons/fa";

const BlogSinglePostDefault = () => {
  return (
    <Fragment>
      <div className="single-post">
        <h2 className="blog-title">
          Demo
        </h2>
        <ul className="blog-meta">
          <li>
            <Link href="/blog/grid-left-sidebar">
              <a>
                <FaCalendarAlt /> April 14, 2021
              </a>
            </Link>
          </li>
        </ul>
        <div className="blog-img">
          <img src="/assets/images/blog/blog_img1.jpg" alt="blog_img1" />
        </div>
        <div className="blog-content">
          <div className="blog-text">
            <div className="blog-post-footer">
              <Row className="justify-content-between align-items-center">
                <Col md={1}>
                  <ul className="social-icons text-md-right">
                    <li>
                      <a href="#" className="sc_instagram">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className="post-navigation bg--grey">
        <Row className="align-items-center justify-content-between p-4">
          <Col xs={5}>
            <div className="post-nav post-nav--prev">
              <Link href="/blog/post-left-sidebar">
                <a>
                  <FaArrowLeft />
                  <span className="title">Anterior</span>
                </a>
              </Link>
            </div>
          </Col>
          <Col xs={2}>
            <Link href="/blog/grid-left-sidebar">
              <a className="post-nav--home">
                <FaTh />
              </a>
            </Link>
          </Col>
          <Col xs={5} className="text-right">
            <div className="post-nav post-nav--next">
              <Link href="/blog/post-left-sidebar">
                <a>
                  <FaArrowRight />
                  <span className="title">Siguiente</span>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default BlogSinglePostDefault;
