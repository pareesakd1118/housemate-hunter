describe('FirstPage Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/'); 
    });

    
  
    it('selects a city and checks that the FilterBar dropdowns are present', () => {
      cy.get('select[name="selectCity"]').select('San Francisco');
        cy.url().should('include', '/roommates/San%20Francisco');

      cy.get('.roommate-container').should('exist');

      cy.get('#gender-field').should('be.visible');
      cy.get('select[name="gender-field"]').should('exist');
      cy.get('select').contains('option', 'Pets').parent().should('exist');
      cy.get('select').contains('option', 'Smoker').parent().should('exist');
      cy.get('input[type="number"]').should('exist');
      cy.get('select').contains('option', 'Budget').parent().should('exist');
  
      cy.contains('button', 'Apply Filters').should('exist');
      cy.contains('button', 'Reset Filters').should('exist');
    });
  });