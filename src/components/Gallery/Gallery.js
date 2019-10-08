import React from "react";

import { Gallery, GalleryImage } from "react-gesture-gallery";
import "./Gallery.css";

function MyGallery(props) {
  let enableKeyboard = false,
    enableControls = false,
    enableIndicators = false,
    slide_delay = 2500;
  if (props.enableKeyboard != null) enableKeyboard = props.enableKeyboard;
  if (props.enableControls != null) enableControls = props.enableControls;
  if (props.enableIndicators != null) enableIndicators = props.enableIndicators;
  if (props.delay != null) slide_delay = props.delay;

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % props.images.length);
    }, slide_delay);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Gallery
      className="gallery"
      enableKeyboard={enableKeyboard}
      enableControls={enableControls}
      enableIndicators={enableIndicators}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {props.images.map(image => (
        <GalleryImage
          objectFit="contain"
          src={image.src}
          className="gallery-image"
        />
        // <p>{image.src}</p>
      ))}
    </Gallery>
  );
}

export default MyGallery;
