import React, { Component } from 'react'
import CharacterContainter from './CharacterContainer/CharacterContainer'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: '',
      locations: '',

    }
  }
  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(data => data.json())
      .then(data => this.setState({ characters: data }))
  }
  render() {
    return (
      <main className='main-RnM'>
        <div className='style-title-box'>
          <h1 className='title'>Wubba Lubba Dub Dub</h1>
        </div>
        <nav>Hello I am the Nav Bar</nav>
        {this.state.characters ? <CharacterContainter characters={this.state.characters} /> : ''}
      </main>
    );
  }
}


export default App;
