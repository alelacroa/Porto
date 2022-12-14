import { connect } from "react-redux";
import { getProducts } from "../lib/product";
import { LayoutFour } from "../layouts";
import { HeroSliderFour } from "../components/HeroSlider";
import { ProductGridTwo } from "../components/ProductGrid";
import { CountdownOne } from "../components/Countdown";
import { BannerOne, BannerTwo} from "../components/Banner";
import { ProductTab } from "../components/ProductTab";
import { ProductSliderSeven } from "../components/ProductSlider";
import { Contact } from "../components/Contact";

import heroSliderFourData from "../data/hero-sliders/hero-slider-four.json";


const FurnitureTwo = ({ saleProducts, newProducts, bestSellerProducts, featuredProducts }) => {
  return (
    <LayoutFour navPositionClass="justify-content-center">
      {/* hero slider */}
      <HeroSliderFour heroSliderData={heroSliderFourData} />
      {/* single banner */}
      <BannerOne />
      {/* single banner */}
      <BannerTwo />
      {/* grid product */}
      <ProductGridTwo
        title="SHOW ROOM"
        text="Accede al 0Km o usado con el plan que más se adecue a tus posibilidades."
        products={bestSellerProducts}
      />
      {/* product slider */}
      <ProductSliderSeven
        title="Special Offers"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim Nullam nunc varius."
        products={saleProducts}
      />
      {/* countdown */}
      <CountdownOne
        backgroundImage="/assets/images/banner/furniture_banner3.jpg"
        title="Promoción especial"
        subtitle="Nuevo Plan docente"
        url="/other/contact-us"
        dateTime="September 01, 2022 12:12:00"
      />
      {/* Contact */}
      <Contact />
    </LayoutFour>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    saleProducts: getProducts(products, "furniture", "sale", 3),
    bestSellerProducts: getProducts(products, "furniture", "popular", 8)
  };
};

export default connect(mapStateToProps)(FurnitureTwo);
