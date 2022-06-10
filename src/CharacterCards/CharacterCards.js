import React from 'react'
import './CharacterCard.css'

const CharacterCards = ({ image, name, id }) => {

    return (
        <section className='circle'>
            <img className='character-image' src={image} />
        </section>
    )
}
export default CharacterCards