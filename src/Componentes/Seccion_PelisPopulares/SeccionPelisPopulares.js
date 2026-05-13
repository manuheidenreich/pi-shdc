import React,{ Component, useEffect } from "react";
import Card from "../Card/Card";

const apikey = "7aa285e4357da2124c14f7534bfc86a0";


function SeccionPelisPopulares() {
    const [peliculas, setPeliculas] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + apikey)
            .then((response) => response.json())    
            .then((data) => {
                setPeliculas(data.results);
            })
            .catch((error) => console.log(error));
    }, []);

        return (
            <div className="row cards" id="movies">
                 {peliculas.slice(6,10).map((pelicula) => (
                    <Card
                        history={props.history}
                        key={pelicula.id}
                        id={pelicula.id}
                        nombre={pelicula.title}
                        imagen={pelicula.poster_path}
                        descripcion={pelicula.overview}
                        tipo="movie"
                    />
                ))}
            </div>
        );
    }


export default SeccionPelisPopulares;