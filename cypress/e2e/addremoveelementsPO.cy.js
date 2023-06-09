/// <reference types="cypress" />
import { MainPage } from "../page-objects/main-page"
import { AddRemoveElementsPage } from "../page-objects/addremoveelements-page"

describe('Pruebas de Add Remove Elements', () => {
  const mainPage = new MainPage()
  const addRemoveElementsPage = new AddRemoveElementsPage()
  beforeEach(() => {
      mainPage.visitarMainPage()
      mainPage.clicarAddRemoveElements()
    })
    it('Comprobar contenido del botón de añadir', () => {
      addRemoveElementsPage.comprobarContenidoBotonAddElement("Add Element")
    })
    it('Comprobar contenido del botón de borrar', () => {
      addRemoveElementsPage.clicarAddElement()
      addRemoveElementsPage.comprobarContenidoBotonDelete("Delete")
    })
    it('Añadir 1 elemento', () => {
      addRemoveElementsPage.clicarAddElement()
      addRemoveElementsPage.comprobarBotonDeleteExiste()
    })
    it('Añadir 3 elementos', () => {
      addRemoveElementsPage.clicarAddElement3Veces()      
      addRemoveElementsPage.comprobarBotonDeleteExiste()
      addRemoveElementsPage.comprobarBotonDelete2Existe()
      addRemoveElementsPage.comprobarBotonDelete3Existe()
      })
    it('Borrar elemento', () => {
      addRemoveElementsPage.clicarAddElement()
      addRemoveElementsPage.clicarDelete()
      addRemoveElementsPage.comprobarBotonDeleteNoExiste()

    })
  })