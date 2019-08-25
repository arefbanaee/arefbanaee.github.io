import React from "react";

import "./ProjectsList.css";
import Project from "./Project";
import projectsInfo from "../../infos/projects/projects";

const projectsList = props => (
  <div>
    {projectsInfo.map(projectInfo => (
      <div>
        <Project
          image={projectInfo.image}
          title={projectInfo.title}
          explanation={projectInfo.explanation}
          paper={projectInfo.paper}
          github={projectInfo.github}
        />
      </div>
    ))}
  </div>
);

export default projectsList;
