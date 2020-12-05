import React, {Component} from 'react';
import CardNota from '../CardNota/';
import "./style.css";

class ListaDeNotas extends Component {

    render(){
        return(

            <div className="lista-flex">
                <ul>
                    {this.props.notas.map((nota, index) =>{
                        return(
                            <li key={index} className="lista">
                                <CardNota titulo={nota.titulo} texto={nota.texto} />
                            </li>
                        );
                    })}
                </ul>
            </div>

        );
    }
}

export default ListaDeNotas;

