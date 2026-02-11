// import "./Card.scss";

// function Card({ title, cover }) {
//   return (
//     <div className="card">
//       <img src={cover} alt={title} />
//       <h2>{title}</h2>
//     </div>
//   );
// }

// export default Card;

import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ id, title, cover }) {
  return (
    <article>
      <Link to={`/housing/${id}`} className="card">
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </Link>
    </article>
  );
}

export default Card;
