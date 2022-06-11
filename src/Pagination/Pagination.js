import React, { Component } from 'react'
import './Pagination.css'

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            pageRange: [],
            maxPages: 0
        }
    }
    componentDidMount() {
        if (this.props.length) {
            let numOfPages = this.props.characters.info.pages
            let allPages = []
            for (let i = 1; i <= numOfPages; i++) {
                return allPages.push(i)
            }

            this.setState(prevState => ({ currentPage: prevState.currentPage, pageRange: allPages, maxPages: numOfPages }))
        }
    }

    componentDidUpdate(_, prevState) {
        if (prevState.currentPage !== this.state.currentPage) {
            console.log('at least this works')
            this.props.setCharacters(this.state.currentPage)
        }
    }
    fetchCharacters = (number) => {
        fetch(`https://rickandmortyapi.com/api/character?page=${number}`)
    }
    // nextPage = () => {
    //     this.setState(prevState => ({
    //         currentPage: prevState.currentPage + 1
    //     }))
    // }

    // previousPage = () => {
    //     this.setState(prevState => ({
    //         currentPage: prevState.currentPage - 1
    //     }))
    // }

    changePage = (event) => {
        const pageNumber = Number(event.target.textContent)
        this.setState({ currentPage: pageNumber })
    }

    // getPgNumSiblings = () => {
    //     const num = this.currentPage - 1;
    //     return  const children = this.state.pageRange.slice(num, num + 2)

    // }
    returnMaxPages = () => {
        this.props.setCharacters(42)
        this.setState({ currentPage: 42 })
    }




    render() {

        return (
            <div>
                <button onClick={() => this.props.prev()}
                    className={`prev ${this.state.currentPage === 1 ? 'disabled' : ''}`}>
                    prev
                </button>
                <button onClick={() => this.props.setCharacters(1)}>
                    1
                </button>

                <button onClick={() => this.returnMaxPages()}>
                    42
                </button>
                <button
                    onClick={() => this.props.next()}
                    className={`next ${this.state.currentPage === this.state.maxPages ? 'disabled' : ''}`}
                >
                    next
                </button>
            </div>
        )
    }
}
export default Pagination