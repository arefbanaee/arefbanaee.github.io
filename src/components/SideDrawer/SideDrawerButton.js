import React from "react";

import "./SideDrawerButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const sideDrawerButton = props => {
  return (
    <button className="side-drawer-button">
      <div className="side-drawer-button__icon">
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div className="side-drawer-button__line" />
      <div className="side-drawer-button__content">{props.content}</div>
    </button>
  );
};

export default sideDrawerButton;
