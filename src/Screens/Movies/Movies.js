import React, { Component } from "react";
import Card from "../../Componentes/Card/Card";
import Header from "../../Componentes/Header/Header";
const apikey = "7aa285e4357da2124c14f7534bfc86a0";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      busqueda: ""
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=" + apikey)
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
      <div>
        <Header/>
        <h1 className="alert alert-warning">Películas Mejores Valoradas</h1>

        <form className="filter-form px-0 mb-3">
          <input
            type="text"
            placeholder="Buscar película..."
            value={this.state.busqueda}
            onChange={(event) => this.controlarBusqueda(event)}
          />
        </form>

        <div className="row cards all-movies" id="movies">
          {peliculasFiltradas.map((pelicula) => (
            <Card
              key={pelicula.id}
              id={pelicula.id}
              nombre={pelicula.title}
              imagen={pelicula.poster_path}
              descripcion={pelicula.overview}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Movies;