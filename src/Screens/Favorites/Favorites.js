import React,{ Component } from "react";
import Header from "../../Componentes/Header/Header";
import PelisFavoritas from "../../Componentes/Seccion_PelisFavoritas/pelisfavoritas"
import SeriesFavoritas from "../../Componentes/Seccion_SeriesFavoritas/seriesfavoritas"

function Favorites (){
    return(
        <div>
            <Header/>
            <h2 className="alert alert-primary">Películas Favoritas</h2>
            <PelisFavoritas/>
            <h2 className="alert alert-primary">Series Favoritas</h2>
            <SeriesFavoritas/>
        </div>
    )
}

export default Favorites