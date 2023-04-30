/// <reference types="cypress" />
import { MainPage } from "../page-objects/main-page";
import { MultipleWindowsPage } from "../page-objects/multiplewindows-page";
import { MultipleWindowsNewPage } from "../page-objects/multiplewindowsnew-page";

describe('Pruebas de Multiple Windows', () => {
    const mainPage = new MainPage()
    const multipleWindowsPage = new MultipleWindowsPage()
    const multipleWindowsNewPage = new MultipleWindowsNewPage()
    beforeEach(() => {
        mainPage.visitarMainPage()
        mainPage.clicarMultipleWindows()
        multipleWindowsPage.clicarClickHere()
      })
      it('Comprobr contenido', () => {      
        multipleWindowsNewPage.comprobarMensaje('New Window')        
      })
    })