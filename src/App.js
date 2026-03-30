import { React, Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Componentes/Header/Header"
import Footer from "./Componentes/Footer/Footer"
import Home from "./Screens/Home/Home"

function App() {
  let item = [
    {
      route: "/",
      name: "Home"
    },
    {
      route: "/Registro",
      name: "Registro"
    },
    {
      route: "/Login",
      name: "Log in"
    },
    {
      route: "/Favorites",
      name: "Favorites"
    }
  ];
  
  return ( 
      <div className="app">
        <Header item={item}/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>   
          <Route path="" component={Error}/>
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
