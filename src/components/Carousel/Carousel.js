import React from "react";
// import ReactDOM from "react-dom";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";
import Container from "react-bootstrap/Container";

// const styles = { height: 400, width: "100%" };

class carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true,
      images: props.images
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
    rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="text-center">
        <Container>
          <Row>
            <Col
              span={12}
              style={{
                paddingTop: "20px",
                paddingBottom: "20px",
                background: "black"
              }}
            >
              <div className="text-center">
                <RBCarousel
                  animation={true}
                  autoplay={this.state.autoplay}
                  slideshowSpeed={2000}
                  leftIcon={leftIcon}
                  rightIcon={rightIcon}
                  onSelect={this.onSelect}
                  ref={r => (this.slider = r)}
                  version={4}
                >
                  {this.state.images.map(image => (
                    <div style={{ height: 250 }}>
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={image}
                        alt="my_image"
                      />
                      />
                    </div>
                  ))}
                </RBCarousel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

/**
 *  Boostrap Component
 */
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
  <div className={`col-${props.span}`} style={props.style}>
    {props.children}
  </div>
);
// const Button = props => {
//   const { style, bsStyle, onClick } = props;
//   const className = bsStyle ? `btn btn-${bsStyle}` : "btn";
//   return (
//     <button style={style} className={className} onClick={onClick}>
//       {props.children}
//     </button>
//   );
// };

// ReactDOM.render(<Demo />, document.getElementById("Demo"));

export default carousel;
