import { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className={isOpen ? "arrow open" : "arrow"}>⌄</span>
      </button>

      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
