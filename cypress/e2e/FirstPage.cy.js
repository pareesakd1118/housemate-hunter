describe('FirstPage Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/v1/roommates', { fixture: 'roommates.json' }).as('getAllRoommates');
    cy.visit('http://localhost:3002/roommates/San%20Francisco'); 
  });

  it('shows city roommates and that FilterBar dropdowns are present', () => {
    cy.get('#gender-field').should('be.visible');
    cy.get('select[name="gender-field"]').should('exist');
    cy.get('select').contains('option', 'Pets').parent().should('exist');
    cy.get('select').contains('option', 'Smoker').parent().should('exist');
    cy.get('input[type="number"]').should('exist');
    cy.get('select').contains('option', 'Budget').parent().should('exist');
    cy.contains('button', 'Apply Filters').should('exist');
    cy.contains('button', 'Reset Filters').should('exist');
    cy.get('.roommate-container').should('exist');
    cy.get('.roommate-container').first().contains('Isabella');
    cy.get('.roommate-container').last().contains('Halle');
    cy.get('select[name="pet-field"]').select('No').should('have.value', 'no');
    cy.get('button').contains('Apply Filters').click();
    cy.get('.roommate-container').first().contains('Jenny');
    cy.get('.roommate-container').should('have.length', 1);
  });

  it('shows error message to user when page is not found', () => {
    cy.intercept('GET', '/api/v1/roommates', {
      statusCode: 404, 
      fixture: 'roommates.json'
    })
    cy.visit('http://localhost:3002/roommates/sdfasdfa');
    cy.get('h1').contains('404')
 })

 it('shows single roommate when click on image', () => {[
    cy.intercept('GET', '/api/v1/roommates/1', { fixture: 'roommate.json' }).as('getRoommateDetails'),
    cy.get('.grid-image').first().click()
    .url().should('eq', 'http://localhost:3002/roommates/details/1')
  ]})
});