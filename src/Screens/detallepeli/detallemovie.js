import React, { useEffect, useState } from 'react';
import Header from '../../Componentes/Header/Header';
import Cookies from "universal-cookie";
const cookies = new Cookies();

const apikey = "7aa285e4357da2124c14f7534bfc86a0";

function DetallePelicula(props) {
    const[pelicula,setPelicula] = useState(null)
    const[generos,setGeneros] = useState(null)
    const[esFavorito,setFavorito] = useState(false)
    const[cookie,setCookie] = useState(cookies.get("usuario"))

    useEffect(()=> {
        let arraypelisfavoritas = JSON.parse(localStorage.getItem("favoritosMovie")) || [];
        if (arraypelisfavoritas.includes(Number(this.props.match.params.id))) {
            setFavorito(true)
        }
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${apikey}`)
            .then(response => response.json())
            .then(data => {
                setPelicula(data);
                setGeneros(data.genres)
            })
            .catch(error => console.log(error)); 
    }, []);

    function agregarAFavoritos() {
        let arraypelisfavoritas = JSON.parse(localStorage.getItem("favoritosMovie")) || [];
        if (arraypelisfavoritas.includes(Number(props.match.params.id))) {
                let nuevoArray = arraypelisfavoritas.filter((id) => id !== props.match.params.id);
                localStorage.setItem("favoritosMovie", JSON.stringify(nuevoArray));
                setFavorito(false)
            } else {
                arraypelisfavoritas.push(props.match.params.id);
                localStorage.setItem("favoritosMovie", JSON.stringify(arraypelisfavoritas));
                setFavorito(true)
            }
    }

    if (pelicula === null) {
        return (
            <div>
                <img src="./img/cargando.gif" alt="Cargando..."></img>
            </div>
        )
    }
    return (
        <div>
            <Header/>
            <h2 className="alert alert-primary">{pelicula.title}</h2>
            <section className="row">
                <img src={"https://image.tmdb.org/t/p/w342/" + pelicula.poster_path} className="col-md-6" alt={pelicula.title} />
                <section className="col-md-6 info">
                    <h3>Sinópsis</h3>
                    <p className="description">{pelicula.overview}</p>
                    <p className='mt-0 mb-0' id='release-date'><strong>Fecha de estreno:</strong> {pelicula.release_date}</p>
                    <p className="mt-0 mb-0 " id="length"><strong>Duración:</strong> {pelicula.runtime} minutos</p>
                    <p className="mt-0" id="votes"><strong>Puntuación:</strong> {pelicula.vote_average}</p>
                    <p className="mt-0" id="votes"><strong>Genero: </strong>{generos.map(genero => genero.name).join(" - ")}</p>
                    {cookie !== undefined ? (
                    <button className="btn alert-primary" onClick={() => agregarAFavoritos()}>
                        {esFavorito ? "♥️" : "🩶"}
                    </button>
                ) : null}
                </section>
            </section>

        </div>

    )
}

export default DetallePelicula;