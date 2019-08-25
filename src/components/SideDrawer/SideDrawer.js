import React from "react";

import "./SideDrawer.css";
import SideDrawerButton from "./SideDrawerButton";
import SideDrawerAvatar from "./SideDrawerAvatar";
import SocialNetwork from "./SideDrawerSocialNetwork";
import {
  faEnvelope,
  faInfo,
  faProjectDiagram,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <div>
        <ul>
          <li>
            <SideDrawerAvatar
              image="./images/avatar/avatar.jpg"
              name="Ali Hedayatnia"
              university="University of Tehran"
              field="Computer Architecture"
            />
          </li>
          <li>
            <SideDrawerButton content="About" icon={faInfo} />
          </li>
          <li>
            <SideDrawerButton content="Time-line" icon={faCalendarAlt} />
          </li>
          <li>
            <SideDrawerButton content="Projects" icon={faProjectDiagram} />
          </li>
        </ul>
      </div>
      {/* <div className="side-drawer__spacer" /> */}
      <div className="side-drawer__footer">
        <footer>
          <ul>
            <li>
              <SocialNetwork link="/" icon={faListAlt} />
            </li>
            <li>
              <SocialNetwork
                link="mailto:alihedayatnia@ut.ac.ir"
                icon={faEnvelope}
              />
            </li>
            <li>
              <SocialNetwork
                link="https://www.linkedin.com/in/alihedayatnia"
                icon={faLinkedinIn}
              />
            </li>
            <li>
              <SocialNetwork
                link="https://github.com/ahedayat"
                icon={faGithub}
              />
            </li>
          </ul>
        </footer>
      </div>
    </nav>
  );
};

export default sideDrawer;
