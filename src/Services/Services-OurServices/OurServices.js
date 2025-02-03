import { Container, Row, Col } from "react-bootstrap";
import AnimatedSection from "../../Utilities/AnimatedSection/AnimatedSection";
import advertising from "../../Assets/Service-Assets/advertising.svg";
import design from "../../Assets/Service-Assets/design.svg";
import film from "../../Assets/Service-Assets/film.svg";
import ORM from "../../Assets/Service-Assets/ORM.svg";
import SEO from "../../Assets/Service-Assets/SEO.svg";
import socialMarketing from "../../Assets/Service-Assets/social_marketing.svg";
import social from "../../Assets/Service-Assets/social.svg";
import technology from "../../Assets/Service-Assets/technology.svg";

function OurServices() {
    return (
        <div style={{ textAlign: "center" }}>
            <AnimatedSection>
                <h1 className="project-waving-text text-heading_medium">Our Services</h1>
            </AnimatedSection>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                        <AnimatedSection>
                            <div className="service-item">
                                <img src={technology} alt="Asset 1" />
                                <div className="content">
                                    <span>Technology</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                        <AnimatedSection>
                            <div className="service-item">
                                <img src={design} alt="Asset 1" />
                                <div className="content">
                                    <span>Design</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                        <AnimatedSection>
                            <div className="service-item">
                                <img src={social} alt="Asset 1" />
                                <div className="content">
                                    <span>Social Media</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                        <AnimatedSection>
                            <div className="service-item">
                                <img src={SEO} alt="Asset 1" />
                                <div className="content">
                                    <span>SEO</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                        <AnimatedSection>
                            <div className="service-item">
                                <img src={socialMarketing} alt="Asset 1" />
                                <div className="content">
                                    <span>Paid Ads</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                        <AnimatedSection>
                            <div className="service-item">
                                <img src={ORM} alt="Asset 1" />
                                <div className="content">
                                    <span>PR & ORM</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                        <AnimatedSection>
                            <div className="service-item">
                                <img src={advertising} alt="Asset 1" />
                                <div className="content">
                                    <span>Influencer Marketing</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                        <AnimatedSection>
                            <div className="service-item">
                                <img src={film} alt="Asset 1" />
                                <div className="content">
                                    <span>Film & Photography</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OurServices;