import React, {Component} from "react";
import Formulario from "./components/Formulario"
import ListaDeNotas from "./components/ListaDeNotas"
import "./style.css"



class App extends Component {

  constructor(props) {
    super();
    this.state = {
      notas: []
    }
  }


  criarCardNota(titulo, texto){
    const novaNota = {titulo: titulo, texto: texto};
    console.log(novaNota.titulo);
    console.log(novaNota.texto);
    const novoArrayNotas = [... this.state.notas, novaNota];
    const novoEstado ={
      notas: novoArrayNotas
    }
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="section1">
        <Formulario criarCardNota={this.criarCardNota.bind(this)}/>
        <ListaDeNotas notas ={this.state.notas} />
      </section>
    );
  }
}

export default App;
