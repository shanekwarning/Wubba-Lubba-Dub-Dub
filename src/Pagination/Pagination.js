import React, { Component } from 'react'
import './Pagination.css'
import { homePage } from '../Api'

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageRange: [],
            currentPage: 0
        }
    }

    componentDidMount() {
        let pages = []

        homePage.then(data => {
            for (let i = 1; i <= data.info.pages; i++) {
                pages.push(i)
            };
        })
            .then(this.setState({ pageRange: pages }))



    }


    getNumAfterCurrentPage = () => {
        let afterCurrentPage = this.state.pageRange.slice(this.props.currentPage, this.props.currentPage + 3)
        return afterCurrentPage
    }

    getNumBeforeCurrentPage = () => {
        let beforeCurrentPage = this.state.pageRange.slice(this.props.currentPage - 3, this.props.currentPage - 1)
        return beforeCurrentPage
    }



    render() {
        const before = this.getNumBeforeCurrentPage().map(num => {
            return <button className='pagination-button' onClick={(event) => this.props.changePage(event)}>{num}</button>
        })
        const after = this.getNumAfterCurrentPage().map(num => {
            return <button className='pagination-button' onClick={(event) => this.props.changePage(event)}>{num}</button>
        })
        return (
            <div className='pagination'>
                <button onClick={() => this.props.prev()}
                    className={`prev ${this.state.currentPage === 1 ? 'disabled' : ''}`}>
                    prev
                </button>
                <button className='pagination-button' onClick={() => this.props.setCharacters(1)}>
                    First
                </button>
                <p className='pagination-dots'>...</p>
                {before}
                <p className='pagination-current-page'>{this.props.currentPage}</p>
                {after}
                <p className='pagination-dots' >...</p>
                <button className='pagination-button' onClick={() => this.props.setCharacters(this.state.pageRange.length)}>
                    Last
                </button>
                <button
                    onClick={() => this.props.next()}
                    className={`next ${this.props.currentPage === this.state.pageRange.length ? 'disabled' : ''}`}
                >
                    next
                </button>
            </div>
        )
    }
}
export default Pagination