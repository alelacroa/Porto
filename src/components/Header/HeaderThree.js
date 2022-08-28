import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import Navigation from "./elements/Navigation";
import MobileMenu from "./elements/MobileMenu";


const HeaderThree = ({ cartItems, navPositionClass }) => {
  const [scroll, setScroll] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] = useState(
    false
  );

  useEffect(() => {
    const header = document.querySelector(".header-wrap");
    setHeaderHeight(header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`header-wrap header-wrap--transparent ${
        scroll > headerHeight ? "is-sticky" : ""
      }`}
    >
      <div className="bottom-header light-skin light-skin--style-two">
        <Container>
          <div className="bottom-header-container d-flex justify-content-between align-items-center position-relative">
            {/* logo */}
            <Link href="/">
              <a className="navbar-brand">
                <img
                  className="logo-light"
                  src="/assets/images/logo_light.png"
                  alt="logo"
                />
                <img
                  className="logo-dark"
                  src="/assets/images/logo_dark.png"
                  alt="logo"
                />
              </a>
            </Link>
            {/* navigation */}
            <Navigation positionClass={navPositionClass} />
          </div>
        </Container>
      </div>
      {/* mobile menu */}
      <MobileMenu
        activeStatus={offCanvasMobileMenuActive}
        getActiveStatus={setOffCanvasMobileMenuActive}
      />
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData
  };
};

export default connect(mapStateToProps)(HeaderThree);
