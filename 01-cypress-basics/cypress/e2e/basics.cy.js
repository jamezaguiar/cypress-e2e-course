/// <reference types="Cypress" />

describe('tasks page', () => {
  it('should render the main image', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.main-header img');
  });

  it('should display the page title', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.main-header h1').should('have.length', 1);
    cy.get('.main-header h1').contains(/my cypress course tasks/i);
  });
});
