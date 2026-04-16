import React,{ Component } from "react";
import Card from "../Card/Card";

const apikey = "7aa285e4357da2124c14f7534bfc86a0";

class SeccionSeriesPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: []
        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=" + apikey)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    series: data.results
                });
            })
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <div className="row cards" id="tv">
                {this.state.series.map((serie) => (
                    <Card
                        history={this.props.history}
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
}

export default SeccionSeriesPopulares;