describe('Pruebas de Login', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
  })
  it('Usuario valido puede hacer login', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains('You logged into a secure area')
  })
  it('Introducir usuario incorrecto', () => {
    cy.get('#username').type('SuperSecretPassword!')
    cy.get('#password').type('pepe')
    cy.get('.fa').click()
    cy.get('#flash').contains('Your username is invalid!')
  })
  it('Hacer login dejando campo de usuario vacio', () => {
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
    cy.get('#flash').contains('Your username is invalid!')
  })
})