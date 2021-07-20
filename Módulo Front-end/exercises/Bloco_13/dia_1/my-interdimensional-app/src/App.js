import React, { Component } from 'react';
import './App.css';
import fetchAPI from './components/services/api';
import ListCharacters from './components/ListCharacters';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      isFetching: true,
      c: [],
    };

    this.setFilter = this.setFilter.bind(this);
  }

  async componentDidMount() {
    const characters = await fetchAPI();
    this.setCharacters(characters);
  }

  setCharacters(characters) {
    this.setState((state) => ({
      ...state,
      characters: [...characters],
      isFetching: false,
      c: [...characters],
    }));
  }

  setFilter(founds) {
    this.setState((state) => ({ ...state, c: [...founds] }));
    return founds;
  }

  render() {
    const { characters, isFetching, c } = this.state;

    return (
      <>
        <Header />
        <main>
          <SearchBar characters={ characters } setFilter={ this.setFilter } />
          <ListCharacters characters={ c } isFetching={ isFetching } />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
