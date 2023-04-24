/// <reference types="cypress" />
export class ShiftingContentMenuElementPage {
    comprobarElement(number){  
        cy.get('#content .example ul li').should('have.length', number)
    }    
}