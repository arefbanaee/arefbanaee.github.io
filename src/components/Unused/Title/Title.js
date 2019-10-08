import React from "react";

import "./Title.css";

const title = props => (
  <div className="title">
    <ul>
      <li className="title__infos">
        {/* <ul> */}
        {/* <li> */}
        <p className="title__name">{props.name}</p>
        {/* </li> */}
        {/* <li> */}
        <p className="title__university">{props.university}</p>
        {/* </li> */}
        {/* <li> */}
        <p className="title__field">{props.field}</p>
        {/* </li> */}
        {/* <li> */}
        <p className="title__extera">{props.extera}</p>
        {/* </li> */}
        {/* </ul> */}
      </li>
    </ul>
  </div>
);

export default title;
