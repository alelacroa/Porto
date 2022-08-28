import { Fragment, useState } from "react";
import Link from "next/link";
import { Col } from "react-bootstrap";
import ProductModal from "./elements/ProductModal";

const ProductGridFour = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
  bottomSpace,
  addToCart,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  addToast,
  cartItems,
  sliderClass
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [colorImage, setColorImage] = useState("");

  return (
    <Fragment>
      <Col
        lg={3}
        sm={6}
        className={`${sliderClass ? sliderClass : ""} ${
          bottomSpace ? bottomSpace : ""
        }`}
      >
        <div className="product-grid product-grid--style-two">
          <div className="product-grid__image">
            <Link
              href={`/shop/product-basic/[slug]?slug=${product.slug}`}
              as={"/shop/product-basic/" + product.slug}
            >
              <a>
                <img
                  src={colorImage ? colorImage : product.thumbImage[0]}
                  alt="product_img1"
                />
              </a>
            </Link>
            <div className="product-grid__action-box">
              <ul>
                <li>
                  <button
                    onClick={() => setModalShow(true)}
                    className="d-none d-lg-block"
                  >
                    <i className="icon-magnifier-add" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-grid__info text-center">
            <h6 className="product-title">
              <Link
                href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                as={"/shop/product-basic/" + product.slug}
              >
                <a>{product.name}</a>
              </Link>
            </h6>
            <div className="product-price">
                <span className="price">Consultar</span>
            </div>
            <div className="add-to-cart">
                <a
                  href="https://api.whatsapp.com/send?phone=5493513966667&amp;text=Hola!"
                  target="_blank"
                  className="btn btn-fill-out-green btn-radius"
                >
                  <i className="icon-action-redo" /> Whatsapp
                </a>
            </div>
          </div>
        </div>
      </Col>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitems={cartItems}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
        addtocart={addToCart}
        addtowishlist={addToWishlist}
        deletefromwishlist={deleteFromWishlist}
        addtocompare={addToCompare}
        deletefromcompare={deleteFromCompare}
        addtoast={addToast}
      />
    </Fragment>
  );
};

export default ProductGridFour;
