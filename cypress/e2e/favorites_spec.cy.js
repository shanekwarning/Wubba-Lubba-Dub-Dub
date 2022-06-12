describe('Favorites', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://rickandmortyapi.com/api/character?page=1', { fixture: 'gallery-page-one' })
        cy.visit("http://localhost:3000")
    })
    it('should have a message letting a user no they do not have favorites if no characters have been added', () => {
        cy.get('button').contains('Favorites').click()
        cy.get('.no-favs').should('have.text', 'No favorites at this time.')
    })

    it('should have a button to go home once you are in favorites', () => {
        cy.get('button').contains('Favorites').click()
        cy.get('button').should('have.text', 'Home').and('not.have.text', 'Favorites')
    })

    it('should be able to add characters to favorites', () => {
        cy.get('.add-to-fav-button').first().click()
        cy.get('.add-to-fav-button').last().click()

        cy.get('button').contains('Favorites').click()

        cy.get('.character-card').should('have.length', 2)

    })
    it('should be not be able to add duplicate characters to favorites', () => {
        cy.get('.add-to-fav-button').first().click()
        cy.get('.add-to-fav-button').first().click()

        cy.get('button').contains('Favorites').click()

        cy.get('.character-card').should('have.length', 1)

    })

    it('should be able to delete characters to favorites', () => {
        cy.get('.add-to-fav-button').first().click()
        cy.get('.add-to-fav-button').last().click()

        cy.get('button').contains('Favorites').click()

        cy.get('.add-to-fav-button').first().contains('Delete their existance').click()

        cy.get('.character-card').should('have.length', 1)

    })


})