import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";

import "./NoResult.scss";

const NoResult: React.FC<any> = () => {
  return (
    <div className="error-container">
      <FontAwesomeIcon icon={faFaceSadTear} size={window.innerWidth > 576 ? '10x' : '5x'} className="icon-error mb-3"/>
      <div className="msg">We weren't able to find a quote.</div>
    </div>
  )
};

export default NoResult;