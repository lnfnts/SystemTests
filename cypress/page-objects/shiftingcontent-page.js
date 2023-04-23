/// <reference types="cypress" />
export class ShiftingContentPage {
    clicarMenuElement() { 
        cy.get('[href="/shifting_content/menu"]')
    }
    clicarAnImage() { 
        cy.get('[href="/shifting_content/image"]')
    }
    clicarList() { 
        cy.get('[href="/shifting_content/list"]')
    }
}