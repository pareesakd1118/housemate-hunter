describe('RoommateDetails Component', () => {
    it('displays the name and image of the roommate', () => {
      cy.visit('http://localhost:3000/roommates/details/1');
  
      
    //  cy.get('.roommate-details', { timeout: 10000 }).should('be.visible');
      cy.get('.roommate-details h2').should('contain', 'Isabella Daniels');
      
      cy.get('.roommate-details .profile-image img')
        .should('be.visible')
        .and('have.attr', 'src')
        .and('include', 'expected_image_path');
    });
  });
  