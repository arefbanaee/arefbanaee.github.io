import React from "react";

import "./SideDrawerAvatar.css";

const sideDrawerAvata = props => (
  <div className="side-drawer-avatar">
    <ul>
      <li className="side-drawer-avatar__image">
        <img src={props.image} alt="side-drawer__image" />
      </li>
      <li className="side-drawer-avatar__name">{props.name}</li>
      <li className="side-drawer-avatar__university">{props.university}</li>
      <li className="side-drawer-avatar__field">{props.field}</li>
    </ul>
  </div>
);

export default sideDrawerAvata;
