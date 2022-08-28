import Link from "next/link";
import { useState, useEffect, Fragment } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import Swiper from "react-id-swiper";
import { getProductCartQuantity } from "../../../lib/product";
import { ProductRating } from "../../Product";
import { BsShield } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";
import { GiSwapBag } from "react-icons/gi";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGoogleplus,
  IoLogoYoutube,
  IoLogoInstagram
} from "react-icons/io";

const ProductModal = (props) => {
  const {
    product,
    discountedprice,
    productprice,
    cartitems,
    wishlistitem,
    compareitem,
    addtocart,
    addtowishlist,
    deletefromwishlist,
    addtocompare,
    deletefromcompare,
    addtoast
  } = props;

  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.variation ? product.variation[0].size[0].stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);

  const productCartQty = getProductCartQuantity(
    cartitems,
    product,
    selectedProductColor,
    selectedProductSize
  );

  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

  // effect for swiper slider synchronize
  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  // swiper slider settings
  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    loopedSlides: 4,
    loop: true,
    effect: "fade"
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      className="product-quickview"
      centered
    >
      <Modal.Body>
        <Modal.Header closeButton></Modal.Header>
        <Row>
          <Col lg={6}>
            <div className="product-quickview__large-image-wrapper">
              <Swiper {...gallerySwiperParams}>
                {product.image &&
                  product.image.map((single, key) => {
                    return (
                      <div key={key}>
                        <div className="single-image">
                          <img src={single} className="img-fluid" alt="" />
                        </div>
                      </div>
                    );
                  })}
              </Swiper>
            </div>
            <div className="product-quickview__small-image-wrapper">
              <Swiper {...thumbnailSwiperParams}>
                {product.image &&
                  product.image.map((image, i) => {
                    return (
                      <div key={i}>
                        <div className="single-image">
                          <img src={image} className="img-fluid" alt="" />
                        </div>
                      </div>
                    );
                  })}
              </Swiper>
            </div>
          </Col>
          <Col lg={6}>
            <div className="product-quickview__content">
              <h2 className="product-quickview__title space-mb--10">
                {product.name}
              </h2>
              <div className="product-quickview__description space-mb--20">
                <p>{product.shortDescription}</p>
              </div>

              <div className="product-quickview__sort-info space-mb--20">
                <ul>
                  <li>
                    <BsShield /> Ver
                  </li>
                  <li>
                    <AiOutlineReload /> 30 Days Return Policy
                  </li>
                  <li>
                    <GiSwapBag /> Cash on Delivery available
                  </li>
                </ul>
              </div>

              <hr />
              
              {product.affiliateLink ? (
                <div className="product-quickview__quality">
                  <div className="product-quickview__cart btn-hover">
                    <a
                      href={product.affiliateLink}
                      target="_blank"
                      className="btn btn-fill-out btn-addtocart"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              ) : (
                <Fragment>
                  <div className="product-quickview__button-wrapper d-flex align-items-center">
                      <a
                        className="btn btn-fill-out-green btn-addtocart space-ml--10"
                        href="https://api.whatsapp.com/send?phone=5493513966667&amp;text=Hola!"
                        target="_blank"
                      >
                        <i className="icon-basket-loaded" /> Whatsapp
                      </a>
                  
                  </div>
                </Fragment>
              )}
              <hr />
              <ul className="product-quickview__product-meta">
                <li>
                  SKU: <span>{product.sku}</span>
                </li>
                <li>
                  Category:
                  {product.category &&
                    product.category.map((item, index, arr) => {
                      return (
                        <Link
                          href="/shop/grid-left-sidebar"
                          as={"/shop/grid-left-sidebar"}
                          key={index}
                        >
                          <a>{item + (index !== arr.length - 1 ? ", " : "")}</a>
                        </Link>
                      );
                    })}
                </li>
                <li>
                  Tags:
                  {product.tag &&
                    product.tag.map((item, index, arr) => {
                      return (
                        <Link
                          href="/shop/grid-left-sidebar"
                          as={"/shop/grid-left-sidebar"}
                          key={index}
                        >
                          <a>{item + (index !== arr.length - 1 ? ", " : "")}</a>
                        </Link>
                      );
                    })}
                </li>
              </ul>
              <div className="product-quickview__product-share space-mt--15">
                <span>Comparte:</span>
                <ul className="social-icons">
                  <li>
                    <a href="https://www.instagram.com">
                      <IoLogoInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
