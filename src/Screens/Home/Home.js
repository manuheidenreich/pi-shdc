import React, { Component } from "react";
import FormBusqueda from "../../Componentes/FormBusqueda/FormBusqueda";
import SeccionPopulares from "../../Componentes/Seccion_Populares/SeccionPopulares";
import SeccionCartelera from "../../Componentes/Seccion_Cartelera/SeccionCartelera";

class Home extends Component {
    render() {
        return (
            <div>
                <FormBusqueda />
                <h1>Películas Populares</h1>
                <SeccionPopulares/>
                <h1>Películas Actualmente en Cartelera</h1>
                <SeccionCartelera/>
                

                {this.state.peliculas.map((pelicula) => (
                    <MovieCard
                        key={pelicula.id}
                        id={pelicula.id}
                        nombre={pelicula.title}
                        imagen={pelicula.poster_path}
                        descripcion={pelicula.overview}
                    />
                ))}
            </div>
        );
    }
}

export default Home;