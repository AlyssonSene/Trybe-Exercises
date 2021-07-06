import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super()
      this.state = {
        numeroDeClicks: 0,
      }

      this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeClicks: estadoAnterior.numeroDeClicks + 1
    }))
  }
  changeColor = () => {
    this.setState((estadoAnterior, _props) => ({
      
    }))
  }

  render() {
    return (
      <div className="App">
        <p className="clicks">{this.state.numeroDeClicks}</p>
        <div >
          <button onClick={this.handleClick} className="button">Aperte aqui </button>
        </div>
       
      </div>
    )
  }
}

export default App