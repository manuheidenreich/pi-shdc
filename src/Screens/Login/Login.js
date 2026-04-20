import React, { Component } from "react";
import Cookies from "universal-cookie";
import Header from "../../Componentes/Header/Header";
import { Link } from "react-router-dom";

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
                <h1  className="alert alert-primary">Login</h1>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={(event) => this.submitForm(event)}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={(event) => this.controlarInputs(event)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={(event) => this.controlarInputs(event)}
                                />
                            </div>
                            <button className="btn btn-primary btn-block" type="submit">Ingresar</button>
                        </form>
                        {this.state.error ? <p>{this.state.error}</p> : null}
                        <p className="mt-3 text-center">¿No tenés cuenta?   <Link to="/registro">Registrarse</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;