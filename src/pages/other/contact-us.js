import Link from "next/link";
import { LayoutFour} from "../../layouts";
import { BreadcrumbOne } from "../../components/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegMap, FaRegEnvelopeOpen, FaMobileAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <LayoutFour>
      {/* breadcrumb */}
      <BreadcrumbOne>
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/home/furniture-two">
              <a>Home</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">Contacto</li>
        </ol>
      </BreadcrumbOne>
      <div className="contact-content space-pt--r100 space-pb--r100">
        <div className="contact-icon-area space-pb--r70">
          <Container>
            <Row>
              <Col xl={4} md={6}>
                <div className="contact-wrap">
                  <div className="contact-wrap__icon">
                    <FaRegMap />
                  </div>
                  <div className="contact-wrap__text">
                    <span>Dirección</span>
                    <a href="https://goo.gl/maps/o6UcVV3sZ49SFd4SA">Avenida Juan B. Justo 3836, Córdoba</a>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={6}>
                <div className="contact-wrap">
                  <div className="contact-wrap__icon">
                    <FaRegEnvelopeOpen />
                  </div>
                  <div className="contact-wrap__text">
                    <span>Email comercial</span>
                    <a href="mailto:info@sitename.com">info@yourmail.com </a>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={6}>
                <div className="contact-wrap">
                  <div className="contact-wrap__icon">
                    <FaMobileAlt />
                  </div>
                  <div className="contact-wrap__text">
                    <spam>Teléfono</spam>  
                  </div>
                  <a href="tel:3513966667">351-3966667</a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contact-form-map-area">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="heading-s1 space-mb--20">
                  <h2>Te llamamos</h2>
                </div>
                <p className="leads">
                  Completa el formulario de contacto y te llamaremos a la brevedad
                </p>
                <div className="field-form">
                  <form method="post">
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          required
                          placeholder="Nombre *"
                          id="first-name"
                          className="form-control"
                          name="name"
                          type="text"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          required
                          placeholder="Email *"
                          id="email"
                          className="form-control"
                          name="email"
                          type="email"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          required
                          placeholder="Telefono"
                          id="phone"
                          className="form-control"
                          name="phone"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea
                          required
                          placeholder="Mensaje *"
                          id="description"
                          className="form-control"
                          name="message"
                          rows={4}
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          title="Enviar"
                          className="btn btn-fill-out"
                          id="submitButton"
                          name="submit"
                          value="Submit"
                        >
                          Enviar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Col>
              <Col lg={6} className="pt-2 pt-lg-0 mt-4 mt-lg-0">
                <div className="google-map">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54496.766273302674!2d-64.23325666362332!3d-31.385242952526962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329920223a7f8d%3A0x672f0258ff645bf7!2sPORTO%20AUTOMOTORES!5e0!3m2!1ses!2sar!4v1661223987879!5m2!1ses!2sar"
                    allowFullScreen
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </LayoutFour>
  );
};

export default ContactUs;
