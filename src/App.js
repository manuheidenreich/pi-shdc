import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Home from "./Screens/Home/Home";
import Registro from "./Screens/Registro/Registro";
import Login from "./Screens/Login/Login";
import Results from "./Screens/Results/Results";
import Error from "./Screens/Error/Error";
import DetallePelicula from "./Screens/detallepeli/detallemovie";
import DetalleSerie from "./Screens/detalleserie/detalletv"
import Favorites from "./Screens/Favorites/Favorites";
import Movies from "./Screens/Movies/Movies";
import Series from "./Screens/Series/Series";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/detalle/movie/:id" component={DetallePelicula} />
        <Route path="/detalle/tv/:id" component={DetalleSerie} />
        <Route path="/results/:tipo/:nombre" component={Results} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;