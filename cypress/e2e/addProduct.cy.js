import SigninPage from "../pages/SigninPage.js";
import NavigationPage from "../pages/NavigationPage.js";

// const faker = require('faker');
const { faker } = require('@faker-js/faker');
const randomProductName = faker.commerce.product() + 'drink';
const randomPrice = faker.finance.amount({ min: 4, max: 15 });
const randomInventorySku = faker.number.int({ min: 10, max: 10000 },


context('As a gym owner user', () => {
    before(() => {
      cy.clearLocalStorage()
      cy.clearCookies()
    });
    
    describe('Able to add a product with online shop disabled', () => {
    it('Sign in', () => {
        cy.fixture('users.json').then((users) => {
            const user = users[0]
            SigninPage.login(users.email, users.password)
        });
        cy.url().should('eq', 'https://gymdesk.com/manager/dashboard')
    });

    it('Navigate to Sales', () => {
        NavigationPage.clickOnSalesOnLeftNavBar()
        cy.url().should('eq', 'https://gymdesk.com/manager/sales/create')
    });

    it('Navigate to Add Product', () => {
        NavigationPage.clickOnProductsOnTopNavBar()
        cy.url().should('eq', 'https://gymdesk.com/manager/products/list')
    });

    it('Initiate Adding a Product', () => {
        NavigationPage.clickOnAddProductButton()
        cy.url().should('eq', 'https://gymdesk.com/manager/products/add')
    })

    it('It fills out a form and save a product', () => {
        NavigationPage.enterProductNameInput(randomProductName)
        NavigationPage.selectCategory()
        NavigationPage.enterPrice(randomPrice)
        NavigationPage.enterInventorySku(randomInventorySku)
        NavigationPage.clickOnSaveProductButton()
        cy.url().should('eq', 'https://gymdesk.com/manager/products/list')
        cy.contains(randomProductName)
    })
}); 
}));
