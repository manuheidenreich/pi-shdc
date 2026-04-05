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

  
  render(){
    return (
      <React.Fragment>
        <nav className="nav">
          {this.state.sesion===true ? 
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Favorites">Favorites</Link></li>
              </ul> 
              :
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Registro">Registro</Link></li>
                <li><Link to="/Login">Login</Link></li>
              </ul> 
          }
        </nav>
      </React.Fragment>
    )
  }
  ;
}

export default Header;