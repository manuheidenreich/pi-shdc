import React,{Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class FormBusqueda extends Component {
    constructor(props){
        super(props);
        this.state = {
            valor: ""
        }
    }
    

    controlarCambios(e){
        this.setState({valor:e.target.value})
    }

    ejecutarBusqueda(e,id){
        e.preventDefault();
        this.props.history.push("./Screens/Results/Results/" + this.state.valor)
    }

    render(){
        return(
            <div className="FormBusqueda">
                <form>
                    <input type="text" onChange={(e=>this.controlarCambios(e))} value={this.state.valor}></input>
                    <button type="submit" onClick={(e)=>this.ejecutarBusqueda(e)}>Buscar</button>
                </form>
            </div>
        )
    }
}

export default withRouter(FormBusqueda)