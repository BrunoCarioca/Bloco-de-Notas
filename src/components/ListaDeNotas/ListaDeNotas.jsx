import React, {Component} from 'react';
import CardNota from '../CardNota/';
import "./style.css";

class ListaDeNotas extends Component {

    render(){
        return(

            <div className="lista-flex">
                <ul>
                    {Array.of(1,1,1,1,1).map((categoria, index) =>{
                        return(
                            <li key={index} className="lista">
                                <CardNota/>
                            </li>
                        );
                    })}
                </ul>
            </div>

        );
    }
}

export default ListaDeNotas;

