import React, { Component } from 'react'

export default class Forms extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      age: 0,
      moreInfo: '',
      checkbox: false,
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }
  render() {
    const { name, email, age, moreInfo, checkbox } = this.props;
    return (
      <div>
        <h1> Meu forms em React</h1>
        <form className="form">

          <label> 
            Name: 
              <input 
                name="name" 
                type="text" 
                placeholder="Name" 
                value={ name } 
                onChange={this.handleChange}>
              </input>
          </label><br/>

          <label> 
            E-mail: 
              <input 
                name="email"
                type="email" 
                placeholder="exemplo@email.com" 
                value={ email } 
                onChange={this.handleChange}>
              </input>
          </label><br/>

          <label> 
            Idade: 
              <input type="number"
                name="age" 
                value={ age } 
                onChange={this.handleChange}>
              </input>
          </label><br/>

          <label> 
            Informações adicionais:
              <textarea 
                name="moreInfo"
                placeholder="Conte um puco sobre você" 
                maxLength="100"
                value={ moreInfo } 
                onChange={this.handleChange}>
              </textarea>
          </label><br/>

          <label>
            Aceito os termos 
              <input 
                name="checkbox" 
                type="checkbox" 
                value={ checkbox } 
                onChange={this.handleChange}>
              </input>
          </label>
        </form>
      </div>
    )
  }
}
