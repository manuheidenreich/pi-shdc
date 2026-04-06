import React, { Component } from "react";
import MovieCard from "../../Componentes/Movie_Card/Movie_Card";

const apikey = "7aa285e4357da2124c14f7534bfc86a0";

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: [],
            cargando: true
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/${this.props.match.params.tipo}?api_key=${apikey}&query=${this.props.match.params.nombre}`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    resultados: data.results,
                    cargando: false
                })
            )
            .catch((error) => {console.log(error)});
    }

    render() {
        return (
            <div>
                <h1>
                    Resultados de búsqueda para: {this.props.match.params.nombre}
                </h1>

                {this.state.cargando ? (
                    <h3>Cargando...</h3>
                ) : this.state.resultados.length === 0 ? (
                    <h3>No hay resultados</h3>
                ) : (
                    <section className="cards">
                        {this.state.resultados.map((item) => (
                            <MovieCard
                                key={item.id}
                                id={item.id}
                                nombre={this.props.match.params.tipo === "movie" ? item.title : item.name}
                                descripcion={item.overview}
                                imagen={item.poster_path}
                            />
                        ))}
                    </section>
                )}
            </div>
        );
    }
}

export default Results;