import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutFour } from "../../layouts";
import { BlogSinglePostDefault } from "../../components/Blog";
import { BreadcrumbOne } from "../../components/Breadcrumb";

const PostLeftSidebar = () => {
  return (
    <LayoutFour>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle="Post Left Sidebar">
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
            <Col lg={9}>
              <BlogSinglePostDefault />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutFour>
  );
};

export default PostLeftSidebar;
