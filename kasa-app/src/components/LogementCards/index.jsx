import { Link } from 'react-router-dom'
import logements from '../../datas/logements.json'

export const LogementCards = () => {
  return (
    <div>
      {logements.map((logement) => {
        const titreLien = logement.title.replace(/\s+/g, '-').toLowerCase();
        return (
          <Link to={"/"+titreLien} key={logement.id}>
            <div>{logement.title}</div>
            <img src={logement.cover} alt={logement.description} />
          </Link>
        );
      })}
    </div>
  );
};

export default LogementCards