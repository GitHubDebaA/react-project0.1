import "./HomepageSection2.css";
import { Col, Container, Row } from "react-bootstrap";
import TileCard from "../../Utilities/TileCard/TileCard";
import Strategy from "./social_strategy.svg";
import Design from "./design.svg";
import Technology from "./technology.svg";
import Carousel from "../../Utilities/Carousel/Carousel";
import ContactUs from "../../ContactUs/ContactUs";

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
            </div>
            <br />
            <br />
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} style={{ padding: "min(2rem, 2vw)" }}>
                        <TileCard
                            heading="Strategy"
                            message="A plan is like a puzzle. Placing the right piece at the right place at the right time, makes it complete- this is what makes TAW different."
                            illustration={<img src={Strategy} alt="Strategy" />}
                        />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} style={{ padding: "min(2rem, 2vw)" }}>
                        <TileCard
                            heading="Design"
                            message="Design is more than a holistic approach to achieve aesthetics. For TAW, design is crucial art of storytelling for your Brand."
                            illustration={<img src={Design} alt="Design" />}
                        />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={4} xl={4} style={{ padding: "min(2rem, 2vw)" }}>
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
                <div className="project-waving-text text-heading_large">Speciality Lies</div>
            </div>
            <br />
            <br />
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{ padding: "min(2rem, 2vw) min(5rem, 5vw)" }}>
                        <div className="flex-container">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmark-fill text-color_brand" viewBox="0 0 16 16">
                                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                                </svg>
                            </div>
                            <div className="text-heading_small project-waving-text">Social Communication</div>
                        </div>
                        <div style={{ padding: "min(1rem, 1vw) min(2rem, 2vw)" }}>
                            <div className="flex-container text-color_default">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-end" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                                        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <div>Social Media Management</div>
                            </div>
                            <div className="flex-container text-color_default">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-end" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                                        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <div>Social Strategy</div>
                            </div>
                            <div className="flex-container text-color_default">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-end" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                                        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <div>ORM</div>
                            </div>
                            <div className="flex-container text-color_default">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-end" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                                        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <div>Influencer Marketing</div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{ padding: "min(2rem, 2vw) min(5rem, 5vw)" }}>
                        <div className="flex-container">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmark-fill text-color_brand" viewBox="0 0 16 16">
                                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                                </svg>
                            </div>
                            <div className="text-heading_small project-waving-text">Organic & Paid Marketing</div>
                        </div>
                        <div style={{ padding: "min(1rem, 1vw) min(2rem, 2vw)" }}>
                            <div className="flex-container text-color_default">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-end" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                                        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <div>Search Engine Optimization</div>
                            </div>
                            <div className="flex-container text-color_default">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-end" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                                        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <div>Search Engine Management</div>
                            </div>
                            <div className="flex-container text-color_default">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-end" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                                        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <div>Media Planning and Buying</div>
                            </div>
                            <div className="flex-container text-color_default">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-end" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                                        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <div>Programmatic Buying</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{ padding: "min(2rem, 2vw) min(5rem, 5vw)" }}>
                        <div className="flex-container">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmark-fill text-color_brand" viewBox="0 0 16 16">
                                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                                </svg>
                            </div>
                            <div className="text-heading_small project-waving-text">Creative & Content</div>
                        </div>
                        <div style={{ padding: "min(1rem, 1vw) min(2rem, 2vw)" }}>
                            <div className="flex-container text-color_default">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-end" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                                        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <div>Creative assets management</div>
                            </div>
                            <div className="flex-container text-color_default">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-end" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                                        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <div>Identity and collaterals</div>
                            </div>
                            <div className="flex-container text-color_default">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-end" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                                        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <div>Content Strategy</div>
                            </div>
                            <div className="flex-container text-color_default">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-end" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                                        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <div>Production & Photography</div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{ padding: "min(2rem, 2vw) min(5rem, 5vw)" }}>
                        <div className="flex-container">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmark-fill text-color_brand" viewBox="0 0 16 16">
                                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                                </svg>
                            </div>
                            <div className="text-heading_small project-waving-text">Creative & Content</div>
                        </div>
                        <div style={{ padding: "min(1rem, 1vw) min(2rem, 2vw)" }}>
                            <div className="flex-container text-color_default">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-end" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                                        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <div>Website design and Development</div>
                            </div>
                            <div className="flex-container text-color_default">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-end" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                                        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <div>E-commerce Website Development</div>
                            </div>
                            <div className="flex-container text-color_default">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-end" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                                        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <div>AR Filter</div>
                            </div>
                            <div className="flex-container text-color_default">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-end" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5" />
                                        <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
                                    </svg>
                                </div>
                                <div>Mobile Application</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="HomepageSection2-container">
                <div className="double-struck-text text-heading_large">What's the</div>
                <div className="project-waving-text text-heading_large">Buzz?</div>
            </div>
            <br />
            <Carousel />
            <div style={{padding: "min(1rem, 1vw) min(5rem, 5vw)"}}>
                <div className="double-struck-text text-heading_large">Ready to redefine your</div>
                <div className="project-waving-text text-heading_large">brand experience?</div>
            </div>
            <ContactUs />
        </>
    );
}

export default HomepageSection2;