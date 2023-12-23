import { Link } from 'react-router-dom'
import logements from '../../datas/logements.json'
import './LogementCards.scss'

const LogementCards = () => {
  return (
    <div className="card-container">
      {logements.map((logement) => {
        return (
          <Link to={"/Logement/"+logement.id} key={logement.id} className="card-container__card">
            <div className="card-content">
              <img src={logement.cover} alt={logement.description}></img>
              <p>{logement.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default LogementCards