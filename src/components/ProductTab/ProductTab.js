import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { ProductGridWrapperFour } from "../ProductThumb";

const ProductTab = ({
  title,
  newProducts,
  bestSellerProducts,
  featuredProducts,
  saleProducts
}) => {
  return (
    <div className="product-tab-area space-pb--r70">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="section-title text-center space-mb--25">
              <h2>{title}</h2>
            </div>
          </Col>
        </Row>

        <Tab.Container defaultActiveKey="new">
          <Nav
            variant="pills"
            className="product-tab-navigation text-center justify-content-center space-mb--30"
          >
            <Nav.Item>
              <Nav.Link eventKey="new">New Arrival</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bestSellers">Best Sellers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="featured">Featured</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sale">Special Offer</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="new">
              <Row>
                <ProductGridWrapperFour
                  products={newProducts}
                  bottomSpace="space-mb--30"
                />
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="bestSellers">
              <Row>
                <ProductGridWrapperFour
                  products={bestSellerProducts}
                  bottomSpace="space-mb--30"
                />
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="featured">
              <Row>
                <ProductGridWrapperFour
                  products={featuredProducts}
                  bottomSpace="space-mb--30"
                />
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="sale">
              <Row>
                <ProductGridWrapperFour
                  products={saleProducts}
                  bottomSpace="space-mb--30"
                />
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default ProductTab;
