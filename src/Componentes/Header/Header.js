import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <React.Fragment>
      <nav className="nav">
        <ul>
          {props.item.map((opcion, idx) => (
            <li key={opcion.name + idx}>
              <Link to={opcion.route}>{opcion.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Header;