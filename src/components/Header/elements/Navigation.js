import Link from "next/link";

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
        <li>
          <Link href="/other/contact-us">
            <a className="nav-link">CONTACTO</a>
          </Link>
        </li>
        <li>
          <Link href="/entregas/four-columns">
            <a className="nav-link">
              ENTREGAS
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
