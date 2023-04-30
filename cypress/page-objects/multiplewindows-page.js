/// <reference types="cypress" />
export class MultipleWindowsPage {
    clicarClickHere() { 
        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.url()
            .should('include', '/windows/new')
    }
}