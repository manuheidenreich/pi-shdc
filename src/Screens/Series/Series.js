import React, { Component } from "react";
import Card from "../../Componentes/Card/Card";
import Header from "../../Componentes/Header/Header";
const apikey = "7aa285e4357da2124c14f7534bfc86a0";

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      busqueda: "",
      cantidadMostrada: 4,
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=" + apikey)
      .then(response => response.json())
      .then(data =>
        this.setState({
          series: data.results
        })
      )
      .catch(error => console.log(error));
  }

  controlarBusqueda(event) {
    this.setState({
      busqueda: event.target.value
    });
  }

  cargarMas() {
    this.setState({
      cantidadMostrada: this.state.cantidadMostrada + 4,
    });
  }

  render() {
    let seriesFiltradas = this.state.series.filter(serie =>
      serie.name.toLowerCase().includes(this.state.busqueda.toLowerCase())
    );

    return (
      <div>
        <Header />
        <h1 className="alert alert-warning">Series Mejor Valoradas</h1>

        <form className="filter-form px-0 mb-3">
          <input
            type="text"
            placeholder="Buscar serie..."
            value={this.state.busqueda}
            onChange={(event) => this.controlarBusqueda(event)}
          />
        </form>

         {this.state.cantidadMostrada < this.state.series.length ? (
          <button onClick={() => this.cargarMas()} className="btn btn-success mb-4">
            Cargar Más
          </button>
        ) : null}


        <section className="row cards all-movies" id="movies">
          {this.state.series.length > 0 ? (
            this.state.series.slice(0, this.state.cantidadMostrada).map((serie, idx) => (
            <Card
              key={serie.id}
              id={serie.id}
              nombre={serie.name}
              imagen={serie.poster_path}
              descripcion={serie.overview}
              tipo="tv"
            />
         ))
            ): (
                            <p>No se encontraron series.</p>
                        )}
          </section>
            
          
        

      </div>
    );
  }
}


export default Series;