import React from "react";

import "./about.css";

const Bold_content = props => (
  <span style={{ fontWeight: "bold" }}>{props.content}</span>
);

const cv_path = "./documents/cv/aref_banaee_cv.pdf";

const about = props => (
  <div>
    <p style={{ textIndent: "3rem" }}>
      I am a B.S. student at the{" "}
      <Bold_content content="School of Mechanical Engineering, University of Tehran" />{" "}
      , Iran.
    </p>
    <p style={{ textIndent: "3rem" }}>
      My research interests lie primarily in the area of
      <Bold_content content=" Orthopedic Biomechanics" /> and
      <Bold_content content=" Prosthetics" />. I am particularly interested in{" "}
      <Bold_content content="Total Knee Replacement" />.
    </p>
    <p style={{ textIndent: "3rem" }}>
      You can download my{" "}
      <span className="about__cv-link">
        <a href={cv_path} target="_blank">
          CV
        </a>
      </span>{" "}
      from here.
    </p>
  </div>
);

export default about;
