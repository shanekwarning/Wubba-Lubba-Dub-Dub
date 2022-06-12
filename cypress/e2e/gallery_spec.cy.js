describe('Character gallery', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rickandmortyapi.com/api/character?page=1', { fixture: 'gallery-page-one' })
    cy.visit("http://localhost:3000")
  })

  it('has a title Wubba Lubba Dub Dub', () => {
    cy.get('h1').should('have.text', 'Wubba Lubba Dub Dub')
  })

  it('should have a favorites button', () => {
    cy.get('button').contains('Favorites').click()
  })

  it('should have cards that have an image, name and add to favorites button', () => {
    cy.get('.character-card-container').first()
      .children().children().children().should('have.attr', 'src')

    cy.get('.character-name').first().should('have.text', 'Rick Sanchez')

    cy.get('.name-fav-style-box').first().children().should('have.class', 'add-to-fav-button')
  }
  )

  it('should have ten characters', () => {
    cy.get('.character-card-container')
      .should('have.length', 10)
  })

  it('should have buttons to take you to the next page and previous page', () => {

    cy.intercept('GET', 'https://rickandmortyapi.com/api/character?page=2', { fixture: 'gallery-page-two' })

    cy.get('.next').click()
    cy.get('.character-name').wait(200).first().should('have.text', 'Aqua Morty')

    cy.get('.pagination-current-page').contains('2')
    cy.intercept('GET', 'https://rickandmortyapi.com/api/character?page=1', { fixture: 'gallery-page-one' })

    cy.get('.prev').click()
    cy.get('.character-name').wait(200).first().should('have.text', 'Rick Sanchez')
    cy.get('.pagination-current-page').contains('1')

  })


})