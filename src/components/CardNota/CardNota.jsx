import React, {Component} from "react";
import "./style.css";

class CardNota extends Component {

    render(){
        return (
            <div className="Nota-wrapper">
                <header>
                    <h2 className="nota-title">Título</h2>
                </header>
                <article class="nota-content">
                    <p>Aqui fica o conteúdo da nota</p>
                </article>
            </div>
        )}

}

export default CardNota;