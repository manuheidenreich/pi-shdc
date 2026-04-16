import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { withRouter } from 'react-router-dom';
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
        let arraypelisfavoritas = JSON.parse(localStorage.getItem("favoritosMovie")) || [];
        let arrayseriesfavoritas = JSON.parse(localStorage.getItem("favoritosSerie")) || [];

        this.setState({
            esFavorito: !this.state.esFavorito
        });

        if (this.props.tipo === "movie") {
            arraypelisfavoritas.push(this.props.id);
            localStorage.setItem("favoritosMovie", JSON.stringify(arraypelisfavoritas));
        }

        if (this.props.tipo === "tv") {
            arrayseriesfavoritas.push(this.props.id);
            localStorage.setItem("favoritosSerie", JSON.stringify(arrayseriesfavoritas));
        }
    }

    irADetalle(){
        this.props.history.push(`/detalle/${this.props.tipo}/${this.props.id}`)
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

                    < button onClick={()=>this.irADetalle()} className="btn btn-primary">Ir a Detalle</button>

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

export default withRouter(Card);