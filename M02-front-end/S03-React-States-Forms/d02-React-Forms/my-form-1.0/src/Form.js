import React, { Component } from "react";
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

  }

  state = {
    país: '',
    nomeCompleto: '',
    idade: 0,
    ultimoAno: '',
    termos: false,
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Exercício para aula de React e Componentes Controlados</h1>
        <form className="form">
          <fieldset>
            <legend>Informações pessoais</legend>

            <label>
              Escolha o seu país:
              <select
                name='país'
                value={this.state.país}
                onChange={this.handleChange}
              >
                <option value="Brasil">Brasil</option>
                <option value="Outro">Outro</option>
              </select>
            </label>

            <label>
              Nome Completo:
              <input
                name='nomeCompleto'
                type='text'
                value={this.state.nomeCompleto}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Idade:
              <input
                name='idade'
                type='number'
                value={this.state.idade}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>

          <label>
            Conte aqui como foi o seu último ano:
            <textarea
              name="ultimoAno"
              rows={4}
              cols={40}
              value={this.state.ultimoAno}
              onChange={this.handleChange}
            />
          </label>

            <input type='file' />
          <label>
            Concordo com os termos
            <input
              name='termos'
              type='checkbox'
              value={this.state.termos}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    )
  }
}

export default Form