import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarDescripcion: false,
            esFavorito: false,
            sesion:false
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

    sesionIniciada(){
        let sesionIniciada=localStorage.getItem("sesionIniciada")
        this.setState({
            sesion:sesionIniciada
        });
    }

    render() {
        return (
            <article className="cardBody ">
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

                {this.state.sesion===true ? 
                    <button onClick={() => this.agregarAFavoritos()}>
                    {this.state.esFavorito ? "Eliminar de favoritos" : "Agregar a favoritos"}
                    </button>
                    : null
                }
            </article>
        );
    }
}

export default MovieCard;