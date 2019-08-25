import React from "react";

import "./Project.css";

const project = props => {
  let paper, github;
  let responsive_big, responsive_small;
  if (props.paper != null) {
    paper = <a href={props.paper}>[Paper]</a>;
  }
  if (props.github != null) {
    github = <a href={props.github}>[Github]</a>;
  }

  responsive_big = (
    <ul className="project large">
      <li className="project__image large">
        <img src={props.image} alt={props.title} />
      </li>
      <li className="project__info">
        <ul className="project__content">
          <li className="project__title large">{props.title}</li>
          <li className="project__explanation large">
            <p>{props.explanation}</p>
          </li>
          <li className="project__refereces large">
            {paper}
            {github}
          </li>
        </ul>
      </li>
    </ul>
  );

  responsive_small = (
    <ul className="project small">
      <li className="project__image small">
        <img src={props.image} alt={props.title} />
      </li>
      <li className="project__title small">{props.title}</li>
      <li className="project__explanation small">
        <p>{props.explanation}</p>
      </li>
      <li className="project__refereces small">
        {paper}
        {github}
      </li>
    </ul>
  );

  return (
    <div>
      {responsive_small}
      {responsive_big}
    </div>
  );
};

export default project;
