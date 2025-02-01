import React, { useEffect, useRef, useState } from "react";
import "./AnimatedSection.css"; // Import CSS file

const AnimatedSection = ({ children, threshold = 0.2, className = "" }) => {
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
        <div
            ref={sectionRef}
            className={`animated-section ${isVisible ? "appear" : ""} ${className}`}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
