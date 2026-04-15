import React, { Component } from 'react';
import Header from '../../Componentes/Header/Header';
import Cookies from "universal-cookie";
const apikey = "7aa285e4357da2124c14f7534bfc86a0";
const cookies = new Cookies();
class DetalleSerie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serie: null,
            generos: null,
            esFavorito: false,
            cookie: cookies.get('usuario')
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=${apikey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                serie: data,
                generos: data.genres
            })})
            .catch(error => console.log(error));
    }
    agregarAFavoritos() {
        let arrayfavoritosSerie = JSON.parse(localStorage.getItem("favoritosSerie")) || [];

        this.setState({
            esFavorito: !this.state.esFavorito
        });

       
       {arrayfavoritosSerie.push(this.props.id);
        localStorage.setItem("favoritosSerie", JSON.stringify(arrayfavoritosSerie));
        }
    }

    render() {
        if (this.state.serie === null) {
            return (
                <div>
                    <img src="./img/cargando.gif" alt="Cargando..."></img>
                </div>
            )
        }
        return (
            <div>
                <Header/>
                <h2 className="alert alert-primary">{this.state.serie.title}</h2>
                <section className="row">
                    <img src={"https://image.tmdb.org/t/p/w342/" + this.state.serie.poster_path} className="col-md-6" alt={this.state.serie.title} />
                    <section className="col-md-6 info">
                        <h3>Sinópsis</h3>
                        <p className="description">{this.state.serie.overview}</p>
                        <p className='mt-0 mb-0' id='release-date'><strong>Fecha de estreno:</strong> {this.state.serie.release_date}</p>
                        <p className="mt-0 mb-0 " id="length"><strong>Duración:</strong> {this.state.serie.runtime} minutos</p>
                        <p className="mt-0" id="votes"><strong>Puntuación:</strong> {this.state.serie.vote_average}</p>
                        <p className="mt-0" id="votes"><strong>Genero: </strong>{this.state.generos.map(genero => genero.name).join(" - ")}</p>
                           {this.state.cookie !== undefined ? (
                        <button className="btn alert-primary" onClick={() => this.agregarAFavoritos()}>
                            {this.state.esFavorito
                                ? "♥️"
                                : "🩶"}
                        </button>
                    ) : null}
                    </section>
                </section>

            </div>

        )
    }
}

export default DetalleSerie;