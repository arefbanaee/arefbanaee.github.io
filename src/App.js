import React, { Component } from "react";

// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "mdbreact/dist/css/mdb.css";
import "react-circular-progressbar/dist/styles.css";
// import {} from "react-bootstrap"

// import Toolbar from "./components/Toolbar/Toolbar";
import Toolbar from "./components/Toolbar4/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import ProjectsList from "./components/ProjectsList2/ProjectsList";
import about_images from "./infos/about/images";
import AboutContent from "./infos/about/about";
import Title from "./components/Title4/Title";
import About from "./components/About5/About";
import TimeLine from "./components/TimeLine/TimeLine";
import timeLineElements from "./infos/timeLine/elements";
import toolbar_info from "./infos/toolbar/toolbar";
// import Sidebar from "./components/Sidebar/Sidebar";
import FooterObj from "./components/Footer2/Footer";
import Skills from "./components/Skills3/SkillsList";
import Hobbies from "./components/Hobbies/HobbiesList";

const Main = () => (
  <main>
    {/* <Row>
      <Col style={{ padding: "0 0 0 0 ", margin: "0 0 0 0" }} />
    </Row> */}
    <section id="header">
      <header>
        <Row>
          <Title
            name="Aref Banaee"
            university="University of Tehran"
            field="Mechanical Engineering"
            extera="Mechanical Engineering Student, B.S."
          />
        </Row>
      </header>
    </section>
    <div className="app__others">
      {/* <Row>
        <Title
          name="Ali Hedayatnia"
          university="University of Tehran"
          field="Computer Architecture"
          extera="Deep Learning and Computer Vision Researcher"
        />
      </Row> */}
      <section id="about">
        <Row>
          <About images={about_images} Content={AboutContent} />
        </Row>
      </section>
      <section id="experiences">
        <Row>
          <TimeLine elements={timeLineElements} />
        </Row>
      </section>
      <section id="projects">
        <Row>
          <ProjectsList />
        </Row>
      </section>
      <section id="skills">
        <Row>
          <Skills />
        </Row>
      </section>
      <section id="hobbies">
        <Row>
          <Hobbies />
        </Row>
      </section>
    </div>
  </main>
);

const Footer = () => (
  <footer>
    <Row>
      <FooterObj />
    </Row>
  </footer>
);

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        {/* <Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> */}
        <div className="app__container">
          <Row>
            <Toolbar
              info={toolbar_info}
              drawerClickHandler={this.drawerToggleClickHandler}
            />
          </Row>
          {/* <Sidebar /> */}
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
