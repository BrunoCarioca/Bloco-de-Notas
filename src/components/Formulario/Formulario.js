import React, { Component} from "react";
import "./style.css";

class Formulario extends Component {

    render(){
        return (
            <form className="form-cadastro">
                <h2>Nota:</h2>
                <input type="text" placeholder="Título" className="form-text" />
                <textarea rows={15} placeholder="Escreva aqui sua nota.." className="form-textarea"></textarea>
                <button className="btn">Criar nota</button>
            </form>
            

        );
    }

}

export default Formulario;
