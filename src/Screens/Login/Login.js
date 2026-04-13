import React, { Component } from "react";
import Cookies from "universal-cookie";
import Header from "../../Componentes/Header/Header";

const cookies = new Cookies();


class Login extends Component {
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

        let usuarioEncontrado = usuariosParseados.filter(
        (usuario) => usuario.email === this.state.email.toLowerCase()
        )[0];

        if (
            usuarioEncontrado === undefined ||
            usuarioEncontrado.password !== this.state.password
        ) {
            this.setState({
                error: "Credenciales incorrectas"
            });
            return;
        }
        cookies.set("usuario", usuarioEncontrado) 
    

        this.setState({
            email: "",
            password: "",
            error: ""
        });

        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <Header/>
                <h1>Login</h1>

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

                    <button type="submit">Ingresar</button>
                </form>

                {this.state.error ? <p>{this.state.error}</p> : null}
            </div>
        );
    }
}

export default Login;