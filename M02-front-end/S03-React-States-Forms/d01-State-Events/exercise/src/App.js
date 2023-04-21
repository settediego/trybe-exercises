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

  handleClick1 = () => {
    console.log('1st btn "this"', this);
  }
  handleClick2 = () => {
    console.log('2nd btn "this"', this);
  }
  handleClick3 = () => {
    console.log('3rd btn "this"', this);
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>1st btn</button>
        <button onClick={this.handleClick2}>2nd btn</button>
        <button onClick={this.handleClick3}>3rd btn</button>
      </div>
    );
  }
}

export default App;
