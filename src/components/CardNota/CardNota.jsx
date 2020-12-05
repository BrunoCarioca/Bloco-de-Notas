import React, {Component} from "react";
import "./style.css";

class CardNota extends Component {

    render(){
        return (
            <div className="Nota-wrapper">
                <header>
                    <h2 className="nota-title">{this.props.titulo}</h2>
                </header>
                <article className="nota-content">
                    <p>{this.props.texto}</p>
                </article>
            </div>
        )}

}

export default CardNota;