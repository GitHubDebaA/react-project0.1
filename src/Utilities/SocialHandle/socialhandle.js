import React, { useEffect, useState } from "react";
import facebook from "../../Icons/facebook.svg";
import instagram from "../../Icons/instagram.svg";
import linkedin from "../../Icons/linkedin.svg";
import twitter from "../../Icons/twitter.svg";
import "./socialhandle.css";
import socialLinks from "../../Config/socialLinks";

function SocialHandles() {
    const [isVisible, setIsVisible] = useState(true);
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;

            // If user reaches the bottom, hide the component
            if (scrollTop + windowHeight >= fullHeight - 10) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleRedirect = (url) => {
        window.open(url, "_blank"); // Open link in a new tab
    };

    return (
        <div className={`social-media-handle hide-container ${isVisible ? "show" : "hide"}`}>
            <img src={facebook} alt="facebook" height={25} width={25} className="social-media-icon icon-1" onClick={() => handleRedirect(socialLinks.facebook)} />
            <img src={instagram} alt="istagram" height={25} width={25} className="social-media-icon icon-2" onClick={() => handleRedirect(socialLinks.instagram)} />
            <img src={twitter} alt="twitter" height={25} width={25} className="social-media-icon icon-3" onClick={() => handleRedirect(socialLinks.twitter)} />
            <img src={linkedin} alt="linkedin" height={30} width={30} className="social-media-icon icon-4" onClick={() => handleRedirect(socialLinks.linkedin)} />
        </div>
    );
}

export default SocialHandles;