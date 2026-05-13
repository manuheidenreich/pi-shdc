import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function FormBusqueda(props) {
    const[valor,setValor] = useState("");
    const[tipo, setTipo] = useState("movie") 

    function controlarCambios(e) {
        setValor(e.target.value)
    }

    function cambiarTipo(e) {
        setTipo(e.target.value)
    }

    function ejecutarBusqueda(e) {
        e.preventDefault(); 

        if (valor === "") {
            return;
        }

        props.history.push(`/results/${tipo}/${valor}`);
    }

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

export default withRouter(FormBusqueda);