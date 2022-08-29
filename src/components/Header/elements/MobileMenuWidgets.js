import {
  IoIosPhonePortrait,
  IoMdMail,
  IoLogoInstagram,
} from "react-icons/io";


const MobileMenuWidgets = () => {
  return (
    <div className="offcanvas-mobile-menu__widgets space-mb--30">
      <div className="contact-widget space-mb--30">
        <ul>
          <li>
            <IoIosPhonePortrait />
            <a href="tel:3513966667">3513966667 </a>
          </li>
          <li>
            <IoMdMail />
            <a href="mailto:info@yourdomain.com">info@gmail.com</a>
          </li>
        </ul>
      </div>

      <div className="social-widget">
        <a href="https://www.instagram.com/porto.automotores/" target="_blank">
          <IoLogoInstagram />
        </a>
      </div>
    </div>
  );
};

export default MobileMenuWidgets;
