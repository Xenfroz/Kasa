import { useParams, Navigate } from 'react-router-dom';
import logementsListe from '../../datas/logements.json';
import Carousel from '../../components/Carousel'
import CollapsingElement from '../../components/CollapsingElement';
import Rating from '../../components/Rating'
import './Logement.scss'

const Logement = () => {
  const { id } = useParams();

  const lgmt = logementsListe.find(
    (logement) => logement.id === id
  );

  if (!lgmt) {
    return <Navigate to="/error" />;
  }

  const equipmentItems =  lgmt.equipments.join('<br />') //corriger rooting error

  return (
    <div className='logement-wrapper'>
      <Carousel imagesGalerie={lgmt.pictures}></Carousel>
      <div className='info-wrapper'>
        <div className='lgmt-info'>
          <h2>{lgmt.title}</h2>
          <p>{lgmt.location}</p>
          <ul>
            {lgmt.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className='owner-rating'>
          <div className='host'>
            <p>{lgmt.host.name}</p>
            <img src={lgmt.host.picture} alt={'Photo de profil de '+lgmt.host.name}></img>
          </div>
          <Rating rating={lgmt.rating}></Rating>
        </div>
      </div>
      <div className='details'>
        <CollapsingElement titre={'Description'} texte={lgmt.description}></CollapsingElement>
        <CollapsingElement titre={'Équipements'} texte={equipmentItems}></CollapsingElement>
      </div>
    </div>
  );
};

export default Logement;
