describe('Application Flow Test', () => {
  it('allows a user to navigate from selecting a city to viewing roommate details', () => {
    cy.intercept('GET', '/api/v1/roommates', { fixture: 'roommates.json' }).as('getAllRoommates')
    cy.visit('http://localhost:3002/');
    cy.get('h1').contains('Housemate Hunter');
    cy.get('h2').contains('Housemate Hunter is now live in...')
    cy.get('select[name="selectCity"]').select('San Francisco');
    cy.url().should('include', '/roommates/San%20Francisco');
  });
});