import React,{ Component } from "react";
import MovieCard from "../../Componentes/Movie_Card/Movie_Card";

const apikey = "7aa285e4357da2124c14f7534bfc86a0";

class SeccionPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: []
        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + apikey)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    peliculas: data.results
                });
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div className="cards">
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

export default SeccionPopulares;