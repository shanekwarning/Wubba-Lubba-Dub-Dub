import React, { Component } from 'react'
import CharacterContainter from './CharacterContainer/CharacterContainer'
import './App.css';
import { Route, NavLink } from 'react-router-dom'
import CharacterPage from './CharacterPage/CharacterPage'

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
        <nav>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
        </nav>
        <Route exact path='/' render={() => this.state.characters ? <CharacterContainter characters={this.state.characters} /> : ''} />
        <Route exact path='/character/:id' render={({ match }) => {
          return <CharacterPage characterPage={match.params.id} />
        }} />
      </main>
    );
  }
}


export default App;
