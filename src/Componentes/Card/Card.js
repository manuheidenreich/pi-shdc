import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from 'react-router-dom';

const cookies = new Cookies();

function Card(props) {

    const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
    const [esFavorito, setEsFavorito] = useState(false);
    const [cookie, setCookie] = useState(undefined);
    const navigate = useNavigate();

    useEffect(() => {

        let arraypelisfavoritas = JSON.parse(localStorage.getItem("favoritosMovie")) || [];
        let arrayseriesfavoritas = JSON.parse(localStorage.getItem("favoritosSerie")) || [];


        if (props.tipo === "movie" && arraypelisfavoritas.includes(props.id)) {
            setEsFavorito(true);
        }


        if (props.tipo === "tv" && arrayseriesfavoritas.includes(props.id)) {
            setEsFavorito(true);
        }


        let cookieValue = cookies.get("email");
        setCookie(cookieValue);
    }, []);



    const mostrarDescripcionHandler = () => {
        setMostrarDescripcion(!mostrarDescripcion);
    };


    const agregarAFavoritos = () => {
        let arraypelisfavoritas = JSON.parse(localStorage.getItem("favoritosMovie")) || [];
        let arrayseriesfavoritas = JSON.parse(localStorage.getItem("favoritosSerie")) || [];

        if (props.tipo === "movie") {
            if (arraypelisfavoritas.includes(props.id)) {
                let nuevoArray = arraypelisfavoritas.filter((id) => id !== props.id);
                localStorage.setItem("favoritosMovie", JSON.stringify(nuevoArray));
                setEsFavorito(false);
            } else {

                arraypelisfavoritas.push(props.id);
                localStorage.setItem("favoritosMovie", JSON.stringify(arraypelisfavoritas));
                setEsFavorito(true);
            }
        }

        if (props.tipo === "tv") {
            if (arrayseriesfavoritas.includes(props.id)) {

                let nuevoArray = arrayseriesfavoritas.filter((id) => id !== props.id);
                localStorage.setItem("favoritosSerie", JSON.stringify(nuevoArray));
                setEsFavorito(false);
            } else {

                arrayseriesfavoritas.push(props.id);
                localStorage.setItem("favoritosSerie", JSON.stringify(arrayseriesfavoritas));
                setEsFavorito(true);
            }
        }
    };

    const irADetalle = () => {
        navigate(`/detalle/${props.tipo}/${props.id}`);
    };


    return (
        <article className="single-card-movie">
            <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w342${props.imagen}`}
                alt={props.nombre}
            />
            <div className="cardBody">
                <h5 className="card-title">{props.nombre}</h5>

                {mostrarDescripcion ? (
                    <p className="card-text">{props.descripcion}</p>
                ) : null}

                <button
                    onClick={mostrarDescripcionHandler}
                    className="btn btn-primary"
                >
                    {mostrarDescripcion ? "Ver menos" : "Ver descripción"}
                </button>

                <button onClick={irADetalle} className="btn btn-primary">
                    Ir a Detalle
                </button>

                {cookie !== undefined ? (
                    <button className="btn alert-primary" onClick={agregarAFavoritos}>
                        {esFavorito ? "♥️" : "🩶"}
                    </button>
                ) : null}
            </div>
        </article>
    );
}

export default Card;


