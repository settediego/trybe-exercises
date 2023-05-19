import React from "react";
import "./App.css";
import juices from './data';
import copo from '../src/assets/copo.png';

// 1. Listar os nomes dos sucos ✅
// 2. Renderizar o copo do suco ✅
// 3. Mudar a cor do copo. ✅
// 4. Criar o input de texto ✅
// 5. Armazenar as informações do input no estado ✅
// 6. Filtrar os sucos ✅

// Bônus. Remover case sensitive do filtro ✅

class App extends React.Component {

  state = {
    colorFilter: '',
    count: 0
  }

  handleColorFilterChange = (event) => {
    this.setState({
      colorFilter: event.target.value
    });
  }

  // handlePlusClick = () =>{
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }

  // handleMinusClick = () =>{
  //   this.setState({
  //     count: this.state.count-1
  //   })
  // }

  render() {
    const { colorFilter } = this.state;
    
    console.log(colorFilter);

    console.log(juices);
    return (
      <>

        {/* <button onClick={this.handleMinusClick}>-</button>
        <p>{count}</p>
        <button onClick={this.handlePlusClick}>+</button> */}


        <h1>🍹 Que Suco Foi Esse? 🍹</h1>

        <input type='text' onChange={this.handleColorFilterChange} />

        <ul className="juice-container">
          {juices.filter((juice) => juice.suco.toLowerCase().includes(colorFilter.toLowerCase()))
            .map((juice, index) =>
              <li key={index}>
                <img className='glass' src={copo}
                  style={{ backgroundColor: juice.hex }}
                  alt='Copo' />
                <p className='text-juice'>{`Suco de ${juice.suco}`}</p>
              </li>)}
        </ul>
      </>
    );
  }
}

export default App;