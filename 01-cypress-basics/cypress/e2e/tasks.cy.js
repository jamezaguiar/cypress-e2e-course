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

  it('should create a new task', () => {
    cy.visit('http://localhost:5173/');

    cy.get('button')
      .contains(/add task/i)
      .click();

    cy.get('input#title').type('New Task');
    cy.get('textarea#summary').type('New Task Summary');
    cy.get('select#category').select(3);

    cy.get('.modal button')
      .contains(/add task/i)
      .click();
    cy.get('dialog.modal').should('not.exist');

    cy.get('ul.task-list li').should('have.length', 1);

    cy.get('.task h2').contains('New Task');
    cy.get('.task p').contains('New Task Summary');
  });
});
