describe('FilterBar Component', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/path-to-filterbar');
  });

  it('allows the user to apply filters and reset them', () => {
      cy.get('#gender-field').select('Male');
      cy.get('select').eq(1).select('Yes');
      cy.get('select').eq(2).select('No'); 
      cy.get('input[type="number"]').type('30');
      cy.get('select').eq(3).select('$1000-$1999'); 
      cy.contains('button', 'Apply Filters').click();
      cy.contains('button', 'Reset Filters').click();
  });
});