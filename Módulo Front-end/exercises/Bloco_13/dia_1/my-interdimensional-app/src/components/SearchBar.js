import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      origin: '',
      gender: '',
      status: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.filter = this.filter.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state, [name]: value,
    }));
    this.filter();
  }

  filter() {
    const { characters, setFilter } = this.props;
    const { name, gender, status, origin } = this.state;

    if (name || origin || gender || status) {
      const founds = characters.reduce((acc, character) => {
        if (
          character.name.toLowerCase().includes(name.toLowerCase(name))
        /*           || character.gender === gender
          || character.status === status
          || character.origin.toLowerCase().includes(origin.toLocaleLowerCase) */
        ) {
          acc.push(character);
          return acc;
        }
        return acc;
      }, []);

      return setFilter(founds);
    }
    return setFilter(characters);
  }

  render() {
    const { name, gender, origin, status } = this.state;
    return (
      <div>
        <label htmlFor="input-name">
          Nome:
          <input
            name="name"
            value={ name }
            id="input-name"
            type="text"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-origin">
          Origem:
          <input
            name="origin"
            value={ origin }
            id="input-origin"
            type="text"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="select-id">
          Status:
          <select
            name="status"
            value={ status }
            id="select-id"
            onChange={ this.handleChange }
          >
            <option value="unknown">Desconhecido</option>
            <option value="Alive">Vivo</option>
            <option value="Dead">Morto</option>
          </select>
        </label>
        <label htmlFor="select-gender">
          Gênero:
          <select
            name="gender"
            value={ gender }
            id="select-gender"
            onChange={ this.handleChange }
          >
            <option value="unknown">Desconhecido</option>
            <option value="Male">Masculino</option>
            <option value="Female">Feminino</option>
          </select>
        </label>
      </div>
    );
  }
}

SearchBar.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      origin: PropTypes.shape({ name: PropTypes.string.isRequired }),
      gender: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    },
  )).isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default SearchBar;