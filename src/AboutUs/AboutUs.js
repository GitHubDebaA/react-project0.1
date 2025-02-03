import "./AboutUs.css";
import { Container, Row, Col } from "react-bootstrap";
import Relationships from "./Relationships.svg";
import AppFooter from "../AppFooter/AppFooter";
import AnimatedSection from "../Utilities/AnimatedSection/AnimatedSection";
import SocialHandle from "../Utilities/SocialHandle/socialhandle";

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
                <AnimatedSection>
                  <h1 className="project-waving-text text-heading_medium">We Know You!</h1>
                </AnimatedSection>
                <AnimatedSection>
                  <h1 className="project-waving-text text-heading_medium">You Know Us!</h1>
                </AnimatedSection>
                <br/>
                <AnimatedSection>
                  <div className="text-color_default text-heading_small">In this age of automated conversations, we noticed that the ‘human touch’ had sneaked out while no one was looking.</div>
                </AnimatedSection>
                <br/>
                <AnimatedSection>
                  <span className="text-color_default text-body_small" style={{ display: 'block', textAlign: 'justify' }}>Project 1-the agency way represents the gap between what the Brands produce and what the Consumers actually want. We offer 360-degree digital marketing solutions to help you build your brand from the scratch. In this complex digital landscape, our team of creative and passionate young people build brands, digital experiences, and products for the companies of tomorrow.</span>
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
              <img src={Relationships} alt="Asset 1" className="heading-container-asset" />
            </AnimatedSection>
          </Col>
        </Row>
      </Container>
      <div style={{ margin: '2rem' }}>
        <AnimatedSection>
          <h1 className="project-waving-text text-heading_small">Why Project 1?</h1>
        </AnimatedSection>
        <AnimatedSection>
          <span className="text-color_default text-body_small" style={{ display: 'block', textAlign: 'justify', paddingTop: '10px' }}>We believes in solving your problems rather than just answering them. We never back down from taking any challenges, after all working hard is our best-defined nature. We pour our heart and soul to each and every project no matter the size is. At TAW, there are no half measure. 'IFs' and 'BUTs" are not in our dictionary. We first Assess, then Strategize and then Come up with the plan best suited for your Brand. TAW breathe life into your Brand with meaningful innovation and creative communication.</span>
        </AnimatedSection>
      </div>
      <div style={{ margin: '2rem' }}>
        <AnimatedSection>
          <h1 className="project-waving-text text-heading_small">We are not just a typical agency: we are more than that</h1>
        </AnimatedSection>
        <AnimatedSection>
          <span className="text-color_default text-body_small" style={{ display: 'block', textAlign: 'justify', paddingTop: '10px' }}>Think of TAW as an Extension of your Team, sharing the same Dreams and same Goals. We offer multi-dimensional marketing services to drive the attention and visibility your Brand needs. TAW turns your ideas into reality so you can also build your business like a pro. With the vast and ever-evolving marketing trends, it is a challenge for Brands to keep up with the new technology and crazes. This is where our team comes into play. Our team of Creative and Passionate people will help you create the most effective marketing strategy to supply ideal number of consumer touch points to drive lead and sales. Be it Media Planning or Buying, PR or Crisis Management, Creative, Content, Social Media, Search Engine Optimization and Management, Influencer Marketing, Video Production, Programmatic Advertising or more, we are here to cater to your needs and requirements in the most effective and long term ways to possible.</span>
        </AnimatedSection>
      </div>
      <SocialHandle />
      <AppFooter />
    </div>
  );
}

export default AboutUs;