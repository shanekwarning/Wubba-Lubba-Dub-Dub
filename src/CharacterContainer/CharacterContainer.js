import React from 'react'
import CharacterCards from '../CharacterCards/CharacterCards'
import './CharacterContainer.css'
import { NavLink } from 'react-router-dom'


const CharacterContainer = (characters) => {
    console.log('is this what you are looking for', characters.characters.results[0])

    const characterCards = characters.characters.results.map(character => {
        return <NavLink to={`/character/${character.id}`} key={character.id}>

            <CharacterCards
                image={character.image}
                name={character.name}
                id={character.id}
            />
        </NavLink>

    })

    return (
        <section className='card-container'>
            {characterCards}
        </section>
    )
}
export default CharacterContainer