describe('Simple test workshop Cypress io...', function () {
    before(function () {
        cy.visit('/')
    })

    describe('Validates that the title of the actual page is "Kitchen Sink"...', function () {
      it('Should passed', function () {
          
        /* Can be both options */ 
        
        // title() => get the title of the currenty page
        cy.validateTitlePage('Kitchen Sink')

      })
    })

    describe('Validates the navegation of the href "Actions" web element...', function () {
      it('Should failed', function () {

        // get() => select a specific element by CSS Selector
        // click() => make the action of click a buttom
        cy.get('.home-list li a[href="/commands/actions"]').eq(0)
          .click()
        
        cy.validateTitlePage('Actions')

      })
    })

    describe('Navegation of the href "Actions" web element...', function () {
      it.skip('Navigates to Actions page', function () {
        
        cy.get('.home-list li a[href="/commands/actions"]').eq(0)
          .click()

          cy.validateTitlePage('Actions')

      })

      it('Checks the value entered in the input...', function () {

        cy.get('.action-email')
          .type('cypressWorkshop@email.com')
          .should('have.value', 'cypressWorkshop@email.com')

        cy.get('.action-disabled')
          .should('be.disabled')

      })

      it('Interacts with a pop up message...', function() {
        
        // contains() => get a specific element by REGEX, if there are more than one match, returns the first one
        cy.contains('Click to toggle popover')
          .click()
        
        cy.contains('Popover')
          .should('have.text', 'Popover')
      
      })

      it('Interacts with canvas...', function () {
        
        cy.get('#action-canvas')
          .click('top')
          .click('left')
          .click('right')
          .click('bottom')
          .click('center')
      
      })

      it('Approves that check-boxes are cheked...', function () {

        // check() => mark a checkbox input
        // uncheck() => unmark a checkbox input
        cy.get('.action-checkboxes .checkbox [value="checkbox3"]')
          .check()
          .should('be.checked')
          .uncheck()
          .should('not.be.checked')

      })

      it('Checks the page title...', function () {
        cy.get('.dropdown-toggle')
          .click()  

        cy.get('.dropdown-menu')
          .children('.active')
          .should('contain', 'Actions')
          .parent()
          .contains('Connectors')
          .click()
          .validateTitlePage('Connectors') 
      })
    })
  })

