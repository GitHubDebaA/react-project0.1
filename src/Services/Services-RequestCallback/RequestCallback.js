import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import customerSupport from "../../Assets/Service-Assets/customersupport.svg";
import AnimatedSection from "../../Utilities/AnimatedSection/AnimatedSection";

function RequestCallback() {
    const navigate = useNavigate();

    const HandleRequestCallback = () => {
        navigate("/contact");
    };
    return (
        <div style={{ padding: "2rem", backgroundColor: "#8fbcc8" }}>
            <Container fluid>
                <Row>
                    <Col
                        xs={{ order: 2, span: 12 }}
                        sm={{ order: 2, span: 12 }}
                        md={{ order: 1, span: 6 }}
                        lg={{ order: 1, span: 6 }}
                        xl={{ order: 1, span: 6 }}
                    >
                        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                            <div>
                                <AnimatedSection>
                                    <h1 className="project-waving-text text-heading_medium">Ready to Solve Something Together?</h1>
                                </AnimatedSection>
                                <br />
                                <br />
                                <AnimatedSection>
                                    <span className="text-body_small text-color_default">If you're looking to enhance your SEO, PPC, and broader digital marketing strategies, our team is excited to engage with you. Let's start a conversation!</span>
                                </AnimatedSection>

                                <AnimatedSection>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '2rem' }}>
                                        <button className="animated-button" onClick={HandleRequestCallback}>
                                            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.62 10.79a15.464 15.464 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.11-.23c1.2.49 2.52.76 3.87.76a1 1 0 0 1 1 1v3.68a1 1 0 0 1-1 1C10.2 21.85 2.15 13.8 2.15 3a1 1 0 0 1 1-1h3.68a1 1 0 0 1 1 1c0 1.35.27 2.67.76 3.87a1 1 0 0 1-.23 1.11l-2.2 2.2Z"
                                                ></path>
                                            </svg>
                                            <span className="text">Request a call back</span>
                                            <span className="circle"></span>
                                            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.62 10.79a15.464 15.464 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.11-.23c1.2.49 2.52.76 3.87.76a1 1 0 0 1 1 1v3.68a1 1 0 0 1-1 1C10.2 21.85 2.15 13.8 2.15 3a1 1 0 0 1 1-1h3.68a1 1 0 0 1 1 1c0 1.35.27 2.67.76 3.87a1 1 0 0 1-.23 1.11l-2.2 2.2Z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </AnimatedSection>
                            </div>
                        </div>
                    </Col>
                    <Col
                        xs={{ order: 1, span: 12 }}
                        sm={{ order: 1, span: 12 }}
                        md={{ order: 2, span: 6 }}
                        lg={{ order: 2, span: 6 }}
                        xl={{ order: 2, span: 6 }}
                    >
                        <AnimatedSection>
                            <img src={customerSupport} alt="Asset 2" className="heading-container-asset" />
                        </AnimatedSection>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RequestCallback;