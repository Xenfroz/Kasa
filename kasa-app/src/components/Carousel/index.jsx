import React, { useState } from 'react';
import previousArrow from '../../assets/previous-arrow.png';
import nextArrow from '../../assets/next-arrow.png';
import './Carousel.scss';

function Carousel({ imagesGalerie }) {
  const [galerieIndex, setGalerieIndex] = useState(0);
  const isSingleImage = imagesGalerie.length === 1;

  const previousClick = () => {
    setGalerieIndex((prevIndex) => (prevIndex === 0 ? imagesGalerie.length - 1 : prevIndex - 1));
  };

  const nextClick = () => {
    setGalerieIndex((prevIndex) => (prevIndex === imagesGalerie.length - 1 ? 0 : prevIndex + 1));
  };

  const imageActuelle = imagesGalerie[galerieIndex];

  return (
    <div className="carousel-wrapper">
      {!isSingleImage && (
        <div onClick={previousClick} className="previous">
          <img className='arrow' src={previousArrow} alt="Flèche vers la gauche" />
        </div>
      )}
      <img className='active-image' src={imageActuelle} alt="" />
      {!isSingleImage && (
        <div onClick={nextClick} className="next">
          <img className='arrow' src={nextArrow} alt="Flèche vers la droite" />
        </div>
      )}
      <p className='compteur'>{galerieIndex + 1}/{imagesGalerie.length}</p>
    </div>
  );
}

export default Carousel;
