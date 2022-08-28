import Link from "next/link";
import { Col } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Navigation = ({ positionClass }) => {
  return (
    <nav className="navigation d-none d-lg-block">
      <ul
        className={`d-flex ${
          positionClass ? positionClass : "justify-content-end"
        }`}
      >
        <li>
          <Link href="/">
            <a className="nav-link">
              HOME
            </a>
          </Link>
        </li>
        <li className="has-children-mega">
          <Link href="/shop/grid-left-sidebar">
            <a className="nav-link">
              SHOWROOM
            </a>
          </Link>
        </li>
        <li>
          <Link href="/other/contact-us">
            <a className="nav-link">CONTACTO</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
