describe('RoommateDetails Component', () => {
  it('displays the name and image of the roommate after navigation', () => {
    cy.intercept('GET', '/api/v1/roommates/1', { fixture: 'roommate.json' }).as('getRoommateDetails');
    cy.intercept('GET', '/api/v1/roommates', { fixture: 'roommates.json' }).as('getAllRoommates');
    cy.visit('http://localhost:3000/roommates/details/1');
    cy.wait('@getRoommateDetails');
    cy.get('.roommate-details h2').should('contain', 'Isabella Daniels');
    cy.get('.roommate-details .profile-image img')
      .should('be.visible')
      .and('have.attr', 'src', 'https://images.unsplash.com/photo-1517462964-21fdcec3f25b?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA');
      cy.contains('search').should('be.visible').click();
      cy.url().should('include', '/roommates/San%20Francisco');
  });

  it('shows error message to user when page is not found', () => {
    cy.intercept('GET', '/api/v1/roommates/3333', {
      statusCode: 404, 
      fixture: 'roommate.json'
    })
    cy.visit('http://localhost:3000/roommates/details/3333');
    cy.get('h1').contains('404')
 })
});