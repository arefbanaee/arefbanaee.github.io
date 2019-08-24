import React from "react";

import "./Skill.css";

import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";

const skill = props => {
  let Icon;
  Icon = props.icon;
  if (props.svg != null) {
    Icon = props.svg;
  }
  return (
    <div className="skill">
      <CircularProgressbarWithChildren
        value={props.value}
        styles={buildStyles({
          rotation: 0,
          strokeLinecap: "round",
          textSize: "1rem",
          pathTransitionDuration: 2,
          pathTransition: "none",
          pathColor: `rgb(28, 188, 173)`,
          trailColor: "rgba(128, 128, 128,0.5)",
          backgroundColor: "#3e98c7"
        })}
      >
        <div className="skill__icon">
          <Icon back1="gray" back2="black" color="white" />
        </div>
        {/* <p className="skill__title">{props.title}</p> */}
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default skill;
