import React from "react";
import "./AboutUs.css";
import { Container, Row, Col } from "react-bootstrap";
import Relationships from "./Relationships.svg";
import AppFooter from "../AppFooter/AppFooter";

function AboutUs() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col
            xs={{ order: 2, span: 12 }}
            sm={{ order: 2, span: 12 }}
            md={{ order: 1, span: 6 }}
            lg={{ order: 1, span: 6 }}
            xl={{ order: 1, span: 6 }}
          >
            <div className="about-us_heading-container-01">
              <div>
                <h1>We Know You!</h1>
                <h1>You Know Us!</h1>
                <h3 style={{ display: 'block', textAlign: 'justify' }}>In this age of automated conversations, we noticed that the ‘human touch’ had sneaked out while no one was looking.</h3>
                <span style={{ display: 'block', textAlign: 'justify' }}>Project 1-the agency way represents the gap between what the Brands produce and what the Consumers actually want. We offer 360-degree digital marketing solutions to help you build your brand from the scratch. In this complex digital landscape, our team of creative and passionate young people build brands, digital experiences, and products for the companies of tomorrow.</span>
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
            <img src={Relationships} alt="Asset 1" className="heading-container-asset" />
          </Col>
        </Row>
      </Container>
      <div style={{ margin: '2rem' }}>
        <h1>Why Project 1?</h1>
        <span style={{ display: 'block', textAlign: 'justify' }}>We believes in solving your problems rather than just answering them. We never back down from taking any challenges, after all working hard is our best-defined nature. We pour our heart and soul to each and every project no matter the size is. At TAW, there are no half measure. 'IFs' and 'BUTs" are not in our dictionary. We first Assess, then Strategize and then Come up with the plan best suited for your Brand. TAW breathe life into your Brand with meaningful innovation and creative communication.</span>
      </div>
      <div style={{ margin: '2rem' }}>
        <h1>We are not just a typical agency: we are more than that</h1>
        <span style={{ display: 'block', textAlign: 'justify' }}>Think of TAW as an Extension of your Team, sharing the same Dreams and same Goals. We offer multi-dimensional marketing services to drive the attention and visibility your Brand needs. TAW turns your ideas into reality so you can also build your business like a pro. With the vast and ever-evolving marketing trends, it is a challenge for Brands to keep up with the new technology and crazes. This is where our team comes into play. Our team of Creative and Passionate people will help you create the most effective marketing strategy to supply ideal number of consumer touch points to drive lead and sales. Be it Media Planning or Buying, PR or Crisis Management, Creative, Content, Social Media, Search Engine Optimization and Management, Influencer Marketing, Video Production, Programmatic Advertising or more, we are here to cater to your needs and requirements in the most effective and long term ways to possible.</span>
      </div>
      <AppFooter />
    </div>
  );
}

export default AboutUs;