describe('tasks management', () => {
  it('should open and close the new task modal', () => {
    cy.visit('http://localhost:5173/');

    cy.get('dialog.modal').should('not.exist');
    cy.get('button')
      .contains(/add task/i)
      .click();
    cy.get('dialog.modal').should('exist');

    cy.get('.backdrop').click({ force: true });
    cy.get('.backdrop').should('not.exist');
    cy.get('dialog.modal').should('not.exist');

    cy.get('button')
      .contains(/add task/i)
      .click();
    cy.get('dialog.modal').should('exist');

    cy.get('button')
      .contains(/cancel/i)
      .click();
    cy.get('dialog.modal').should('not.exist');
  });
});
