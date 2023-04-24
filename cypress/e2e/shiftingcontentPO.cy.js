/// <reference types="cypress" />
import { MainPage } from "../page-objects/main-page"
import { ShiftingContentPage } from "../page-objects/shiftingcontent-page"
import { ShiftingContentMenuElementPage } from "../page-objects/shiftingcontentmenuelement-page"

describe('Pruebas de Shifting Content', () => {
  const mainPage = new MainPage()
  const shiftingContentPage = new ShiftingContentPage()
  const shiftingContentMenuElementPage = new ShiftingContentMenuElementPage()
  beforeEach(() => {
      mainPage.visitarMainPage()
      mainPage.clicarShiftingContent()
      shiftingContentPage.clicarMenuElement()
    })
    it('Comprobr los elementos de la tabla', () => {      
        shiftingContentMenuElementPage.comprobarElement('5')        
    })
  })