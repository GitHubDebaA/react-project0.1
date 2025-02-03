import address from "../../Assets/Contact-Icons/address.svg";
import map from "../../Assets/Contact-Icons/map.svg";
import supportMale from "../../Assets/Contact-Icons/supportMale.svg";
import mail from "../../Assets/Contact-Icons/mail.svg";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedSection from "../../Utilities/AnimatedSection/AnimatedSection";
import Form from "../../ContactUsFrom/Form";

function ContactDetails() {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className="contact-us">
                        <div>
                            <AnimatedSection>
                                <h1 className="project-waving-text">Let’s connect with us</h1>
                            </AnimatedSection>
                            <br />
                            <AnimatedSection>
                                <div className="connect-items">
                                    <img src={address} alt="Address" className="connect-icon" />
                                    <span>
                                        D-65, Udyog Vihar, Phase-V, Sector-19, Gurgaon, Haryana
                                        122016, India
                                    </span>
                                </div>
                                <div className="connect-items">
                                    <img src={map} alt="Map" className="connect-icon" />
                                    <span>Find us on the map</span>
                                </div>
                                <div className="connect-items">
                                    <img src={supportMale} alt="Call us" className="connect-icon" />
                                    <span>+91 9876543210</span>
                                </div>
                                <div className="connect-items">
                                    <img src={mail} alt="Mail us" className="connect-icon" />
                                    <span>info@projectone.com</span>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <AnimatedSection>
                        <Form />
                    </AnimatedSection>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactDetails;