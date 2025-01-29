import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Services.css";
import service from "./service.svg";
import advertising from "./advertising.svg";
import design from "./design.svg";
import film from "./film.svg";
import ORM from "./ORM.svg";
import SEO from "./SEO.svg";
import socialMarketing from "./social_marketing.svg";
import social from "./social.svg";
import technology from "./technology.svg";
import customerSupport from "./customersupport.svg";
import AppFooter from "../AppFooter/AppFooter";
import { useNavigate } from "react-router-dom";


function Services() {
  const navigate = useNavigate();

  const HandleRequestCallback = () => {
    navigate("/contact");
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col
            xs={{ order: 2, span: 12 }}
            sm={{ order: 2, span: 12 }}
            md={{ order: 1, span: 6 }}
            lg={{ order: 1, span: 6 }}
            xl={{ order: 1, span: 6 }}
          >
            <div className="heading-container-01">
              <h1>Helping businesses run the World Better</h1>
              <span style={{ display: 'block', textAlign: 'justify', margin: '10px 0px' }}>We understand businesses and aid them in solving problems for the world– a pivotal trait in the ever-evolving digital landscape. With each sector presenting unique challenges, our cross-industry exposure has enabled us to cultivate a holistic understanding of user behaviour and preferences.</span>
              <span style={{ display: 'block', textAlign: 'justify', margin: '10px 0px' }}>From retail and technology to utilities and FMCG, we adeptly navigate complex landscapes. Immersed in industry intricacies, we craft distinct campaigns, transcending one-size-fits-all approaches.</span>
            </div>
          </Col>
          <Col
            xs={{ order: 1, span: 12 }}
            sm={{ order: 1, span: 12 }}
            md={{ order: 2, span: 6 }}
            lg={{ order: 2, span: 6 }}
            xl={{ order: 2, span: 6 }}
          >
            <img src={service} alt="Asset 1" className="heading-container-asset" />
          </Col>
        </Row>
      </Container>
      <div style={{ textAlign: "center" }}>
        <h1>Our Services</h1>

        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={4} lg={3} xl={3}>
              <div className="service-item">
                <img src={technology} alt="Asset 1" />
                <div className="content">
                  <span>Technology</span>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3} xl={3}>
              <div className="service-item">
                <img src={design} alt="Asset 1" />
                <div className="content">
                  <span>Design</span>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3} xl={3}>
              <div className="service-item">
                <img src={social} alt="Asset 1" />
                <div className="content">
                  <span>Social Media</span>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3} xl={3}>
              <div className="service-item">
                <img src={SEO} alt="Asset 1" />
                <div className="content">
                  <span>SEO</span>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3} xl={3}>
              <div className="service-item">
                <img src={socialMarketing} alt="Asset 1" />
                <div className="content">
                  <span>Paid Ads</span>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3} xl={3}>
              <div className="service-item">
                <img src={ORM} alt="Asset 1" />
                <div className="content">
                  <span>PR & ORM</span>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3} xl={3}>
              <div className="service-item">
                <img src={advertising} alt="Asset 1" />
                <div className="content">
                  <span>Influencer Marketing</span>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3} xl={3}>
              <div className="service-item">
                <img src={film} alt="Asset 1" />
                <div className="content">
                  <span>Film & Photography</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
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
                  <h1>Ready to Solve Something Together?</h1>
                  <span>If you're looking to enhance your SEO, PPC, and broader digital marketing strategies, our team is excited to engage with you. Let's start a conversation!</span>
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
              <img src={customerSupport} alt="Asset 2" className="heading-container-asset" />
            </Col>
          </Row>
        </Container>
      </div>
      <AppFooter />
    </>
  );
}

export default Services;