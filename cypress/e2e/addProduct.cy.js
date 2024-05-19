import SigninPage from "../pages/SigninPage.js";

context('As a gym owner user', () => {
    before(() => {
      cy.clearLocalStorage()
      cy.clearCookies()
    });
    
    describe('After succesfull login', () => {
      it('Able to add a product', () => {
        cy.fixture('users.json').then((users) => {
          const user = users[0]
          SigninPage.login(users.email, users.password)
          cy.url().should('eq', 'https://gymdesk.com/manager/dashboard')
          cy.wait(3000)
        });
    })
})});

