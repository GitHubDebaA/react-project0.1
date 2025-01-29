import React from "react";
import "./AppFooter.css";
import facebook from "../Icons/facebook.svg";
import instagram from "../Icons/instagram.svg";
import linkedin from "../Icons/linkedin.svg";
import twitter from "../Icons/twitter.svg";

const AppFooter = () => {
    return (
        <div className="app-footer_container">
            <div className="app-footer_icon-container">
                <img src={facebook} alt="facebook" height={25} width={25} />
                <img src={instagram} alt="istagram" height={25} width={25} />
                <img src={twitter} alt="twitter" height={25} width={25} />
                <img src={linkedin} alt="linkedin" height={30} width={30} />
            </div>
            <span>© 2024 Project 1. All Rights Reserved.</span>
        </div>
    );
};

export default AppFooter;