import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Home from "./Screens/Home/Home";
import Registro from "./Screens/Registro/Registro";
import Login from "./Screens/Login/Login";
import Error from "./Screens/Error/Error";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Registro} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;