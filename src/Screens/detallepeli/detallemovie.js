import React, { Component } from 'react';

const apikey = "7aa285e4357da2124c14f7534bfc86a0";

class DetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: null,
            generos: null
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${apikey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                pelicula: data,
                generos: data.genres
            })})
            .catch(error => console.log(error));
    }

    render() {
        if (this.state.pelicula === null) {
            return (
                <div>
                    <img src="./img/cargando.gif" alt="Cargando..."></img>
                </div>
            )
        }
        return (
            <div>

                <h2 className="alert alert-primary">{this.state.pelicula.title}</h2>
                <section className="row">
                    <img src={"https://image.tmdb.org/t/p/w342/" + this.state.pelicula.poster_path} className="col-md-6" alt={this.state.pelicula.title} />
                    <section className="col-md-6 info">
                        <h3>Sinópsis</h3>
                        <p className="description">{this.state.pelicula.overview}</p>
                        <p className='mt-0 mb-0' id='release-date'><strong>Fecha de estreno:</strong> {this.state.pelicula.release_date}</p>
                        <p className="mt-0 mb-0 " id="length"><strong>Duración:</strong> {this.state.pelicula.runtime} minutos</p>
                        <p className="mt-0" id="votes"><strong>Puntuación:</strong> {this.state.pelicula.vote_average}</p>
                        <p className="mt-0" id="votes"><strong>Genero:</strong>{this.state.generos.map(genero => genero.name).join(" - ")}</p>
                    </section>
                </section>

            </div>

        )
    }
}

export default DetallePelicula;