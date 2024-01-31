import { useState } from 'react';
import './CollapsingElement.scss';
import arrow from '../../assets/arrow.png';

function CollapsingElement({ titre, texte }) {
  const [isRotated, setIsRotated] = useState(false);

  const arrowClick = () => {
    setIsRotated((prevRotation) => !prevRotation);
  };

  return (
    <div className="ce-wrapper">
      <div className="ce-title">
        <p>{titre}</p>
        <img src={arrow} alt='flèche' className={isRotated ? 'rotated' : ''} onClick={arrowClick}></img>
      </div>
      <div className={isRotated ? 'ce-text ce-expanded' : 'ce-text'}>
        <div id='text-container' className={isRotated ? 'expanded' : ''}>
          {Array.isArray(texte) ? (
            texte.map((word, index) => (
              <p key={index}>
                {word}
              </p>
            ))
          ) : (
            <p>{texte}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CollapsingElement;
