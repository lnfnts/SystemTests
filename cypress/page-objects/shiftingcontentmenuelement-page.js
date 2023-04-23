/// <reference types="cypress" />
export class ShiftingContentMenuElementPage {
    comprobarHome() { 
        cy.get(':nth-child(1) > a').contains('Home')
    }
    comprobarAbout() { 
        cy.get(':nth-child(7) > :nth-child(2) > a').contains('About')
    }
    comprobarContactUs() { 
        cy.get(':nth-child(7) > :nth-child(3) > a').contains('Contact Us')
    }
    comprobarPortfolio() { 
        cy.get(':nth-child(7) > :nth-child(4) > a').contains('Portfolio')
    }
    comprobarGallery() { 
        cy.get('.shift').contains('Gallery')
    }    
}