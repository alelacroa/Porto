import Link from "next/link";
import { LayoutFour, LayoutOne } from "../layouts";
import { BreadcrumbOne } from "../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";

const NotFound = () => {
  return (
    <LayoutFour>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Not Found">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">No encontrada</li>
        </ol>
      </BreadcrumbOne>
      <div className="not-found-content space-pt--r100 space-pb--r100">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={6} md={10}>
              <div className="text-center">
                <div className="error-txt">404</div>
                <h5 className="mb-2 mb-sm-3">
                  oops! Pagina no encontrada!
                </h5>
                <p>
                La página que está buscando fue movida, eliminada, renombrada o 
                tal vez nunca existió.
                </p>
                <div className="search-form pb-3 pb-md-4">
                  <form method="post">
                    <input
                      name="text"
                      id="text"
                      type="text"
                      placeholder="Search"
                      className="form-control"
                    />
                  </form>
                </div>
                <Link href="/home/furniture-two">
                  <a className="btn btn-fill-out">Volver al home</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutFour>
  );
};

export default NotFound;
