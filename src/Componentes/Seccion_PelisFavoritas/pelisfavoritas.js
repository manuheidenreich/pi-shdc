import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
const apikey = "7aa285e4357da2124c14f7534bfc86a0";

function PelisFavoritas() {
    const [pelisfavoritas, setPelisFavoritas] = useState([]);
     useEffect(()=> {
        let arraypelisfavoritas = JSON.parse(localStorage.getItem("favoritosMovie")) || []

        setPelisFavoritas(arraypelisfavoritas);

        if (arraypelisfavoritas.length === 0) {
            return
        }
        else {
            arraypelisfavoritas.map((id) => {
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`)
                    .then((response) => response.json())
                    .then((data) => { 
                        setpeliculas(data.results);
                    })
                    .catch((error) => console.log(error));
            })
        }
     }
     ,[])

    if (this.state.pelisfavoritas.length === 0) {
        return (
            <div>
                <h2>No tenés películas favoritas</h2>
            </div>
        )
    }

    if (this.state.peliculas.length === 0) {
        return (
            <div>
                <img src="./img/cargando.gif" alt="Cargando..."></img>
            </div>
        )
    }

    return (
        <div className="cards">
            {this.state.peliculas.map((pelicula) => (
                <Card
                    key={pelicula.id}
                    id={pelicula.id}
                    nombre={pelicula.title}
                    imagen={pelicula.poster_path}
                    descripcion={pelicula.overview}
                    tipo="movie"
                />
            ))}
        </div>
        )
}
    

   


export default PelisFavoritas;