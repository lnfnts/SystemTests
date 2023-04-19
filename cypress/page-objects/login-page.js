/// <reference types="cypress" />
export class LoginPage {
    introducirUsuario(text) { 
        cy.get('#username').type(text)
    } 
    introducirContrasena(text) { 
        cy.get('#password').type(text)
    } 
    clicarBotonLogin() { 
        cy.get('.fa').click()
    }
}