/// <reference types="cypress" />
export class MultipleWindowsNewPage {
    comprobarMensaje(text) {
        cy.get('h3').contains(text)
    } 
}