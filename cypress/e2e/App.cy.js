describe('Application Flow Test', () => {
  it('allows a user to navigate from selecting a city to viewing roommate details', () => {
    cy.visit('http://localhost:3002/');
    cy.get('select[name="selectCity"]').select('San Francisco');
    cy.url().should('include', '/roommates/San%20Francisco');
  });
});