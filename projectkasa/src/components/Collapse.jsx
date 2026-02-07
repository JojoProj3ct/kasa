// import { useState } from "react";
// import "./Collapse.scss";

// function Collapse({ title, children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="collapse">
//       <button className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
//         {title}
//         <span className={isOpen ? "arrow open" : "arrow"}>⌄</span>
//       </button>

//       {isOpen && <div className="collapse-content">{children}</div>}
//     </div>
//   );
// }

// export default Collapse;

import { useState } from "react";
import arrowBas from "../assets/arrow-bas.png";
import arrowHaut from "../assets/arrow-haut.png";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img
          src={isOpen ? arrowHaut : arrowBas}
          alt="flèche"
          className="collapse-arrow"
        />
      </button>

      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
