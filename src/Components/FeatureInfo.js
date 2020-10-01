import React from "react";
import "./FeatureInfo.css";

function FeatureInfo({title, description}) {
  return (
    <div className="feature">
      <div className="feature__info">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default FeatureInfo;
