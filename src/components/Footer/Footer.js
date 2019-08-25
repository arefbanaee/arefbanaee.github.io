import React from "react";

import "./Footer.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import {
  faLinkedinIn,
  faGithub,
  faSkype
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterItemIcon = props => (
  <div className="footer__social-links">
    <a href={props.link}>
      <FontAwesomeIcon icon={props.icon} />
    </a>
  </div>
);

const FooterItemSocialLinks = props => (
  <div>
    <Row>
      <Col>Social Links</Col>
    </Row>
    <Row>
      <Col lg={{ span: 1 }}>
        <div>
          <p>
            <FooterItemIcon link="skype:a.hedayat.m" icon={faSkype} />
          </p>
        </div>
      </Col>
      <Col lg={{ span: 1 }}>
        <FooterItemIcon
          link="https://www.linkedin.com/in/alihedayatnia"
          icon={faLinkedinIn}
        />
      </Col>
      <Col lg={{ span: 1 }}>
        <FooterItemIcon link="https://github.com/ahedayat" icon={faGithub} />
      </Col>
    </Row>
  </div>
);

const FooterItemEmail = props => (
  <div>
    <Row>
      <Col>
        <div className="footer__items-title">{props.title}</div>
      </Col>
    </Row>
    <Row>
      <Col>
        <div className="footer__items-content">
          <a href={props.link}>{props.email}</a>
        </div>
      </Col>
    </Row>
  </div>
);

const FooterItemAddress = props => (
  <div>
    <Row>
      <Col className="footer__items-title">{props.title}</Col>
    </Row>
    <Row>
      <Col className="footer__items-content">
        <a href={props.link}>{props.address}</a>
      </Col>
    </Row>
  </div>
);

const footer = props => (
  <div className="footer">
    <Container>
      <Row>
        <Col
          lg={{ offset: 1, span: 2 }}
          className="footer__contact text-center"
        >
          Contact
        </Col>
        <Col lg={{ offset: 1, span: 4 }} className="footer__item">
          <Row>
            <Col>
              <FooterItemEmail
                title="Email"
                email="a.hedayat.m@gmail.com"
                link="mailto:a.hedayat.m@gmail.com"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <FooterItemEmail
                title="Academic Email"
                email="alihedayatnia@ut.ac.ir"
                link="mailto:alihedayatnia@ut.ac.ir"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <FooterItemAddress title="Address" address="Ghayen, Iran" />
            </Col>
          </Row>
        </Col>
        <Col lg={{ offset: 0, span: 4 }}>
          <FooterItemSocialLinks />
        </Col>
      </Row>
    </Container>
  </div>
);

export default footer;
