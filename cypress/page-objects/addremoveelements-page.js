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
    comprobarBotonDeleteExiste(text) {
        cy.get('.added-manually').should('exist')
    } 
    comprobarBotonDelete2Existe(text) {
        cy.get('#elements > :nth-child(2)').should('exist')
    } 
    comprobarBotonDelete3Existe(text) {
        cy.get('#elements > :nth-child(3)').should('exist')
    }  
    comprobarBotonDeleteNoExiste() {
        cy.get('#elements > :nth-child(1)').should('not.exist')
    }  
} 