import allTricks from '../fixtures/allTricks'

describe('user flow', () => {

  beforeEach(() => {
    cy.intercept({method:'GET', url: 'http://localhost:3001/api/v1/tricks'}, allTricks )
    cy.visit('http://localhost:3000')
  })

  it('user should view page title page load', () => {
    cy.get('h1')
      .should('exist')
      .should('be.visible')
      .contains('Sick Trick')
  })

  it('user view input fields to enter their own trick', () => {
    cy.get('form')
      .should('exist')
      .should('be.visible')
  })

  it('user should view all tricks on page load', () => {
    cy.get('div')
      .should('exist')

  })

})