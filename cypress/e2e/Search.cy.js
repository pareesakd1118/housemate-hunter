describe('Go back to search page', () => {
    it('should allow user to go back to search page', () => {
        cy.visit('http://localhost:3002/roommates/details/1')
        cy.get('button').click()
        .url().should('eq', 'http://localhost:3002/roommates/San%20Francisco')
     })
})