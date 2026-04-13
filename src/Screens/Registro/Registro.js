import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../Componentes/Header/Header";

class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }

    controlarInputs(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitForm(event) {
        event.preventDefault();

        let usuariosGuardados = localStorage.getItem("usuarios");
        let usuariosParseados = [];

        if (usuariosGuardados !== null) {
            usuariosParseados = JSON.parse(usuariosGuardados);
        }

        let usuarioExistente = usuariosParseados.find(
            (usuario) => usuario.email === this.state.email.toLowerCase()
        );

        if (usuarioExistente) {
            this.setState({
                error: "El email ya está en uso"
            });
            return;
        }

        if (this.state.password.length < 6) {
            this.setState({
                error: "La contraseña debe tener al menos 6 caracteres"
            });
            return;
        }

        let nuevoUsuario = {
            email: this.state.email.toLowerCase(),
            password: this.state.password
        };

        usuariosParseados.push(nuevoUsuario);

        let usuariosAString = JSON.stringify(usuariosParseados);
        localStorage.setItem("usuarios", usuariosAString);

        sessionStorage.setItem("sesionIniciada", "true");
        sessionStorage.setItem("usuarioLogueado", nuevoUsuario.email);

        this.setState({
            email: "",
            password: "",
            error: ""
        });
        this.props.history.push("/Login" )
       
    }

    render() {
        return (
            <div>
                <Header/>
                <h1>Crear cuenta</h1>

                <form onSubmit={(event) => this.submitForm(event)}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={(event) => this.controlarInputs(event)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={(event) => this.controlarInputs(event)}
                    />

                    <button type="submit">Crear cuenta</button>
                </form>

                {this.state.error !== "" ? <p>{this.state.error}</p> : null}
            </div>
        );
    }
}

export default Registro;