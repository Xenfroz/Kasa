import { useParams } from 'react-router-dom';
import logementsListe from '../../datas/logements.json';
import Carousel from '../../components/Carousel'
import './Logement.scss'

const Logement = () => {
  const { id } = useParams();

  const lgmt = logementsListe.find(
    (logement) => logement.id === id
  );

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
          <p>{lgmt.host.name}</p>
          <img src={lgmt.host.picture} alt={'Photo de profil de '+lgmt.host.name}></img>
        </div>
      </div>
      <p>{lgmt.description}</p>
    </div>
  );
};

export default Logement;
