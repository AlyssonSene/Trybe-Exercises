import React, { Component } from 'react'

export default class FindCharacter extends Component {
  constructor(props) {
    super(props)
    this.state ={
      name:'',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <label htmlFor="name">
          Search character:
          <input
            id="name"
            type="text"
            name="name"
            value= { name }
            onChange={ this.handleChange }
          >
          </input>
        </label>
      </div>
    )
  }
}
