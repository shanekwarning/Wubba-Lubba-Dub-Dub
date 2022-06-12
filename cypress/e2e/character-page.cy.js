describe('Favorites', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://rickandmortyapi.com/api/character?page=1', { fixture: 'gallery-page-one' })
        cy.intercept('GET', 'https://rickandmortyapi.com/api/character/1', { fixture: 'character-page' })
        cy.visit("http://localhost:3000")
    })

    it('should be able to view a character page', () => {
        cy.get('.character-image').first().click()
    })

    it('should have information about the character', () => {
        cy.get('.character-image').first().click()
        cy.get('img').should('have.attr', 'src')
        cy.get('.character-info').children().first().contains("Name: Rick Sanchez")

        cy.get('.episodes').should('have.length', 51)
    })

    it('should be able to go back to the home page', () => {
        cy.get('.character-image').first().click()

        cy.get('button').click()
        cy.get('.character-card-container').should('have.length', 10)
    })

})