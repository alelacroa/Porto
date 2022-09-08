import Link from "next/link";
import { LayoutFour } from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { BlogPostGridWrapper } from "../../components/Blog";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const GridFourColumns = () => {
  return (
    <LayoutFour>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Blog">
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Entregas</li>
        </ol>
      </BreadcrumbOne>
      <div className="blog-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col lg={12}>
              {/* blog post grid wrapper */}
              <BlogPostGridWrapper columns={4} />
              <Row>
                <Col className="mt-2 mt-md-4">
                  <ul className="pagination pagination-style justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex={-1}>
                        <IoIosArrowBack />
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <IoIosArrowForward />
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutFour>
  );
};

export default GridFourColumns;