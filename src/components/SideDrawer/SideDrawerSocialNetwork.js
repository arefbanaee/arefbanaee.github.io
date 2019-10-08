import React from "react";

import "./SideDrawerSocialNetwork.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialNetwork = props => (
  <div className="social-network">
    <a href={props.link}>
      <button className="social-network__button">
        <FontAwesomeIcon icon={props.icon} />
      </button>
    </a>
  </div>
);

export default socialNetwork;
