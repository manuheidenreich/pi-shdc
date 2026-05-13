import React,{ useEffect, useState } from "react";
import Card from "../Card/Card";

const apikey = "7aa285e4357da2124c14f7534bfc86a0";
function SeccionSeriesPopulares(props) {
    const[series,setSeries] = useState([])
    
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=" + apikey)
            .then((response) => response.json())
            .then((data) => {
                setSeries(data.results)
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="row cards" id="tv">
            {series.slice(4,8).map((serie) => (
                <Card
                    history={props.history}
                    key={serie.id}
                    id={serie.id}
                    nombre={serie.name}
                    imagen={serie.poster_path}
                    descripcion={serie.overview}
                    tipo="tv"
                />
            ))}
        </div>
    );
}


export default SeccionSeriesPopulares;