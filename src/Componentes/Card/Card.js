import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            esFavorito: false,
            mostrarDescripcion: false,
            cookie: cookies.get('usuario')
        };
    }

    
    mostrarDescripcion() {
        this.setState({
            mostrarDescripcion: !this.state.mostrarDescripcion
        })
    };
    agregarAFavoritos() {
        let arrayfavoritosMovie = JSON.parse(localStorage.getItem("favoritosMovie")) || [];
        let arrayfavoritosSerie = JSON.parse(localStorage.getItem("favoritosSerie")) || [];

        this.setState({
            esFavorito: !this.state.esFavorito
        });

        if (this.props.tipo === "movie") {
            arrayfavoritosMovie.push(this.props.id);
            localStorage.setItem("favoritosMovie", JSON.stringify(arrayfavoritosMovie));
        }

        if (this.props.tipo === "tv") {
            arrayfavoritosSerie.push(this.props.id);
            localStorage.setItem("favoritosSerie", JSON.stringify(arrayfavoritosSerie));
        }
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


                    {this.state.mostrarDescripcion ? (

                        <p className="card-text">{this.props.descripcion}</p>
                    ) : null}

                    <button
                        onClick={() => this.mostrarDescripcion()}
                        className="btn btn-primary"
                    >
                        {this.state.mostrarDescripcion ? "Ver menos" : "Ver descripción"}
                    </button>


                    <Link to={`/detalle${this.props.tipo}/${this.props.id}`}>
                        <button className="btn btn-primary">Ir a detalle</button>
                    </Link>

                    {this.state.cookie !== undefined ? (
                        <button className="btn alert-primary" onClick={() => this.agregarAFavoritos()}>
                            {this.state.esFavorito
                                ? "♥️"
                                : "🩶"}
                        </button>
                    ) : null}
                </div>
            </article>
        );
    }
}

export default Card;