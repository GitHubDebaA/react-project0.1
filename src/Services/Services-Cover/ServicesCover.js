import { Container, Row, Col } from "react-bootstrap";
import service from "../../Assets/Service-Assets/service.svg";
import AnimatedSection from "../../Utilities/AnimatedSection/AnimatedSection";

function ServicesCover() {
    return (
        <Container fluid>
            <Row>
                <Col
                    xs={{ order: 2, span: 12 }}
                    sm={{ order: 2, span: 12 }}
                    md={{ order: 1, span: 6 }}
                    lg={{ order: 1, span: 6 }}
                    xl={{ order: 1, span: 6 }}
                >
                    <div className="padding-around_medium flex-container">
                        <div>
                            <AnimatedSection>
                                <h1 className="text-heading_medium project-waving-text">Helping businesses run the World Better</h1>
                            </AnimatedSection>
                            <AnimatedSection>
                                <span className="text-color_default text-body_small" style={{ display: 'block', textAlign: 'justify', margin: '10px 0px' }}>We understand businesses and aid them in solving problems for the world– a pivotal trait in the ever-evolving digital landscape. With each sector presenting unique challenges, our cross-industry exposure has enabled us to cultivate a holistic understanding of user behaviour and preferences.</span>
                                <span className="text-color_default text-body_small" style={{ display: 'block', textAlign: 'justify', margin: '10px 0px' }}>From retail and technology to utilities and FMCG, we adeptly navigate complex landscapes. Immersed in industry intricacies, we craft distinct campaigns, transcending one-size-fits-all approaches.</span>
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
                        <img src={service} alt="Asset 1" className="heading-container-asset" />
                    </AnimatedSection>
                </Col>
            </Row>
        </Container>
    );
}

export default ServicesCover;