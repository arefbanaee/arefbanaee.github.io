import React from "react";
import Particles from "react-particles-js";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import "./Title.css";

const title = props => {
  // return (
  //   <div
  //     style={{
  //       position: "relative",
  //       top: 0,
  //       left: 0,
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //       backgroundColor: "#4A5674"
  //     }}
  //   >
  //     <div style={{ zIndex: "-100" }}>
  //       <Particles
  //         height={window.innerHeight}
  //         width={window.innerWidth}
  //         params={{
  //           particles: {
  //             number: {
  //               value: 100
  //             },
  //             size: {
  //               value: 4
  //             }
  //           },
  //           interactivity: {
  //             events: {
  //               onhover: {
  //                 enable: false,
  //                 mode: "repulse"
  //               }
  //             }
  //           }
  //         }}
  //       />
  //     </div>
  //     <div style={{ zIndex: "100" }}>
  //       U-Net is a network for semanitc segmentation. With this network we try
  //       to segment data of Camvid dataset and a significant result on it. Our
  //       final accuracy after 30 epochs of training was 82.3%.U-Net is a network
  //       for semanitc segmentation. With this network we try to segment data of
  //       Camvid dataset and a significant result on it. Our final accuracy after
  //       30 epochs of training was 82.3%.
  //     </div>
  //   </div>
  // );
  return (
    <div
      className="title__wrapper"
      style={{ width: "100%", height: window.innerHeight }}
    >
      <Container fluid>
        <div
          className="title__content"
          style={{ paddingTop: window.innerHeight / 3, width: "100%" }}
        >
          <Row>
            <Col
              md={{ offset: 2, span: 8 }}
              xs={{ span: 12 }}
              style={{ paddingRight: 0 }}
            >
              <div className="title__content__item title__content__name">
                {props.name}
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              md={{ offset: 2, span: 8 }}
              xs={{ span: 12 }}
              style={{ paddingRight: 0 }}
            >
              <div className="title__content__item title__content__university">
                {props.university}
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              md={{ offset: 2, span: 8 }}
              xs={{ span: 12 }}
              style={{ paddingRight: 0 }}
            >
              <div className="title__content__item title__content__extera">
                {props.extera}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="title__background" style={{ width: "100%" }}>
        <Particles
          height={window.innerHeight}
          width="100%"
          params={{
            particles: {
              number: {
                value: 100
              },
              size: {
                value: 4
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse"
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default title;
