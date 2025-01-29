import { Col, Container, Row } from "react-bootstrap";
import "./HomepageSection2.css";
import TileCard from "../../Utilities/TileCard/TileCard";
import Strategy from "./social_strategy.svg";
import Design from "./design.svg";
import Technology from "./technology.svg";

function HomepageSection2() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className="HomepageSection2-container">
                            <div className="double-struck-text text-heading_large">We're</div>
                            <div className="project-waving-text text-heading_large">Project 1</div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className="HomepageSection2-container">
                            <span style={{ textAlign: "justify" }} className="text-color_default text-body_small">TAW-the agency way is more than just a marketing agency. We are the architects of brand experiences, designing stories that resonate with the brand’s audience. At TAW, we provide customize solutions and expertise to unique business needs making us the right choice for start-ups and small to medium companies. With us, you can build future ready brand, through an With us, you can build future ready brand, through an integration of content, technology and media, using data backed tools and practices.</span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <div className="HomepageSection2-container">
                <h1 style={{ textAlign: 'center' }}>Redefining Communication for Brands to Create More Approachable Framework</h1>
                <span style={{ textAlign: 'justify', }} className="text-color_default text-body_small">We believe every brand carries a story and looking for the optimum communication strategy to interact with their audience. In the era of technology and artificial intelligence, we design campaigns with human touch that leaves a lasting impression. With TAW, you can amplify your brand’s communication making it more interactive and people centric. This will not only generate leads but also make your brand more relatable and problem solving to your consumers. Join us on a journey where marketing transcends the ordinary and becomes a catalyst for connection, creativity, and growth.</span>
            </div>
            <br />
            <br />
            <div className="HomepageSection2-container">
                <div style={{ textAlign: 'center' }} className="double-struck-text text-heading_large">Specialist</div>
                <h1 style={{ textAlign: 'center' }} className="text-heading_large">Divisions</h1>
                <span style={{ textAlign: 'justify', }} className="text-color_default text-body_small">We believe every brand carries a story and looking for the optimum communication strategy to interact with their audience. In the era of technology and artificial intelligence, we design campaigns with human touch that leaves a lasting impression. With TAW, you can amplify your brand’s communication making it more interactive and people centric. This will not only generate leads but also make your brand more relatable and problem solving to your consumers. Join us on a journey where marketing transcends the ordinary and becomes a catalyst for connection, creativity, and growth.</span>
            </div>
            <br />
            <br />
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} style={{padding: "min(2rem, 2vw)"}}>
                        <TileCard 
                            heading="Strategy" 
                            message="A plan is like a puzzle. Placing the right piece at the right place at the right time, makes it complete- this is what makes TAW different." 
                            illustration={<img src={Strategy} alt="Strategy"/>}
                        />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} style={{padding: "min(2rem, 2vw)"}}>
                        <TileCard 
                            heading="Design" 
                            message="Design is more than a holistic approach to achieve aesthetics. For TAW, design is crucial art of storytelling for your Brand." 
                            illustration={<img src={Design} alt="Design"/>}
                        />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} style={{padding: "min(2rem, 2vw)"}}>
                        <TileCard 
                            heading="Technology" 
                            message="In today’s digitally evolved world, Technology is the backbone of every dream and vision. Our tech-savvy professionals offer high-quality experience from web development to app design." 
                            illustration={<img src={Technology} alt="Technology" />}
                        />
                    </Col>
                </Row>
            </Container>
            <br />
            <br />
            <div className="HomepageSection2-container">
                <div className="double-struck-text text-heading_large">Where Our</div>
                <div className="project-waving-text text-heading_large">Specialty Lies</div>
            </div>
        </>
    );
}

export default HomepageSection2;