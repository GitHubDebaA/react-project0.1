import Cover from "./Homepage-Cover/cover";
import Section1 from "./Homepage-section1/Section1";
import HomepageSection2 from "./Homepage-Section2/HomepageSection2";
import SocialHandle from "../Utilities/SocialHandle/socialhandle";
import HomepagePartners from "./Homepage-Partners/HomepagePartners";
import Carousel from "../Utilities/Carousel/Carousel";
function Homepage() {
    return (
        <>
            <Cover />
            <Section1 />
            <SocialHandle />
            <HomepagePartners />
            <HomepageSection2 />
            <br/>
            <br/>
            <br/>
            <Carousel />
        </>
    );
}

export default Homepage;