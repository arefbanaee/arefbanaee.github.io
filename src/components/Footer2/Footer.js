import React from "react";

import "./Footer.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import {
  faLinkedinIn,
  faSkype,
  faResearchgate,
  faInstagram
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
      <Col md={{ span: 12 }} xs={{ span: 12 }}>
        <div className="footer__social-links">Social Links</div>
      </Col>
    </Row>
    <Row>
      <Col md={{ offset: 0, span: 1 }} xs={{ offset: 3, span: 2 }}>
        <div>
          <p className="text-center">
            <FooterItemIcon link="skype:aref.banaee" icon={faSkype} />
          </p>
        </div>
      </Col>
      <Col lg={{ span: 1 }} xs={{ span: 2 }}>
        <p className="text-center">
          <FooterItemIcon
            link="https://www.linkedin.com/in/arefbanaee/"
            icon={faLinkedinIn}
          />
        </p>
      </Col>
      <Col lg={{ span: 1 }} xs={{ span: 2 }}>
        <p className="text-center">
          <FooterItemIcon
            link="https://www.researchgate.net/profile/Aref_Banaee"
            icon={faResearchgate}
          />
        </p>
      </Col>
      <Col lg={{ span: 1 }} xs={{ span: 2 }}>
        <p className="text-center">
          <FooterItemIcon
            link="https://www.instagram.com/rf.bne/"
            icon={faInstagram}
          />
        </p>
      </Col>
    </Row>
  </div>
);

const FooterItemEmail = props => (
  <div>
    <Row>
      <Col md={{ span: 12 }} xs={{ span: 6 }}>
        <div className="footer__items-title">{props.title}</div>
      </Col>
      <Col md={{ span: 12 }} xs={{ span: 6 }}>
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
      <Col md={{ span: 12 }} xs={{ span: 6 }}>
        <div className="footer__items-title">{props.title}</div>
      </Col>
      <Col md={{ span: 12 }} xs={{ span: 6 }}>
        <div className="footer__items-content">
          <a href={props.link}>{props.address}</a>
        </div>
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
                email="aref.banaee@gmail.com"
                link="mailto:aref.banaee@gmail.com"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <FooterItemEmail
                title="Academic Email"
                email="aref.banaee@ut.ac.ir"
                link="mailto:aref.banaee@ut.ac.ir"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <FooterItemAddress
                title="Address"
                address="Tehran, Iran"
                link="https://www.google.com/maps/place/Mechanical+Engineering+Department,+University+of+Tehran/@35.7246096,51.3861709,17.04z/data=!4m12!1m6!3m5!1s0x3f8e00d5709a32b1:0x7c675d0ffc9b0681!2sUniversity+of+Tehran,+College+of+Engineering!8m2!3d35.7242279!4d51.3883588!3m4!1s0x0:0xb4e0ff8eaf79bf7a!8m2!3d35.725498!4d51.3862377"
              />
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
