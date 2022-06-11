import React, { Component } from 'react'
import CharacterContainter from './CharacterContainer/CharacterContainer'
import './App.css';
import { Route, NavLink } from 'react-router-dom'
import CharacterPage from './CharacterPage/CharacterPage'
import FavCharacters from './FavCharacters/FavCharacters'
import Pagination from './Pagination/Pagination'
import { homePage } from './Api'

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: '',
      favCharacters: [],
      favorites: false,
      currentPage: 1,

    }
  }
  componentDidMount() {
    homePage.then(data => this.setState({ characters: data }))
  }

  componentDidUpdate(_, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.fetchCharacters(this.state.currentPage)
    }
  }

  fetchCharacters = (number) => {
    console.log(number)
    fetch(`https://rickandmortyapi.com/api/character?page=${number}`)
      .then(data => data.json())
      .then(data => this.setState(prevState => ({ characters: data, favCharacters: prevState.favCharacters, currentPage: number })))

  }

  addToFavorite = (id) => {
    const data = this.state.characters.results.find(character => character.id === id);
    let ids = this.state.favCharacters.map(character => character.id)
    if (!ids.includes(id)) {
      this.setState({
        favCharacters: [...this.state.favCharacters, data]
      })
    }
  }
  removeFromFavorites = (id) => {
    const remove = this.state.favCharacters.filter(character => character.id !== id);
    this.setState({ favCharacters: remove })
  }

  takeMeHome = () => {
    homePage.then(data => this.setState({ characters: data, favorites: false, currentPage: 1 }))
  }

  takeMeToFav = () => {
    this.setState({ favorites: true })
  }

  nextPage = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1
    }))
  }

  previousPage = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage - 1
    }))
  }

  changePage = (event) => {
    const pageNumber = Number(event.target.textContent)
    this.setState({ currentPage: pageNumber })
  }
  render() {
    return (
      <main className='main-RnM'>
        <div className='style-title-box'>
          <h1 className='title'>Wubba Lubba Dub Dub</h1>
        </div>
        <nav>
          <NavLink to="/">
            {this.state.favorites ? <button onClick={() => this.takeMeHome()}>Home</button> : ''}
          </NavLink>
          <NavLink to="/fav">
            {this.state.favorites ? '' : <button onClick={() => this.takeMeToFav()}> Favorites</button>}
          </NavLink>
        </nav>
        <Route exact path='/' render={() => this.state.characters ? <CharacterContainter characters={this.state.characters} fav={this.addToFavorite} hideFav={this.takeMeToFav} /> : ''} />
        <Route exact path='/fav' render={() => <FavCharacters favorites={this.state.favCharacters} remove={this.removeFromFavorites} />} />
        <Route exact path='/character/:id' render={({ match }) => {
          return <CharacterPage characterPage={match.params.id} />
        }} />
        <Route exact path='/' render={() => <Pagination characters={this.state.characters} setCharacters={this.fetchCharacters} currentPage={this.state.currentPage} next={this.nextPage} prev={this.previousPage} changePage={this.changePage} />} />
      </main>
    );
  }
}


export default App;
