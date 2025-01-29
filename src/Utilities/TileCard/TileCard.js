import React from "react";
import "./TileCard.css";

const TileCard = ({ heading, message, illustration }) => {
    return (
        <div className="tile-card">
            {illustration ? illustration : null}
            <p class="text-body_medium project-waving-text tile-card__title">{heading}</p>
            <div className="tile-card__content">
                <p className="text-body_medium" style={{fontWeight: 700}}>{heading}</p>
                <p className="tile-card__description text-body_small text-color_light">{message}</p>
            </div>
        </div>
    );
};

export default TileCard;