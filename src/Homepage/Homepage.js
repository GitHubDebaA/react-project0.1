import Cover from "./Homepage-Cover/cover";
import HomepageSection1 from "./Homepage-section1/Section1";
import HomepageSection2 from "./Homepage-Section2/HomepageSection2";
import SocialHandle from "../Utilities/SocialHandle/socialhandle";

function Homepage() {
    return (
        <>
            <Cover />
            <HomepageSection1 />
            <HomepageSection2 />
            <SocialHandle />
        </>
    );
}

export default Homepage;