import React, { Component } from "react";
import MovieCard from "../../Componentes/Movie_Card/Movie_Card";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      busqueda: ""
    };
  }

  componentDidMount() {
    fetch("") ///Aca va el endpoin, lo tengo que buscar
      .then(response => response.json())
      .then(data =>
        this.setState({
          peliculas: data.results
        })
      )
      .catch(error => console.log(error));
  }

  controlarBusqueda(event) {
    this.setState({
      busqueda: event.target.value
    });
  }

  render() {
    let peliculasFiltradas = this.state.peliculas.filter(pelicula =>
      pelicula.title.toLowerCase().includes(this.state.busqueda.toLowerCase())
    );

    return (
      <section>
        <h1>Películas</h1>

        <form>
          <input
            type="text"
            placeholder="Buscar película..."
            value={this.state.busqueda}
            onChange={(event) => this.controlarBusqueda(event)}
          />
        </form>

        <section>
          {peliculasFiltradas.map((pelicula, idx) => (
            <MovieCard
              key={pelicula.id || idx}
              id={pelicula.id}
              nombre={pelicula.title}
              imagen={pelicula.poster_path}
              descripcion={pelicula.overview}
            />
          ))}
        </section>
      </section>
    );
  }
}

export default Movies;