import { React, Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Componentes/Header/Header"
import Footer from "./Componentes/Footer/Footer"

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
          <Route/>
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
