describe('Pruebas pagina To Do List', () => {
    beforeEach(() => {
      cy.visit('http://todomvc-app-for-testing.surge.sh/')
      cy.get('.new-todo').type('comprar el pan{enter}')
    })
    it('1.Crear tarea', () => {
      cy.get('label').contains('comprar el pan')
    })
    it('2.Marcar tarea como completada', () => {
      cy.get('.toggle').check()
      cy.get('.footer').contains('No items left')
    })
    it('3.Desmarcar tarea completada', () => {
      cy.get('.toggle').check()
      cy.get('.footer').contains('No items left')
      cy.get('.toggle').uncheck()
      cy.get('.footer').contains('1 item left')
    })
    it('4.Editar tarea', () => {
      cy.get('label').dblclick()
      cy.get('editing').type('{selectall}{backspace}')
      cy.get('editing').type('comprar leche{enter}')
      cy.get('.editing').contains('comprar leche')
    })
    it('5.Borrar tarea', () => {
      cy.get('label').trigger('mouseover')
      cy.get('.destroy').invoke('show').click() //fala terminar;luego Nico nos pasará su código
      
    })
    it('6.Filtrar tareas', () => {
      cy.get('.new-todo').type('comprar leche{enter}')
      cy.get('.new-todo').type('comprar azúcar{enter}')
      cy.get('.new-todo').type('comprar huevos{enter}')
      cy.get(':nth-child(2) > .view > .toggle').check() //marcar completada "comprar leche"
      cy.get(':nth-child(3) > .view > .toggle').check() // marcar completada "comprar azúcar"
      cy.get(':nth-child(3) > a').click() //clicar en el filtro "Completed"
      cy.get(':nth-child(1) > .view > label').contains('comprar azúcar') //comprobar que está "comprar azúcar"
      cy.get(':nth-child(2) > .view > label').contains('comprar leche') //comprobar que está "comprar leche"
      cy.get(':nth-child(2) > a').click() //clicar en el filtro "Active"
      cy.get(':nth-child(1) > .view > label').contains('comprar huevos') //comprobar que está "comprar huevos"
      cy.get(':nth-child(2) > .view > label').contains('comprar el pan') //comprobar que está "el pan"
      cy.get(':nth-child(1) > a').click() //clicar en el filtro "All"
      cy.get(':nth-child(1) > .view > label').contains('comprar huevos') //comprobar que está "comprar huevos"
      cy.get(':nth-child(2) > .view > label').contains('comprar azúcar') //comprobar que está "comprar azúcar"
      cy.get(':nth-child(3) > .view > label').contains('comprar leche') //comprobar que está "comprar leche"
      cy.get(':nth-child(4) > .view > label').contains('comprar el pan') //comprobar que está "el pan"
    })
    
  })