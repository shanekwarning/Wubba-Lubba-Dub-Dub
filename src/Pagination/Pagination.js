import React, { Component } from 'react'

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            pageLimit: 5,
            pageRange: [],
            maxPages: 0
        }
    }
    componentDidMount() {
        if (this.props.length) {
            let numOfPages = this.props.characters.info.pages
            let allPages = []
            for (let i = 1; i <= numOfPages; i++) {
                allPages.push(i)
            }
            this.setState({ pageRange: allPages, maxPages: numOfPages })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentPage !== this.state.currentPage) {
            console.log('at least this works')
            this.props.setCharacters(this.state.currentPage)
        }
    }
    fetchCharacters = (number) => {
        fetch(`https://rickandmortyapi.com/api/character?page=${number}`)
    }
    nextPage = () => {
        this.setState(prevState => ({
            currentPage: prevState.currentPage + 1
        }))
    }

    previousPage = () => {
        this.setState(prevState => ({
            currentPage: prevState.currentPage - 1
        }))
    }

    changePage = (event) => {
        const pageNumber = event.target.textContent
        this.setState({ currentPage: pageNumber })
    }

    showPagesOptions = () => {
        let start = Math.floor((this.changePage - 1) / this.state.pageLimit) * this.state.pageLimit;
        return new Array(this.state.pageLimit).fill().map((_, idx) => start + idx + 1)
    }

    render() {
        return (
            <div>
                <button onClick={this.previousPage}
                    className={`prev ${this.state.currentPage === 1 ? 'disabled' : ''}`}>
                    prev
                </button>

                {this.showPagesOptions().map((item, index) => (
                    <button
                        key={index}
                        onClick={this.changePage}
                        className={`pageOptions ${this.state.currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}
                <button
                    onClick={this.nextPage}
                    className={`next ${this.state.currentPage === this.state.maxPages ? 'disabled' : ''}`}
                >
                    next
                </button>
            </div>
        )
    }
}
export default Pagination