import React, { Component} from "react";
import "./style.css";

class Formulario extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handlerMudancaTitulo(event){
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handlerMudancaTexto(event){
        event.stopPropagation();
        this.texto = event.target.value;
    }

    _criarNota(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.criarCardNota(this.titulo,this.texto);
    }


    render(){
        return (
            <form className="form-cadastro" onSubmit ={this._criarNota.bind(this)} >
                <h2>Nota:</h2>
                <input 
                    type="text" 
                    placeholder="Título" 
                    className="form-text" 
                    onChange={this._handlerMudancaTitulo.bind(this)}
                />
                <textarea 
                    rows={15} 
                    placeholder="Escreva aqui sua nota.." 
                    className="form-textarea" 
                    onChange={this._handlerMudancaTexto.bind(this)}>
                </textarea>
                <button className="btn">Criar nota</button>
            </form>
            

        );
    }

}

export default Formulario;
