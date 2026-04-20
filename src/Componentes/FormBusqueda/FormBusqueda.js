import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class FormBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: "",
            tipo: ""
        };
    }

    controlarCambios(e) {
        this.setState({
            valor: e.target.value
        });
    }

    cambiarTipo(e) {
        this.setState({
            tipo: e.target.value
        });
    }

    ejecutarBusqueda(e) {
        e.preventDefault(); 

        if (this.state.valor === "") {
            return;
        }

        this.props.history.push(`/results/${this.state.tipo}/${this.state.valor}`);
    }

    render() {
        return (
            <div>
                <form className="search-form" onSubmit={(e) => this.ejecutarBusqueda(e)}>
                    <section className="search-form-left">

                        <input
                            type="text"
                            name="valor"
                            onChange={(e) => this.controlarCambios(e)}
                            value={this.state.valor}
                            placeholder="Buscar..."
                        />

                        <section className="search-form-radio-container">

                            <label>Series</label>
                            <input
                                type="radio"
                                name="tipo"
                                value="tv"
                                checked={this.state.tipo === "tv"}
                                onChange={(e) => this.cambiarTipo(e)}
                            />

                            <label>Películas</label>
                            <input
                                type="radio"
                                name="tipo"
                                value="movie"
                                checked={this.state.tipo === "movie"}
                                onChange={(e) => this.cambiarTipo(e)}
                            />

                        </section>
                    </section>

                    <button className="btn btn-success btn-sm" type="submit">
                        Buscar
                    </button>
                </form>
            </div>
        );
    }
}

export default withRouter(FormBusqueda);