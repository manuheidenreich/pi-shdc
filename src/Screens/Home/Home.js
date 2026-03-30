import React,{ Component } from "react";
import FormBusqueda from "../../Componentes/FormBusqueda/FormBusqueda";

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <FormBusqueda/>
        )
    }
}

export default Home