import { React, Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Componentes/Header/Header"
import Footer from "./Componentes/Footer/Footer"
import Home from "./Screens/Home/Home"
const apikey='7aa285e4357da2124c14f7534bfc86a0'

function App() {
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?api_key='+apikey)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
  
  return ( 
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>   
          <Route path="" component={Error}/>
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
