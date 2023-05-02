/// <reference types="cypress" />
export class MainPage {
    visitarMainPage() {
        cy.visit('https://the-internet.herokuapp.com/')
    }
    clicarFormAuthentication () {
        cy.get(':nth-child(21) > a').click()
    }
    clicarShiftingContent () {
        cy.get(':nth-child(39) > a').click()
    }
    clicarMultipleWindows () {
        cy.get(':nth-child(33) > a').click()
    }
    clicarAddRemoveElements () {
        cy.get('ul > :nth-child(2) > a').click()
    }
}