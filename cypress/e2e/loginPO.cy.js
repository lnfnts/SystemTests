/// <reference types="cypress" />
import { MainPage } from "../page-objects/main-page"
import { LoginPage } from "../page-objects/login-page"
import { SecureAreaPage } from "../page-objects/securearea-page"

describe('Pruebas de Login', () => {
  const mainPage = new MainPage()
  const loginPage = new LoginPage()
  const secureAreaPage = new SecureAreaPage()
  beforeEach(() => {
      mainPage.visitarMainPage()
      mainPage.clicarFormAuthentication()
    })
    it('Usuario valido puede hacer login', () => {
      loginPage.introducirUsuario("tomsmith")
      loginPage.introducirContrasena("SuperSecretPassword!")
      loginPage.clicarBotonLogin()
      secureAreaPage.comprobarMensaje("You logged into a secure area!")
    })
    it('Introducir usuario incorrecto', () => {
      loginPage.introducirUsuario("pepe")
      loginPage.introducirContrasena("SuperSecretPassword!")
      loginPage.clicarBotonLogin()
      secureAreaPage.comprobarMensaje("Your username is invalid!")
    })
    it('Introducir contrasena incorrecta', () => {
      loginPage.introducirUsuario("tomsmith")
      loginPage.introducirContrasena("pepe")
      loginPage.clicarBotonLogin()
      secureAreaPage.comprobarMensaje("Your password is invalid!")
    })
    it('Hacer login dejando campo de usuario vacio', () => {
      loginPage.introducirContrasena("SuperSecretPassword!")
      loginPage.clicarBotonLogin()
      secureAreaPage.comprobarMensaje("Your username is invalid!") 
    })
  })