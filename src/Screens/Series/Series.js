import React, { Component } from "react";
import Card from "../../Componentes/Card/Card";
import Header from "../../Componentes/Header/Header";
const apikey = "7aa285e4357da2124c14f7534bfc86a0";

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      busqueda: ""
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=" + apikey)
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

  render() {
    let seriesFiltradas = this.state.series.filter(serie =>
      serie.name.toLowerCase().includes(this.state.busqueda.toLowerCase())
    );

    return (
      <div>
        <Header/>
        <h1>Series</h1>

        <form>
          <input
            type="text"
            placeholder="Buscar serie..."
            value={this.state.busqueda}
            onChange={(event) => this.controlarBusqueda(event)}
          />
        </form>

        <section>
          {seriesFiltradas.map((serie) => (
            <Card
              key={serie.id}
              id={serie.id}
              nombre={serie.name}
              imagen={serie.poster_path}
              descripcion={serie.overview}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Series;