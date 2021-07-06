import React, { Component } from 'react';

export default class Characters extends Component {
    constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }
  
  async fetchCharacters() {
    const requestReturn = await fetch('https://rickandmortyapi.com/api/character')
    const requestCharacters = await requestReturn.json()
    this.setState({
      characters: requestCharacters.results,
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return (
      <div>
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
