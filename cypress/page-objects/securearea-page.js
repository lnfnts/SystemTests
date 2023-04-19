/// <reference types="cypress" />
export class SecureAreaPage {
    comprobarMensaje(text) {
        cy.get('#flash').contains(text)
    } 
}