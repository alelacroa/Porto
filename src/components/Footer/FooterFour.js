import { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import {
  IoIosPhonePortrait,
  IoIosMailOpen,
  IoIosPin,
  IoIosArrowUp,
  IoLogoInstagram
} from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { animateScroll } from "react-scroll";


const FooterFour = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <footer className="footer-dark">
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="widget">
                <h6 className="widget-title">Contacto</h6>
                <ul className="contact-info contact-info-light">
                  <li>
                    <IoIosPin />
                    <a href="https://goo.gl/maps/o6UcVV3sZ49SFd4SA">Avenida Juan B. Justo 3836, Córdoba</a>
                  </li>
                  <li>
                    <IoIosMailOpen />
                    <a href="mailto:info@sitename.com">info@gmail.com</a>
                  </li>
                  <li>
                    <IoIosPhonePortrait />
                    <a href="tel:3513966667">351-3966667</a>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <ul className="social-icons mb-3 mb-lg-0">
                  <li>
                    <a href="https://www.instagram.com/porto.automotores/" className="sc_instagram">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <div className="widget">
                <h6 className="widget-title">Instagram</h6>
                <ul className="widget-instafeed widget-instafeed--col4">
                  <li>
                    <a href="https://www.instagram.com/porto.automotores/">
                      <img
                        src="/assets/images/instagram/furniture_insta_small1.jpg"
                        alt="insta_img"
                      />
                      <span className="insta-icon">
                        <IoLogoInstagram />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/porto.automotores/">
                      <img
                        src="/assets/images/instagram/furniture_insta_small2.jpg"
                        alt="insta_img"
                      />
                      <span className="insta-icon">
                        <IoLogoInstagram />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/porto.automotores/">
                      <img
                        src="/assets/images/instagram/furniture_insta_small3.jpg"
                        alt="insta_img"
                      />
                      <span className="insta-icon">
                        <IoLogoInstagram />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/porto.automotores/">
                      <img
                        src="/assets/images/instagram/furniture_insta_small4.jpg"
                        alt="insta_img"
                      />
                      <span className="insta-icon">
                        <IoLogoInstagram />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bottom-footer bg--dark-two">
        <Container>
          <Row>
            <Col md={6}>
              <p className="mb-3 mb-md-0 text-center text-md-left">
                Copyright &copy; {new Date().getFullYear() + " "}. {" "}
                <a href="https://alecarrizo.com.ar/" target="_blank">
                  Ale Carrizo
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <IoIosArrowUp />
      </button>
    </footer>
  );
};

export default FooterFour;
