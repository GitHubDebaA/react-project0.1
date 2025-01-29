import React from "react";
import "./cover.css";
import asset1 from "./asset1.jpg";
import { Button } from "react-bootstrap";

function Cover() {
    return (
        <div className="cover-container">
            <img src={asset1} alt="Asset 1" className="cover-background" />
            <div className="cover-container-01">
                <div className="cover-container-01-h1">
                    <h1 className="project-waving-text text-heading_medium">Framing People Centric Experiences</h1>
                </div>
                <span className="cover-container-01-span text-color_light">Our marketing strategies go beyond driving campaigns for brands. With deep understanding of human behavior, we forge connection that helps Brands to speak to their audience individually. We breathe life into your Brand with meaningful innovation and creative communication.</span>
                <Button variant="outline-light" className="cover-container-01-button">
                    Explore {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </Button>
            </div>
        </div>
    );
}

export default Cover;
