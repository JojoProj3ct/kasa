// import { useParams } from "react-router-dom";

// function Housing() {
//   const { id } = useParams();
//   return <h1>Logement {id}</h1>;
// }

// export default Housing;

// import { useParams, Navigate } from "react-router-dom";
// import data from "../data/logements.json";
// import Carousel from "../components/Carousel";
// import Collapse from "../components/Collapse";

// function Housing() {
//   const { id } = useParams();

//   const logement = data.find((item) => item.id === id);

//   // Si l'id n'existe pas → page erreur
//   if (!logement) {
//     return <Navigate to="/error" />;
//   }

//   return (
//     <>
//       <Carousel images={logement.pictures} />

//       <h1>{logement.title}</h1>
//       <p>{logement.location}</p>

//       <Collapse title="Description" content={logement.description} />
//       <Collapse title="Équipements" content={logement.equipments.join(", ")} />
//     </>
//   );
// }

// export default Housing;

// import Carousel from "../components/Carousel";

// function Housing() {
//   const images = ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg"];

//   return (
//     <>
//       <Carousel images={images} />
//     </>
//   );
// }

// export default Housing;

// import { useParams } from "react-router-dom";
// import data from "../data/logements.json";
// import Carousel from "../components/Carousel";

// function Housing() {
//   const { id } = useParams();
//   const logement = data.find((item) => item.id === id);

//   if (!logement) {
//     return <h1>Logement introuvable</h1>;
//   }

//   return (
//     <>
//       <Carousel images={logement.pictures} />
//       {/* ensuite : title, host, rating, collapse, etc */}
//     </>
//   );
// }

// export default Housing;

// import { useParams } from "react-router-dom";
// import data from "../data/logements.json";
// import Carousel from "../components/Carousel";

// function Housing() {
//   const { id } = useParams();
//   const housing = data.find((item) => item.id === id);

//   if (!housing) return <h2>Logement non trouvé</h2>;

//   return (
//     <div>
//       <Carousel images={housing.pictures} />
//       <h1>{housing.title}</h1>
//       <p>{housing.description}</p>
//       {/* autres infos comme host, rating, etc */}
//     </div>
//   );
// }

// export default Housing;

// import { useParams, Navigate } from "react-router-dom";
// import Carousel from "../components/Carousel";
// import Collapse from "../components/Collapse";
// import logements from "../data/logements.json";
// import "./Housing.scss";

// function Housing() {
//   const { id } = useParams();
//   const logement = logements.find((item) => item.id === id);
//   const rating = Number(logement.rating);
//   if (!logement) {
//     // Si le logement n'existe pas, redirige vers la page 404
//     return <Navigate to="/404" replace />;
//   }

//   return (
//     <div className="housing">
//       {/* Carrousel */}
//       <Carousel images={logement.pictures} />

//       {/* Header logement */}
//       <div className="housing-header">
//         <div className="housing-info">
//           <h1 className="housing-title">{logement.title}</h1>
//           <p className="housing-location">{logement.location}</p>
//           <div className="housing-tags">
//             {logement.tags.map((tag) => (
//               <span key={tag} className="tag">
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="housing-host">
//           <div className="host-name">{logement.host.name}</div>
//           <img
//             src={logement.host.picture}
//             alt={logement.host.name}
//             className="host-picture"
//           />
//         </div>

//         <div className="housing-rating">
//           {Array.from({ length: 5 }).map((_, index) => (
//             <span
//               key={index}
//               className={`star ${index < rating ? "filled" : ""}`}
//             >
//               ★
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Collapses */}
//       <div className="housing-collapses">
//         <Collapse title="Description">
//           <p>{logement.description}</p>
//         </Collapse>
//         <Collapse title="Équipements">
//           <ul>
//             {logement.equipments.map((equip, index) => (
//               <li key={index}>{equip}</li>
//             ))}
//           </ul>
//         </Collapse>
//       </div>
//     </div>
//   );
// }

// export default Housing;

// import { useParams, Navigate } from "react-router-dom";
// import Carousel from "../components/Carousel";
// import Collapse from "../components/Collapse";
// import logements from "../data/logements.json";
// import "./Housing.scss";

// function Housing() {
//   const { id } = useParams();
//   const logement = logements.find((item) => item.id === id);

//   // Redirection si le logement n'existe pas
//   if (!logement) {
//     return <Navigate to="/404" replace />;
//   }

//   // Conversion de la note (string -> number)
//   const rating = Number(logement.rating);

//   return (
//     <div className="housing">
//       {/* Carrousel */}
//       <Carousel images={logement.pictures} />

//       {/* Header logement */}
//       <div className="housing-header">
//         <div className="housing-info">
//           <h1 className="housing-title">{logement.title}</h1>
//           <p className="housing-location">{logement.location}</p>

//           <div className="housing-tags">
//             {logement.tags.map((tag) => (
//               <span key={tag} className="tag">
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="housing-host">
//           <p className="host-name">{logement.host.name}</p>
//           <img
//             src={logement.host.picture}
//             alt={logement.host.name}
//             className="host-picture"
//           />
//         </div>
//       </div>

//       {/* Rating */}
//       <div className="housing-rating">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <span
//             key={index}
//             className={`star ${index < rating ? "filled" : ""}`}
//           >
//             ★
//           </span>
//         ))}
//       </div>

//       {/* Collapses */}
//       <div className="housing-collapses">
//         <Collapse title="Description">
//           <p>{logement.description}</p>
//         </Collapse>

//         <Collapse title="Équipements">
//           <ul>
//             {logement.equipments.map((equip, index) => (
//               <li key={index}>{equip}</li>
//             ))}
//           </ul>
//         </Collapse>
//       </div>
//     </div>
//   );
// }

// export default Housing;

import { useParams, Navigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import logements from "../data/logements.json";
import "./Housing.scss";

function Housing() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  // Redirection si le logement n'existe pas
  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  // Conversion de la note (string -> number)
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
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`star ${index < rating ? "filled" : ""}`}
              >
                ★
              </span>
            ))}
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
