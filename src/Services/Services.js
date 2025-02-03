import "./Services.css";
import React from "react";

import AppFooter from "../AppFooter/AppFooter";
import ServicesCover from "./Services-Cover/ServicesCover";
import OurServices from "./Services-OurServices/OurServices";
import Partners from "../Homepage/Homepage-Partners/HomepagePartners";
import RequestCallback from "./Services-RequestCallback/RequestCallback";
import SocialHandle from "../Utilities/SocialHandle/socialhandle";
import AnimatedSection from "../Utilities/AnimatedSection/AnimatedSection";

function Services() {
  return (
    <>
      <ServicesCover />
      <OurServices />
      <br />
      <br />
      <AnimatedSection>
        <h1 className="text-heading_medium project-waving-text" style={{ textAlign: "center" }}>Some of the industry sectors we partner with</h1>
      </AnimatedSection>
      <Partners />
      <RequestCallback />
      <AppFooter />
      <SocialHandle />
    </>
  );
}

export default Services;