import React from 'react'
import './CharacterCard.css'

const CharacterCards = ({ image, name, id, hide }) => {

    return (
        <section onClick={() => hide()} className='circle'>
            <img className='character-image' src={image} />
        </section>
    )
}
export default CharacterCards