/// <reference types="cypress" />
export class ShiftingContentPage {
    clicarMenuElement() { 
        cy.get('[href="/shifting_content/menu"]').click()
    }
    clicarAnImage() { 
        cy.get('[href="/shifting_content/image"]').click()
    }
    clicarList() { 
        cy.get('[href="/shifting_content/list"]').click()
    }
}