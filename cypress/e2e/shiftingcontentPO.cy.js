/// <reference types="cypress" />
import { MainPage } from "../page-objects/main-page"
import { ShiftingContentPage, ShiftingContentPage } from "../page-objects/shiftingcontent-page"
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
    it('Comprobar Home en la tabla', () => {
      shiftingContentMenuElementPage.comprobarHome()
    })
    it('Comprobar About en la tabla', () => {
        shiftingContentMenuElementPage.comprobarAbout()
      })
    it('Comprobar Contact Us en la tabla', () => {
        shiftingContentMenuElementPage.comprobarContactUs()
      })
    it('Comprobar Portfolio en la tabla', () => {
        shiftingContentMenuElementPage.comprobarPortfolio()
      }) 
    it('Comprobar Gallery en la tabla', () => {
        shiftingContentMenuElementPage.comprobarGallery()
      })
  })