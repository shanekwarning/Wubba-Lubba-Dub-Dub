import React, { Component } from 'react'

class CharacterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            character: []
        }
    }

    componentDidMount() {
        // this.setState({ character: this.props.characterPage })
        fetch(`https://rickandmortyapi.com/api/character/${this.props.characterPage}`)
            .then(data => data.json())
            .then(data => this.setState({ character: data }))
    }

    render() {
        return (
            <section>
                <div>
                    {this.state.character ? <img src={this.state.character.image} /> : ''}
                </div>
            </section>
        )
    }
}

export default CharacterPage