import React, {Component} from 'react';
import "./style.css";

class ListaDeNotas extends Component {

    render(){
        return(

            <div className="lista-flex">
                <ul>
                    {Array.of(1,1,1).map((categoria, index) =>{
                        return(
                            <li key={index} className="lista">
                                <p>item {index}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>

        );
    }
}

export default ListaDeNotas;

