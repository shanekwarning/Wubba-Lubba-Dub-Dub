import React from 'react'

const CharacterCards = ({ image, name, id }) => {

    return (
        <section>
            <img src={image} />
            <p>{name}</p>
        </section>
    )
}
export default CharacterCards