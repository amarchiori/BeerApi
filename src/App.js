import React, { Component } from 'react';
import CardList from './cardlist';
import SearchBox from './SearchBox';
import Scroll from './scroll';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      beers: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${id}`)
      .then(response => response.json())
      .then(breweries => {this.setState({ beers: breweries})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { beers, searchfield } = this.state;
    const filteredBeers = beers.filter(beer => {
      return beer.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !beers.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>Beers Oh Beers</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <Scroll>
          <CardList breweries={filteredBeers}/>
        </Scroll>
      </div>
    )
  }
}

export default App;
