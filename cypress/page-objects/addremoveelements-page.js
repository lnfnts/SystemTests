/// <reference types="cypress" />
export class AddRemoveElementsPage {    
    clicarAddElement() { 
        cy.get('button').click()
    }
    clicarAddElement3Veces() { 
        cy.get('button').click().click().click()
    }    
    clicarDelete() { 
        cy.get('#elements > :nth-child(1)').click()
    }  
    comprobarContenidoBotonAddElement(text) {
        cy.get('button').contains(text)
    } 
    comprobarContenidoBotonDelete(text) {
        cy.get('.added-manually').contains(text)
    } 
    comprobarContenidoBotonDelete2(text) {
        cy.get('#elements > :nth-child(2)').contains(text)
    } 
    comprobarContenidoBotonDelete3(text) {
        cy.get('#elements > :nth-child(3)').contains(text)
    }  
    comprobarBotonDeleteNoExiste() {
        cy.get('#elements > :nth-child(1)').should('not.exist')
    }  
} 