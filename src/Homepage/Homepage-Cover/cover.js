import React, { useEffect, useRef, useState } from "react";
import asset1 from "./asset1.jpg";
import { Button } from "react-bootstrap";

import "./cover.css";

function Cover({ threshold = 0.1 }) {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current; // Store in a variable

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio >= threshold) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false); // Remove this if animation should only play once
                }
            },
            { threshold }
        );

        observer.observe(section);

        return () => {
            if (section) {
                observer.unobserve(section); // Use the stored reference
            }
        };
    }, [threshold]);

    return (
        <div className="cover-container" ref={sectionRef}>
            <img src={asset1} alt="Asset 1" className={`cover-background ${isVisible ? "animate-slideIn" : ""}`} />

            <div className="cover-container-01">
                <div className={`cover-container-01-h1 ${isVisible ? "animate-drop-h1" : ""}`}>
                    <h1 className="project-waving-text text-heading_medium">Framing People Centric Experiences</h1>
                </div>

                <span className={`cover-container-01-span text-color_light ${isVisible ? "animate-drop-span" : ""}`}>
                    Our marketing strategies go beyond driving campaigns for brands. With deep understanding of human behavior, we forge connections that help brands speak to their audience individually. We breathe life into your brand with meaningful innovation and creative communication.
                </span>

                <Button variant="outline-light" className={`cover-container-01-button ${isVisible ? "animate-drop-button" : ""}`}>
                    Explore {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </Button>
            </div>
        </div>
    );
}

export default Cover;