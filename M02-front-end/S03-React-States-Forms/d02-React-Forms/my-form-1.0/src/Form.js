import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleNameChange = this.handleNameChange.bind(this);
    
    this.state = {
      país: '',
      nomeCompleto: '',
      idade: 0,
      ultimoAno: ''
    }
  }

  handleNameChange(event) {
    this.setState({
      nomeCompleto: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Exercício para aula de React e Componentes Controlados</h1>
        <form className="form">
          <label>
            Escolha o seu país:
            <select>
              <option value="Brasil">Brasil</option>
              <option value="Outro">Outro</option>
            </select>
          </label>

          <label>
            Nome Completo: 
            <input
              type='text'
              value={ this.state.nomeCompleto }
              onChange={ this.handleNameChange }
            />
          </label>

          <label>
            Idade: <input type='number' />
          </label>

          <label>
            Conte aqui como foi o seu último ano:
            <textarea name="últimoAno" rows={4} cols={40} />
          </label>
        </form>
      </div>
    )
  }
}

export default Form