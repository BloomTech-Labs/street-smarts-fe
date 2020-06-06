import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

import { Fullscreen, LeftNav, RightNav } from "./styles";
import fullscreenIcon from "../../../assets/images/fullscreen-icon.png";
import exitFullscreen from "../../../assets/images/exit-fullscreen.png";

const CarGallery = ({ images }) => {
  const [fullscreen, setFullscreen] = useState(false);
  const renderFullScreenButton = (onClick, isFullscreen) => {
    return (
      <div className = 'fullscreen-button-container'>
        <Fullscreen
          type="button"
          className={`image-gallery-fullscreen-button${isFullscreen ? "active" : ""} handOnHover`}
          onClick={onClick}
        >
          <img src={fullscreen ? exitFullscreen : fullscreenIcon} alt="View fullscreen" onClick={() => setFullscreen(!fullscreen)}/>
        </Fullscreen>
      </div>
    );
  };

  const renderLeftNav = (onClick, disabled) => {
    return (
      <LeftNav
        className='image-gallery-custom-left-nav'
        disabled={disabled}
        onClick={onClick}
      />
    );
  };

  const renderRightNav = (onClick, disabled) => {
    return(
      <RightNav
        className='image-gallery-custom-right-nav'
        disabled={disabled}
        onClick={onClick}
      />
    )
  }
  // State
  const [items, setItems] = useState([])

  useEffect(() => {
    if(images) {
    images.map((img, index) => {
      if(index === 0) {
      setItems([...items, {original: img, thumbnail: img}]);
      }
    })
  };  
  }, [images]);
  return (
    <ImageGallery
      startIndex={0}
      additionalClass='image-gallery-container'
      showThumbnails={false}
      items={items}
      renderFullscreenButton={renderFullScreenButton}
      renderLeftNav={renderLeftNav}
      renderRightNav={renderRightNav}
      showPlayButton={false}
    />
  );
};

export default CarGallery;
