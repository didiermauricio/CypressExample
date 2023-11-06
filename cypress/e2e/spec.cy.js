describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200')
  })
})

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200')
    cy.get('h1').contains("Signup form")
  })
})