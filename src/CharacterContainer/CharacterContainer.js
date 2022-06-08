import React from 'react'
import CharacterCards from '../CharacterCards/CharacterCards'


const CharacterContainer = (characters) => {
    console.log('is this what you are looking for', characters.characters.results[0])

    const characterCards = characters.characters.results.map(character => {
        return <CharacterCards
            image={character.image}
            name={character.name}
            allInfo={character}
        />


    })

    return (
        <section>
            {characterCards}
        </section>
    )
}
export default CharacterContainer