import React from "react";

import "./Card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const card = props => {
  let Icon;
  if (props.title_icon == null) {
    Icon = <image src={props.title_image} />;
  } else {
    Icon = <FontAwesomeIcon icon={props.title_icon} />;
  }
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__foreground">
          <div className="card__title">
            <Icon />
          </div>
          <div className="card__content">{props.content}</div>
        </div>
        <div className="card__background">
          <div className="card__background-image">
            <img src={props.background} alt={props.background_alt} />
          </div>
          <div className="card__background-shodow-layer" />
        </div>
      </div>
    </div>
  );
};

export default card;
