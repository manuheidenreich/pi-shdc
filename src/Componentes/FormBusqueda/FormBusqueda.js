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

    ejecutarBusqueda(e) {
        e.preventDefault();

        if (this.state.valor=== "") {
            return;
        }

        this.props.history.push(`/results/${this.state.tipo}/${this.state.valor}`);
    }

    render() {
        return (
            <div className="FormBusqueda">
                <form onSubmit={(e) => this.ejecutarBusqueda(e)}>
                    <select
                        name="tipo"
                        value={this.state.tipo}
                        onChange={(e) => this.controlarCambios(e)}
                    >
                        <option value="movie">Películas</option>
                        <option value="tv">Series</option>
                    </select>

                    <input
                        type="text"
                        name="valor"
                        onChange={(e) => this.controlarCambios(e)}
                        value={this.state.valor}
                        placeholder="Buscar..."
                    />

                    <button type="submit">Buscar</button>
                </form>
            </div>
        );
    }
}

export default withRouter(FormBusqueda);