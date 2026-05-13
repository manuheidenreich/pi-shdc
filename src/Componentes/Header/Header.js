import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();


function Header() {
  const[cookie,setCookie] = useState(cookies.get("usuario"))

  function cerrarSesion() {
    cookies.remove("usuario")
    setCookie(cookies.get('usuario'))
  }

  return (
    <React.Fragment>
      <nav>
        {this.state.cookie !== undefined ?
          <ul className="nav nav-tabs my-4">
            <li><img className="logo" src="/img/imagen_logo.png" alt="logo" /> </li>
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Movies">Movies</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Series">Series</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Favorites">Favorites</Link></li>
            <button className="nav-link" onClick={() => this.cerrarSesion()}>Logout</button>
          </ul>
          :
          <ul className="nav nav-tabs my-4">
            <li><img className="logo" src="/img/imagen_logo.png" alt="logo" /> </li>
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Movies">Movies</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Series">Series</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Registro">Registro</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Login">Login</Link></li>
          </ul>
        }
      </nav>
    </React.Fragment>
  )
}


export default Header;