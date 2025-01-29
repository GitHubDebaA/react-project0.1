import importPartnerLogos from '../../Utilities/importPartners';
import PartnerCard from '../../Utilities/PartnerCard/PartnerCard';
import './HomepagePartners.css';

const PartnerLogos = () => {
    const partnerLogos = importPartnerLogos();
    return (
        <div className="partner-logos-container">
            {partnerLogos.map((logo, index) => (
                <PartnerCard
                    key={index}
                    title= {
                        <strong>{logo.partner}</strong>
                    }
                    brandLogo={
                        <img src={logo.src} alt={logo.name} style={{ height: "60px", width: "60px" }}/>
                    }
                    brand={logo.partner}
                />
            ))}
        </div>
    );
};

export default PartnerLogos;