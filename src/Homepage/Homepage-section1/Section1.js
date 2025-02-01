import "./section1.css";
import AnimatedSection from "../../Utilities/AnimatedSection/AnimatedSection";
import HomepagePartners from "../Homepage-Partners/HomepagePartners";
function Section1() {
    return (
        <>
            <div className="section-container">
                <AnimatedSection>
                    <div className='double-struck-text text-heading_large'>Pixel to People</div>
                </AnimatedSection>
                <br/>
                <br/>
                <AnimatedSection>
                    <h1 style={{ textAlign: 'center' }}>Weaving Narratives, Experiences and Connection.</h1>
                    <h3 className="project-waving-text" style={{ textAlign: 'center' }}>In a world saturated with information, we understand that your brand isn't just a product or service - it's a story waiting to be told.</h3>
                </AnimatedSection>
                <HomepagePartners />
            </div>
        </>
    );
}
export default Section1;