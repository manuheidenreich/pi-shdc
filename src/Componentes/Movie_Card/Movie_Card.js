import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarDescripcion: false,
            esFavorito: false
        };
    }

    mostrarDescripcion() {
        this.setState({
            mostrarDescripcion: !this.state.mostrarDescripcion
        });
    }

    agregarAFavoritos() {
        this.setState({
            esFavorito: !this.state.esFavorito
        });
    }

    render() {
        return (
            <article className="Card">
                <img
                    src={`https://image.tmdb.org/t/p/w342/${this.props.imagen}`}
                    alt={this.props.nombre}
                />

                <h1 className="titulo">{this.props.nombre}</h1>

                {this.state.mostrarDescripcion ? (
                    <p className="descripcion">{this.props.descripcion}</p>
                ) : null}

                <button
                    onClick={() => this.mostrarDescripcion()}
                    className="mostrarDescripcionBoton"
                >
                    {this.state.mostrarDescripcion ? "Ver menos" : "Ver descripción"}
                </button>

                <Link to={`/detalle/${this.props.id}`}>
                    <button>Ir a detalle</button>
                </Link>

                <button onClick={() => this.agregarAFavoritos()}>
                    {this.state.esFavorito ? "Eliminar de favoritos" : "Agregar a favoritos"}
                </button>
            </article>
        );
    }
}

export default MovieCard;