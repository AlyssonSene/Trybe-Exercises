import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
        </label>
        <input id="id-email" type="email" />
        <input id="btn-send" data-testid="id-send" type="button" value="Enviar" />
        <input id="btn-back" data-testid="id-back" type="button" value="Voltar" />
    </div>
    );
  }
}
