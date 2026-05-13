import React, { Component, useEffect, useState } from 'react';
import Header from '../../Componentes/Header/Header';
import Cookies from "universal-cookie";
const apikey = "7aa285e4357da2124c14f7534bfc86a0";
const cookies = new Cookies();

function DetalleSerie(props) {
    const[serie,setSerie] = useState(null)
    const[generos,setGeneros] = useState(null)
    const[esFavorito,setFavorito] = useState(false)
    const[cookie,setCookie] = useState(cookies.get("usuario"))

    useEffect(()=> {
        let arrayseriesfavoritas = JSON.parse(localStorage.getItem("favoritosSerie")) || [];
        if (arrayseriesfavoritas.includes(Number(props.match.params.id))) {
            setFavorito(true)
        }
        fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=${apikey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                serie: data,
                generos: data.genres
            })})
            .catch(error => console.log(error));
    }, []);

        
    function agregarAFavoritos() {
        let arrayseriesfavoritas = JSON.parse(localStorage.getItem("favoritosSerie")) || [];

       if (arrayseriesfavoritas.includes(Number(props.match.params.id))) {
                let nuevoArray = arrayseriesfavoritas.filter((id) => id !== props.match.params.id);
                localStorage.setItem("favoritosSerie", JSON.stringify(nuevoArray));
                setFavorito(false)
            } else {
                arrayseriesfavoritas.push(Number(props.match.params.id));
                localStorage.setItem("favoritosSerie", JSON.stringify(arrayseriesfavoritas));
                setFavorito(true)
            }
        }

    if (serie === null) {
        return (
            <div>
                <img src="./img/cargando.gif" alt="Cargando..."></img>
            </div>
        )
    }
    return (
        <div>
            <Header/>
            <h2 className="alert alert-primary">{serie.name}</h2>
            <section className="row">
                <img src={"https://image.tmdb.org/t/p/w342/" + serie.poster_path} className="col-md-6" alt={serie.title} />
                <section className="col-md-6 info">
                    <h3>Sinópsis</h3>
                    <p className="description">{serie.overview}</p>
                    <p className='mt-0 mb-0' id='release-date'><strong>Fecha de estreno:</strong> {serie.release_date}</p>
                    <p className="mt-0 mb-0 " id="length"><strong>Duración:</strong> {serie.number_of_seasons} temporadas</p>
                    <p className="mt-0" id="votes"><strong>Puntuación:</strong> {serie.vote_average}</p>
                    <p className="mt-0" id="votes"><strong>Genero: </strong>{generos.map(genero => genero.name).join(" - ")}</p>
                        {cookie !== undefined ? (
                    <button className="btn alert-primary" onClick={() => agregarAFavoritos()}>
                        {esFavorito
                            ? "♥️"
                            : "🩶"}
                    </button>
                ) : null}
                </section>
            </section>

        </div>

    )
}

export default DetalleSerie;