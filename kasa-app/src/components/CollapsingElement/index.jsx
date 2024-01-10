import { useState } from 'react';
import './CollapsingElement.scss'
import arrow from '../../assets/arrow.png';


function CollapsingElement ({ titre, texte }) {
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
                <p className={isRotated ? 'expanded' : ''} dangerouslySetInnerHTML={{ __html: texte }}></p>
            </div>
        </div>
    );
}

export default CollapsingElement