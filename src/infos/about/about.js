import React from "react";

const Bold_content = props => (
  <span style={{ fontWeight: "bold" }}>{props.content}</span>
);

const Start_paragraph = () => <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;

const about = props => (
  <div>
    <p>
      <Start_paragraph />I am a B.S. student at the{" "}
      <Bold_content content="School of Mechanical Engineering, University of Tehran" />{" "}
      , Iran.
    </p>
    <p>
      <Start_paragraph />
      My research interests lie primarily in the area of
      <Bold_content content=" Orthopedic Biomechanics" /> and
      <Bold_content content=" Prosthetics" />. To be specific, I'm particularly
      interested in <Bold_content content="Total Knee Replacement" />.
    </p>
  </div>
);

export default about;
