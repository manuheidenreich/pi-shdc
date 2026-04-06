import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            esFavorito: false,
            sesion: false
        };
    }

    componentDidMount() {
        let sesionIniciada = sessionStorage.getItem("sesionIniciada");

        this.setState({
            sesion:sesionIniciada 
        });
    }

    agregarAFavoritos() {
        this.setState({
            esFavorito: !this.state.esFavorito
        });
    }

    render() {
        return (
            <article className="single-card-movie">
                <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w342${this.props.imagen}`}
                    alt={this.props.nombre}
                />
                <div className="cardBody">
                    <h5 className="card-title">{this.props.nombre}</h5>

                
                    <p className="card-text">{this.props.descripcion}</p>
    

                <Link to={`/detalle/${this.props.id}`}>
                    <button className="btn btn-primary">Ir a detalle</button>
                </Link>

                {this.state.sesion ? (
                    <button className="btn alert-primary" onClick={() => this.agregarAFavoritos()}>
                        {this.state.esFavorito
                            ? "Eliminar de favoritos"
                            : "Agregar a favoritos"}
                    </button>
                ) : null}
                </div>
            </article>
        );
    }
}

export default MovieCard;