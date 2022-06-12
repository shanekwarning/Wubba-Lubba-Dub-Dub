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

        if (this.state.character === '') {
            return
        } else if (this.state.character !== '') {
            charactersEpisodes = this.state.character.episode.map(episode => {
                show = episode.toString().split('/').splice(-1)
                return <p className="episodes">Episode{show}</p>
            })

        }
        return (
            <section className='character-page-main'>
                {this.state.character ?
                    <div className='character-page-styling'>
                        <div className='character-photo-container'>
                            <img className='character-photo' src={this.state.character.image} />
                        </div>
                        <div className='character-info'>
                            <p>Name: {this.state.character.name}</p>
                            <p>Gender: {this.state.character.gender}</p>
                            <p>Species: {this.state.character.species}</p>
                            <p>Status: {this.state.character.status}</p>
                            {this.state.character.type ? <p>Type of Being :{this.state.character.type}</p> : ''}
                            {origin ? <p>Origin: {this.state.character.origin.name}</p> : ''}
                        </div>
                    </div> : ''}

                {charactersEpisodes ? <div className='episode-container'>
                    <div className='featured-in-box'> <h3>Featured In</h3> </div>

                    {charactersEpisodes}
                </div> : ''}
            </section>
        )
    }
}

export default CharacterPage