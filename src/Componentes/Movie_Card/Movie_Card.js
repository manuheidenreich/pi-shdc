import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mostrarDescripcion: false,
            detalle: "", //no se si esta bien
            Esfavorito: false,
            favoritos: []
        }
    }

    mostrarDescripcion() {
        this.setState({
            mostrarDescripcion: true,
        })
    };
    iraDetalle(){
        this.setState({
           //preguntar como hacer esta funcion y el boton en el render 
        }) 
    };
    AgregarAFavoritos(){
        this.setState({
            Esfavorito: true,
            favoritos: this.state.push
        })
    };

render() {
    return (
        <article className="Card">
            <img src={this.props.imagen} alt={this.props.nombre} />
            <h1 className="titulo">{this.props.nombre}</h1>
            <p className="descripcion">{this.props.descripcion}</p>
            <button onClick={() => this.mostrarDescripcion()} className="mostrarDescripcionBoton">
                {this.state.mostrarDescripcion ? "ver menos" : "ver descripcion"}
            </button>
            //falta el boton de ir a detalle
            <button onClick={() => this.AgregarAFavoritos()}>{this.state.Esfavorito ? "Eliminar de favoritos":"Agregar a favoritos"}</button>

        </article>
    );

}
}
