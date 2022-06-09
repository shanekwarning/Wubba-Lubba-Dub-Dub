import React, { Component } from 'react'
import './CharacterPage.css'

class CharacterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            character: ''
        }
    }

    componentDidMount() {
        fetch(`https://rickandmortyapi.com/api/character/${this.props.characterPage}`)
            .then(data => data.json())
            .then(data => this.setState({ character: data }))
    }





    render() {
        let charactersEpisodes;
        let show;

        // if (this.state.character === '') {
        //     return charactersEpisodes = ''
        // } else {
        //     charactersEpisodes = this.state.character.episodes.map(episode => {
        //         console.log(episode.split('/'))
        //         return <p> {episode.split('/').slice(-1)} </p>
        //     })
        // }
        if (this.state.character === '') {
            return
        } else if (this.state.character !== '') {
            console.log(this.state.character.episode[0])
            charactersEpisodes = this.state.character.episode.map(episode => {
                show = episode.toString().split('/').splice(-1)
                return <p className="episodes">Episode{show}</p>
            })

        }
        console.log(show)
        console.log(charactersEpisodes)
        return (
            <section className='character-page-main'>
                {this.state.character ?
                    <div className='character-page-styling'>
                        <div className='character-photo-container'>
                            <img className='character-photo' src={this.state.character.image} />
                        </div>
                        <div>
                            <p>Name: {this.state.character.name}</p>
                            <p>Gender: {this.state.character.gender}</p>
                            <p>Species: {this.state.character.species}</p>
                            <p>Status: {this.state.character.status}</p>
                            {this.state.character.type ? <p>Type of Being :{this.state.character.type}</p> : ''}
                            {origin ? <p>Origin: {this.state.character.origin.name}</p> : ''}
                        </div>
                    </div> : ''}

                {charactersEpisodes ? <div className='episode-container'>{charactersEpisodes} </div> : ''}
            </section>
        )
    }
}

export default CharacterPage