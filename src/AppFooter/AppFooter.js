import React from "react";
import "./AppFooter.css";
import facebook from "../Icons/facebook.svg";
import instagram from "../Icons/instagram.svg";
import linkedin from "../Icons/linkedin.svg";
import twitter from "../Icons/twitter.svg";
import socialLinks from "../Config/socialLinks";

const AppFooter = () => {
    const handleRedirect = (url) => {
        window.open(url, "_blank"); // Open link in a new tab
    };
    return (
        <div className="app-footer_container">
            <div className="app-footer_icon-container">
                <img src={facebook} alt="facebook" height={25} width={25} onClick={() => handleRedirect(socialLinks.facebook)} />
                <img src={instagram} alt="istagram" height={25} width={25} onClick={() => handleRedirect(socialLinks.instagram)} />
                <img src={twitter} alt="twitter" height={25} width={25} onClick={() => handleRedirect(socialLinks.twitter)} />
                <img src={linkedin} alt="linkedin" height={30} width={30} onClick={() => handleRedirect(socialLinks.linkedin)} />
            </div>
            <span>© 2024 Project 1. All Rights Reserved.</span>
        </div>
    );
};

export default AppFooter;