import React from 'react'
import CharacterCards from '../CharacterCards/CharacterCards'
import './CharacterContainer.css'
import { NavLink } from 'react-router-dom'


const CharacterContainer = ({ characters, fav, hideFav }) => {

    const characterCards = characters.results.map(character => {
        return <div className='character-card-container' key={character.id}>
            <NavLink to={`/character/${character.id}`}>

                <CharacterCards
                    image={character.image}
                    name={character.name}
                    id={character.id}
                    fav={fav}
                    hide={hideFav}
                />
            </NavLink>
            <div className='name-fav-style-box'>
                <p className='character-name'>{character.name}</p>
                <button className='add-to-fav-button' onClick={() => fav(character.id)}>Add to Favorites</button>
            </div>
        </div>

    })

    return (
        <section className='card-container'>
            {characterCards}

        </section>
    )
}
export default CharacterContainer