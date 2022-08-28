import { Fragment } from "react";
import { HeaderThree } from "../components/Header";
import { FooterOne } from "../components/Footer";

const LayoutOne = ({ children, navPositionClass }) => {
  return (
    <Fragment>
      <HeaderThree navPositionClass={navPositionClass} />
      {children}
      <FooterOne />
    </Fragment>
  );
};

export default LayoutOne;
