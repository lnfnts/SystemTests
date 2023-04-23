/// <reference types="cypress" />
export class ShiftingContentMenuElementPage {
    comprobarHome() { 
        cy.get(':nth-child(1) > a').contains('Home')
    }
}