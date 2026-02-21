// export default Housing;

import { useParams, Navigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import logements from "../data/logements.json";
import "./Housing.scss";
import Rating from "../components/Rating";
// Déclaration du composant Housing
function Housing() {
  // Récupération de l'ID du logement depuis l'URL
  const { id } = useParams();

  // Recherche du logement correspondant à l'ID
  const logement = logements.find((item) => item.id === id);

  // Si le logement n'existe pas → redirection vers la page 404
  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  // Conversion de la note du logement en nombre (elle est stockée en string dans le JSON)
  const rating = Number(logement.rating);

  return (
    <div className="housing">
      {/* Carrousel */}
      <Carousel images={logement.pictures} />

      {/* Header logement */}
      <div className="housing-header">
        <div className="housing-info">
          <h1 className="housing-title">{logement.title}</h1>
          <p className="housing-location">{logement.location}</p>

          <div className="housing-tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="housing-right">
          {/* Host */}
          <div className="housing-host">
            <p className="host-name">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-picture"
            />
          </div>

          {/* Rating */}
          <div className="housing-rating">
            <Rating value={rating} />
          </div>
        </div>
      </div>

      {/* Collapses */}
      <div className="housing-collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equip, index) => (
              <li key={index}>{equip}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Housing;
