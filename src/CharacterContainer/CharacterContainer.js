import React from 'react'
import CharacterCards from '../CharacterCards/CharacterCards'
import './CharacterContainer.css'
import { NavLink } from 'react-router-dom'


const CharacterContainer = ({ characters, fav }) => {

    const characterCards = characters.results.map(character => {
        return <div key={character.id}>
            <NavLink to={`/character/${character.id}`}>

                <CharacterCards
                    image={character.image}
                    name={character.name}
                    id={character.id}
                    fav={fav}
                />
            </NavLink>
            <p className='character-name'>{character.name}</p>
            <button onClick={() => fav(character.id)}>Add to Favorites</button>
        </div>

    })

    return (
        <section className='card-container'>
            {characterCards}

        </section>
    )
}
export default CharacterContainer