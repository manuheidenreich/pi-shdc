import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class FormBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: "",
            tipo: "movie"
        };
    }

    controlarCambios(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    elegirSerie(e){
        e.preventDefault();
        this.setState({tipo:"tv"})
    }

    elegirPelicula(e){
        e.preventDefault();    
        this.setState({tipo:"movie"})
        }

    ejecutarBusqueda(e) {
        e.preventDefault();

        if (this.state.valor=== "") {
            return;
        }

        this.props.history.push(`/results/${this.state.tipo}/${this.state.valor}`);
    }

    render() {
        return (
            <div >
                <form className="search-form" onSubmit={(e) => this.ejecutarBusqueda(e)}>
                    <section className="search-form-left">
                        <input
                        type="text"
                        name="valor"
                        onChange={(e) => this.controlarCambios(e)}
                        value={this.state.valor}
                        placeholder="Buscar..."
                        >
                        </input>
                        <section className="search-form-radio-container">
                            <label for="serie">Series</label>
                            <input
                                name="serie"
                                onClick={(e)=>this.elegirSerie(e)}
                                className="search-form-radio" type="radio"/>
                            <label for="peli">Películas</label>
                            <input
                                name="peli"
                                onClick={(e)=>this.elegirPelicula(e)}
                                className="search-form-radio" type="radio"/>
                        </section>
                    </section>
                    <button className="btn btn-success btn-sm" type="submit">Buscar</button>
                </form>
            </div>
        );
    }
}

export default withRouter(FormBusqueda);