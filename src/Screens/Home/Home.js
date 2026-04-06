import React, { Component } from "react";
import FormBusqueda from "../../Componentes/FormBusqueda/FormBusqueda";
import SeccionPopulares from "../../Componentes/Seccion_Populares/SeccionPopulares";
import SeccionCartelera from "../../Componentes/Seccion_Cartelera/SeccionCartelera";

class Home extends Component {
    render() {
        return (
            <div>
                <FormBusqueda />
                <h2 className="alert alert-primary">Películas Populares</h2>
                <SeccionPopulares />
                <h2 className="alert alert-primary">Películas Actualmente en Cartelera</h2>
                <SeccionCartelera />
            </div>
        );
    }
}

export default Home;