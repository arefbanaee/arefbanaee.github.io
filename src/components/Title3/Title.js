import React from "react";

import "./Title3.css";

const title = props => {
  return (
    <div id="carousel-area">
      <div
        id="carousel-slider"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner" role="listbox">
          <div
            className="carousel-item active"
            style={{
              backgroundImage: "url('./images/patterns/pattern_04.jpg')"
            }}
          >
            <div className="carousel-caption text-center">
              <h2
                className="wow bounceIn animated"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  webkitAnimationDelay: "0.6s",
                  mozAnimationDelay: "0.6s",
                  animationDelay: "0.6s"
                }}
              >
                {props.name}
              </h2>
              <h3
                className="wow fadeInDown animated"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  webkitAnimationDelay: "0.3s",
                  mozAnimationDelay: "0.3s",
                  animationDelay: "0.3s"
                }}
              >
                {props.university}
              </h3>
              <h4
                className="wow fadeInUp animated"
                data-wow-delay="0.9s"
                style={{
                  visibility: "visible",
                  webkitAnimationDelay: "0.9s",
                  mozAnimationDelay: "0.9s",
                  animationDelay: "0.9s"
                }}
              >
                {props.extera}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default title;
