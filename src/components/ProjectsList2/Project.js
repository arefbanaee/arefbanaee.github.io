import React from "react";

import "./Project.css";

// import Media from "react-bootstrap/Media";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// const project2 = props => (
//   <Media as="li">
//     <img className="project__image" src={props.image} alt={props.title} />
//     <Media.Body>
//       <h5>{props.title}</h5>
//       <p>{props.explanation}</p>
//     </Media.Body>
//   </Media>
// );

const project = props => {
  let paper, github;
  // let responsive_big, responsive_small;
  if (props.paper != null) {
    paper = <a href={props.paper}>[Paper]</a>;
  }
  if (props.github != null) {
    github = <a href={props.github}>[Github]</a>;
  }
  return (
    <div className="project">
      <Row>
        <Col lg={{ span: 3 }} xs={{ span: 12 }}>
          <div className="project__image  text-center">
            <img src={props.image} alt={props.title} />
          </div>
        </Col>
        <Col lg={{ span: 6 }}>
          <div className="project__content">
            <Row>
              <Col>
                <h5 className="project__title">
                  <strong>{props.title}</strong>
                </h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="project__explanation">{props.explanation}</p>
              </Col>
            </Row>
            <Row>
              <Col className="project__link">
                {paper}
                {github}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default project;
