import { connect } from "react-redux";
import { getProducts } from "../lib/product";
import { LayoutFour } from "../layouts";
import { HeroSliderFour } from "../components/HeroSlider";
import { ProductGridTwo } from "../components/ProductGrid";
import { CountdownOne } from "../components/Countdown";
import { ProductSliderSeven } from "../components/ProductSlider";
import { Contact } from "../components/Contact";

import heroSliderFourData from "../data/hero-sliders/hero-slider-four.json";


const FurnitureTwo = ({ saleProducts, bestSellerProducts }) => {
  return (
    <LayoutFour navPositionClass="justify-content-center">
      {/* hero slider */}
      <HeroSliderFour heroSliderData={heroSliderFourData} />
      {/* grid product */}
      <ProductGridTwo
        title="SHOW ROOM"
        text="Accede al 0Km o usado con el plan que más se adecue a tus posibilidades."
        products={bestSellerProducts}
      />
      {/* countdown */}
      <CountdownOne
        backgroundImage="/assets/images/banner/furniture_banner3.jpg"
        title="Promoción especial"
        subtitle="Nuevo Plan docente"
        url="/shop/grid-left-sidebar"
        dateTime="September 01, 2022 12:12:00"
      />
      {/* product slider */}
      <ProductSliderSeven
        title="OFERTAS ESPECIALES"
        text="Accede a nuestras promociones especiales."
        products={saleProducts}
      />
      <Contact />
    </LayoutFour>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    saleProducts: getProducts(products, "furniture", "sale", 8),
    bestSellerProducts: getProducts(products, "furniture", "popular", 4)
  };
};

export default connect(mapStateToProps)(FurnitureTwo);
