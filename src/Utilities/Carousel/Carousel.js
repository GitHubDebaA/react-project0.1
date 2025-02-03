import React from 'react';
import './Carousel.css';
import slide1 from './slide1.svg';
import slide2 from './slide2.svg';
import slide3 from './slide3.svg';
import slide4 from './slide4.svg';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import AnimatedSection from '../AnimatedSection/AnimatedSection';

const HomepageSlide = () => {
    return (
        <Carousel variant='dark' controls={false}>
            <Carousel.Item>
                <Container fluid>
                    <Row>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className="slide-image-column">
                            <img className="d-block slide-images" src={slide1} alt="First slide" />
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className="slide-content-column">
                            <div className="heading-container-01">
                                <AnimatedSection>
                                    <h3>A Comprehensive Website Management Strategy Can Impact Your Online Business Success</h3>
                                </AnimatedSection>
                                <AnimatedSection>
                                    <p>A comprehensive website management strategy is pivotal for online business success. From enhancing user experience to improving search engine visibility, each aspect plays a crucial role.</p>
                                    <Button variant="outline-light">
                                        Explore
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                        </svg>
                                    </Button>
                                </AnimatedSection>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container fluid>
                    <Row>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className="slide-image-column">
                            <img className="d-block slide-images" src={slide2} alt="Second slide" />
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className="slide-content-column">
                            <div className="heading-container-01">
                                <AnimatedSection>
                                    <h3>How Changes in Social Media Algorithms Are Influencing Content Strategy and What Marketers Need to Know to Stay Ahead</h3>
                                </AnimatedSection>
                                <AnimatedSection>
                                    <p>In today's bustling market where every digital marketing agency is trying to stand out, having consumable content is like the basic rule of the game. ...</p>
                                    <Button variant="outline-light">
                                        Explore
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                        </svg>
                                    </Button>
                                </AnimatedSection>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container fluid>
                    <Row>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className="slide-image-column">
                            <img className="d-block slide-images" src={slide3} alt="Third slide" />
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className="slide-content-column">
                            <div className="heading-container-01">
                                <AnimatedSection>
                                    <h3>How Artificial Intelligence is Revolutionizing Advertising, From Personalized Targeting to Predictive Analytics</h3>
                                </AnimatedSection>
                                <AnimatedSection>
                                    <p>Welcome to the future of advertising, where the magic of Artificial Intelligence (AI) is transforming the way, we connect with audiences.</p>
                                    <Button variant="outline-light">
                                        Explore
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                        </svg>
                                    </Button>
                                </AnimatedSection>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item>
                <Container fluid>
                    <Row>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className="slide-image-column">
                            <img className="d-block slide-images" src={slide4} alt="Fourth slide" />
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6" className="slide-content-column">
                            <div className="heading-container-01">
                                <AnimatedSection>
                                    <h3>4 Red Flags to Watch Out in Your Next Content Marketing Strategy</h3>
                                </AnimatedSection>
                                <AnimatedSection>
                                    <p>Discover the top 4 red flags that could be undermining your content marketing strategy. Learn how to identify and address these warning signs to ensure your next campaign is a resounding success.</p>
                                    <Button variant="outline-light">
                                        Explore
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                        </svg>
                                    </Button>
                                </AnimatedSection>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomepageSlide;