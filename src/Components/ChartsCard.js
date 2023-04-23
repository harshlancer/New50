import React from "react";
import "./ChartsCard.css";
function ChartsCard(props) {
  const {
    thumbnail,
    title,
    description,
    currentPrice,
    openPrice,
    previousClose,
  } = props;

  return (
    <div className="chartscard">
      <img
        className="chartscard__thumbnail"
        src={thumbnail}
        alt="Chart thumbnail"
      />
      <div className="chartscard__details">
        <h2 className="chartscard__title">{title}</h2>
        <p className="chartscard__description">{description}</p>
        <div className="chartscard__stats">
          <div className="chartscard__stat">
            <span className="chartscard__stat-label">Current Price:</span>
            <span className="chartscard__stat-value">{currentPrice}</span>
          </div>
          <div className="chartscard__stat">
            <span className="chartscard__stat-label">Open Price:</span>
            <span className="chartscard__stat-value">{openPrice}</span>
          </div>
          <div className="chartscard__stat">
            <span className="chartscard__stat-label">Previous Close:</span>
            <span className="chartscard__stat-value">{previousClose}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartsCard;
