import './HomepagePartners.css';
import importPartnerLogos from '../../Utilities/importPartners';
import PartnerCard from '../../Utilities/PartnerCard/PartnerCard';
import AnimatedSection from '../../Utilities/AnimatedSection/AnimatedSection';
const PartnerLogos = () => {
    const partnerLogos = importPartnerLogos();
    return (
        <div className="partner-logos-container">
            {partnerLogos.map((logo, index) => (
                <AnimatedSection key={index}>
                    <PartnerCard
                        title={
                            <strong>{logo.partner}</strong>
                        }
                        brandLogo={
                            <img src={logo.src} alt={logo.name} style={{ height: "60px", width: "60px" }} />
                        }
                        brand={logo.partner}
                    />
                </AnimatedSection>
            ))}
        </div>
    );
};

export default PartnerLogos;