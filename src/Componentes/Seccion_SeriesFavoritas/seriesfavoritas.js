import React, { Component } from "react";
import Card from "../Card/Card";
const apikey = "7aa285e4357da2124c14f7534bfc86a0";

class SeriesFavoritas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series: [],
            favoritosSerie: []
        }
    }

    componentDidMount() {
        let arrayfavoritosSerie = JSON.parse(localStorage.getItem("favoritosSerie")) || [];

        this.setState({
            favoritosSerie: arrayfavoritosSerie
        });

        if (arrayfavoritosSerie.length === 0) {
            return;
        }

        arrayfavoritosSerie.map((id) => {
            fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apikey}`)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({
                        series: [...this.state.series, data]
                    });
                })
                .catch((error) => console.log(error));
        });
    }

    render() {
        if (this.state.favoritosSerie.length === 0) {
            return (
                <div>
                    <h2>No tenés series favoritas</h2>
                </div>
            );
        }

        if (this.state.series.length === 0) {
            return (
                <div>
                    <img src="./img/cargando.gif" alt="Cargando..." />
                </div>
            );
        }

        return (
            <div className="cards">
                {this.state.series.map((serie) => (
                    <Card
                        history={this.props.history}
                        key={serie.id}
                        id={serie.id}
                        nombre={serie.name}
                        imagen={serie.poster_path}
                        descripcion={serie.overview}
                        tipo="tv"
                    />
                ))}
            </div>
        );
    }
}

export default SeriesFavoritas;