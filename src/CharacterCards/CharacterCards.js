import React from 'react'

const CharacterCards = ({ image, name, fullDetails }) => {

    return (
        <section>
            <p>Hello im a card</p>
            <img src={image} />
            <p>{name}</p>
        </section>
    )
}
export default CharacterCards