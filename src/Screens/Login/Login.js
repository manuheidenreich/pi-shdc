import React, { Component } from "react";

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

        let usuarioEncontrado = usuariosParseados.find(
            (usuario) => usuario.email === this.state.email.trim().toLowerCase()
        );

        if (
            usuarioEncontrado === undefined ||
            usuarioEncontrado.password !== this.state.password
        ) {
            this.setState({
                error: "Credenciales incorrectas"
            });
            return;
        }

        sessionStorage.setItem("sesionIniciada", "true");
        sessionStorage.setItem("usuarioLogueado", usuarioEncontrado.email);

        this.setState({
            email: "",
            password: "",
            error: ""
        });

        this.props.history.push("/");
    }

    render() {
        return (
            <section>
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
            </section>
        );
    }
}

export default Login;