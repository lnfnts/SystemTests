/// <reference types="cypress" />
export class MainPage {
    visitarMainPage() {
        cy.visit('https://the-internet.herokuapp.com/')
    }
    clicarFormAuthentication () {
        cy.get(':nth-child(21) > a').click()

    }
}