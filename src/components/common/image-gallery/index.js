import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { ImageGalleryStyled } from './styles';

import { Fullscreen, LeftNav, RightNav } from "./styles";

import fullscreenIcon from "../../../assets/images/fullscreen-icon.png";
import exitFullscreen from "../../../assets/images/exit-fullscreen.png";

const CarGallery = ({ images, showFullscreenButton }) => {
  const renderFullScreenButton = (onClick, isFullscreen) => {
    return (
      <div className = 'fullscreen-button-container'>
        <Fullscreen
          type="button"
          className={`image-gallery-fullscreen-button${isFullscreen ? "active" : ""} handOnHover`}
          onClick={onClick} >
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
        onClick={onClick} />
    );
  };

  const renderRightNav = (onClick, disabled) => {
    return (
      <RightNav
        className='image-gallery-custom-right-nav'
        disabled={disabled}
        onClick={onClick} />
    )
  };
  
  // State
  const [items, setItems] = useState([])
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    if(images[0]) {
      setItems([{original: images[0], thumbnail: images[0]}]);
    };
  }, [images]);

  return (
    <ImageGalleryStyled>
      <ImageGallery
        startIndex={0}
        showFullscreenButton={showFullscreenButton ? showFullscreenButton : false}
        additionalClass='image-gallery-container'
        showThumbnails={false}
        items={items}
        renderFullscreenButton={renderFullScreenButton}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
        showPlayButton={false} />
    </ImageGalleryStyled>
  );
};

export default CarGallery;