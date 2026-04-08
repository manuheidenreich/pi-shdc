import React,{ Component } from "react";

class SeriesFavoritas extends Component{
    constructor(props){
        super(props)
        this.state={
            series : null,
            favoritosSerie : [],
        }
    }

    componentDidMount(){
        let arrayfavoritosSerie=JSON.parse(localStorage.getItem("favoritosSeriee"))
        if (arrayfavoritosSerie.length===0){
            return
        }
        else{
            arrayfavoritosSerie.map((id)=>{
                fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apikey}`)
                    .then((response) => response.json())
                    .then((data) => {
                        this.setState({
                        series : this.state.series.push(data.results)
                        });
                    })
                    .catch((error) => console.log(error));
                })
        }
            
    }

    render() {
        if (this.state.favoritosSerie.length===0) {
            return (
                <div>
                    <img src="./img/cargando.gif" alt="Cargando..."></img>
                </div>
            )
        }
        return (
            <div className="cards">
                {this.state.series.map((serie) => (
                    <Card
                        key={serie.id}
                        id={serie.id}
                        nombre={serie.title}
                        imagen={serie.poster_path}
                        descripcion={serie.overview}
                        tipo="movie"
                    />
                ))}
            </div>

        )
    }
}

export default SeriesFavoritas;