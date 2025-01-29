import facebook from "../../Icons/facebook.svg";
import instagram from "../../Icons/instagram.svg";
import linkedin from "../../Icons/linkedin.svg";
import twitter from "../../Icons/twitter.svg";
import "./socialhandle.css";

function SocialHandles() {
    return (
        <div className="social-media-handle">
            <img src={facebook} alt="facebook" height={25} width={25} className="social-media-icon icon-1"/>
            <img src={instagram} alt="istagram" height={25} width={25} className="social-media-icon icon-2"/>
            <img src={twitter} alt="twitter" height={25} width={25} className="social-media-icon icon-3"/>
            <img src={linkedin} alt="linkedin" height={30} width={30} className="social-media-icon icon-4"/>
        </div>
    );
}

export default SocialHandles;