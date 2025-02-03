import React from "react";
import "./PartnerCard.css";

const PartnerCard = ({brandLogo, brand, title}) => {
    return (
        <div className="card">
            <div className="content">
                <div className="back">
                    <div className="back-content">
                        {brandLogo ? brandLogo : null}
                        <strong>{brand}</strong>
                    </div>
                </div>
                <div className="front">
                    <div className="img">
                        <div className="circle"></div>
                        <div className="circle" id="right"></div>
                        <div className="circle" id="bottom"></div>
                    </div>
                    <div className="front-content">
                        <small className="badge">{brand}</small>
                        <div className="description">
                            <div className="title">
                                <p className="title">
                                    {title ? title : null}
                                </p>
                            </div>
                            <p className="card-footer">30 Mins &nbsp; | &nbsp; Partners</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerCard;