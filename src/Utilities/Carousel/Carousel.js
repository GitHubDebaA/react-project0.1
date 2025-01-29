import React from 'react';
import './Carousel.css';
import slide1 from './slide1.svg';
import slide2 from './slide2.svg';
import slide3 from './slide3.svg';
import slide4 from './slide4.svg';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const HomepageSlide = () => {
    return (
        <Carousel variant='dark' controls={false}>
            <Carousel.Item>
                <Container fluid>
                    <Row>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className="slide-image-column">
                            <img className="d-block slide-images" src={slide1} alt="First slide"/>
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className="slide-content-column">
                            <div className="heading-container-01">
                                <h3>A Comprehensive Website Management Strategy Can Impact Your Online Business Success</h3>
                                <p>A comprehensive website management strategy is pivotal for online business success. From enhancing user experience to improving search engine visibility, each aspect plays a crucial role.</p>
                                <Button variant="outline-light">
                                    Explore
                                    <MdOutlineKeyboardDoubleArrowRight />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container fluid>
                    <Row>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className="slide-image-column">
                            <img className="d-block slide-images" src={slide2} alt="Second slide"/>
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className="slide-content-column">
                            <div className="heading-container-01">
                                <h3>How Changes in Social Media Algorithms Are Influencing Content Strategy and What Marketers Need to Know to Stay Ahead</h3>
                                <p>In today's bustling market where every digital marketing agency is trying to stand out, having consumable content is like the basic rule of the game. ...</p>
                                <Button variant="outline-light">Explore
                                    <MdOutlineKeyboardDoubleArrowRight />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container fluid>
                    <Row>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className="slide-image-column">
                            <img className="d-block slide-images" src={slide3} alt="Third slide"/>
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className="slide-content-column">
                            <div className="heading-container-01">
                                <h3>How Artificial Intelligence is Revolutionizing Advertising, From Personalized Targeting to Predictive Analytics</h3>
                                <p>Welcome to the future of advertising, where the magic of Artificial Intelligence (AI) is transforming the way, we connect with audiences.</p>
                                <Button variant="outline-light">Explore
                                    <MdOutlineKeyboardDoubleArrowRight />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container fluid>
                    <Row>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className="slide-image-column">
                            <img className="d-block slide-images" src={slide4} alt="Fourth slide"/>
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className="slide-content-column">
                            <div className="heading-container-01">
                                <h3>4 Red Flags to Watch Out in Your Next Content Marketing Strategy</h3>
                                <p>Discover the top 4 red flags that could be undermining your content marketing strategy. Learn how to identify and address these warning signs to ensure your next campaign is a resounding success.</p>
                                <Button variant="outline-light">Explore
                                    <MdOutlineKeyboardDoubleArrowRight />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomepageSlide;