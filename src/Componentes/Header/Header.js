import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props){
    super(props)
    this.state={
      sesion:false
    }
  }
  
  sesionIniciada(){
        let sesionIniciada=localStorage.getItem("sesionIniciada")
        this.setState({
            sesion:sesionIniciada
        });
    }
  cerrarSesion(){
  localStorage.clear()
        };
  

  
  render(){

    return (
      <React.Fragment>
        <nav>
          {this.state.sesion===true ? 
              <ul className="nav nav-tabs my-4">
                <li className="nav-item"><Link className="nav-link"to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Favorites">Favorites</Link></li>
              </ul> 
              :
              <ul className="nav nav-tabs my-4">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Registro">Registro</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Login">Login</Link></li>
              </ul> 
          }
        </nav>
      </React.Fragment>
    )
  }
  ;
}

export default Header;