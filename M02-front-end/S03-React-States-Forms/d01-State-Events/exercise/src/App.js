import React, { Component } from 'react';

//   function handleClick1() {
//   console.log('1st btn was clicked');
// }
//   function handleClick2() {
//   console.log('2nd btn was clicked');
// }
//   function handleClick3() {
//   console.log('3rd btn was clicked');
// }

// The functions were out of the component, but now we put it inside, took off the function(because it`s not needed) and add this. before
// the place where we execute it inside the Component.

class App extends Component {
  // Podemos declarar as funções por meio de arrow functions ou via constructor/bind para que elas tenham acesso ao this.
  // Como ficaria com o constructor:
  
  // constructor() {
  //   super()          - temos que citar a função super para manter a lógica de programação de origem do componente.  
  //   this.handleClick1 = this.handleClick1.bind(this)            
  //   this.handleClick2 = this.handleClick2.bind(this)            
  //   this.handleClick3 = this.handleClick3.bind(this)            
  // }
  // 
  // handleClick1() {
  //   console.log('1st btn was clicked');
  // }
  // handleClick2() {
  //   console.log('2nd btn was clicked');
  // }
  // handleClick3() {
  //   console.log('3rd btn was clicked');
  // }

  // Podemos usar da forma como eu fiz acima ou da forma como está abaixo(parte antes do render).


  // Na parte 3 do exercício foi solicitado que eu colocasse estado nos botões e alterasse eles com os cliques.
  // Mantive as arrow functions na declaração das funções, e usei a Public Class Fields para a declaração do STATE, feito nas linhas abaixo.

  state = {
    firstBtn: 0,
    secondBtn: 0,
    thirdBtn: 0,
  };
  
  // Na parte 4 do exercício preciso adicionar lógica para que um console.log diga a cor do botão e que ele fique verde qnd o número de cliques for par.

  getButtonColor = (num) => {
    return num % 2 === 0 ? 'green' : 'white';
  };

  // Nas funções adicionei a função setState para alterar de forma dinâmica o estado de cada botão ao ser clicado.

  handleClick1 = () => {
    const { firstBtn } = this.state;
    this.setState((initialValue, _props) => ({
      firstBtn: initialValue.firstBtn + 1,
    }), () => {
      console.log(`First button color ${this.getButtonColor(firstBtn)}`)
      });
  }
  handleClick2 = () => {
    const { secondBtn } = this.state;
    this.setState((initialValue, _props) => ({
      secondBtn: initialValue.secondBtn + 1,
    }), () => {
      console.log(`Second button color ${this.getButtonColor(secondBtn)}`)
    });
  }
  handleClick3 = () => {
    const { thirdBtn } = this.state;
    this.setState((initialValue, _props) => ({
      thirdBtn: initialValue.thirdBtn + 1,
    }), () => {
      console.log(`Third button color ${this.getButtonColor(thirdBtn)}`)
    });
  }
  
  // No render, chamei os estados de cada botão utilizando as chaves do objeto THIS, na chave STATE, buscando a chave referente ao numero de cliques de cada
  // botão, registrando a quantidade de cliques a partir das funções criadas acima.

  render() {
    const { firstBtn, secondBtn, thirdBtn } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={this.handleClick1}
          style={ { backgroundColor: this.getButtonColor(firstBtn) } }
        >
            1st btn | number of clicks: {this.state.firstBtn}
        </button>
        <button 
          type="button"
          onClick={this.handleClick2}
          style={ { backgroundColor: this.getButtonColor(secondBtn) } }
        >
            2nd btn | number of clicks: {this.state.secondBtn}
        </button>
        <button 
          type="button"
          onClick={this.handleClick3}
          style={ { backgroundColor: this.getButtonColor(thirdBtn) } }
        >
            3rd btn | number of clicks: {this.state.thirdBtn}
        </button>
      </div>
    );
  }
}

export default App;
