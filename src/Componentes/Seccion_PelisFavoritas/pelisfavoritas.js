import React,{ Component } from "react";

class PelisFavoritas extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculas : null,
            favoritosMovie : [],
        }
    }

    componentDidMount(){
        let arrayfavoritosMovie=JSON.parse(localStorage.getItem("favoritosMovie"))
        if (arrayfavoritosMovie.length===0){
            return
        }
        else{
            arrayfavoritosMovie.map((id)=>{
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`)
                    .then((response) => response.json())
                    .then((data) => {
                        this.setState({
                        peliculas : this.state.peliculas.push(data.results)
                        });
                    })
                    .catch((error) => console.log(error));
                })
        }
            
    }

    render() {
        if (this.state.favoritosMovie.length===0) {
            return (
                <div>
                    <img src="./img/cargando.gif" alt="Cargando..."></img>
                </div>
            )
        }
        return (
            <div className="cards">
                {this.state.peliculas.map((pelicula) => (
                    <Card
                        key={pelicula.id}
                        id={pelicula.id}
                        nombre={pelicula.title}
                        imagen={pelicula.poster_path}
                        descripcion={pelicula.overview}
                        tipo="movie"
                    />
                ))}
            </div>

        )
    }
}

export default PelisFavoritas;