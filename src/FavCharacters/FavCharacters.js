import React from 'react'
import CharacterCards from '../CharacterCards/CharacterCards'
import './FavCharacters.css'
import { NavLink } from 'react-router-dom'


const CharacterContainer = ({ favorites, remove }) => {
    let characterCards;
    if (favorites.length) {
        characterCards = favorites.map(character => {
            return <div key={character.id}>
                <NavLink to={`/character/${character.id}`}>

                    <CharacterCards
                        image={character.image}
                        name={character.name}
                        id={character.id}

                    />
                </NavLink>
                <p className='character-name'>{character.name}</p>
                <button onClick={() => remove(character.id)}>Delete their existance</button>
            </div>

        })
    } else {
        characterCards = <p className='no-favs'>No favorites at this time.</p>
    }
    return (
        <section className='card-container'>
            {characterCards}

        </section>
    )
}
export default CharacterContainer