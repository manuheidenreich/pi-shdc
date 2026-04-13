import React, { Component } from "react";
import FormBusqueda from "../../Componentes/FormBusqueda/FormBusqueda";
import SeccionPelisCartelera from "../../Componentes/Seccion_PelisCartelera/SeccionPelisCartelera";
import SeccionPelisPopulares from "../../Componentes/Seccion_PelisPopulares/SeccionPelisPopulares";
import SeccionSeriesPopulares from "../../Componentes/Seccion_SeriesPopulares/SeccionSeriesPopulares";
import SeccionSeriesCartelera from "../../Componentes/Seccion_SeriesCartelera/SeccionSeriesCartelera";
import Header from "../../Componentes/Header/Header";

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <FormBusqueda />
                <h2 className="alert alert-primary">Películas Populares</h2>
                <SeccionPelisPopulares />
                <h2 className="alert alert-primary">Películas Actualmente en Cartelera</h2>
                <SeccionPelisCartelera />
                <h2 className="alert alert-primary">Series Populares</h2>
                <SeccionSeriesPopulares />
                <h2 className="alert alert-primary">Series Actualmente en Cartelera</h2>
                <SeccionSeriesCartelera />
            </div>
        );
    }
}

export default Home;