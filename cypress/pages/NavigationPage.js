/********************************************************/
/********************** UI Objects **********************/
/********************************************************/
export default class NavigationPage {
    static getSalesOnLeftNavBar() {
        return cy.contains('Sales')    
    };
     
    static getProductsOnTopNavBar() {
        return cy.contains('Products')    
    };
    
    static getAddProductButton() {
        return cy.contains('Add Product')    
    };

    static getProductNameInput() {
        //return cy.contains('name')
        return cy.get('input[name="name"]')
    };

    static getCategory() {
        return cy.get('#category_id').should('be.visible')
    };

    static getProductPrice() {
        return cy.get('input[name="price"]')
    };

    static getInventoryInput() {
        return cy.get('input[name="sku"]')
    };

    static getSaveProductButton() {
        return cy.get('button[type=submit]').contains('Save Product');
    };

/******************** End Objects **************************/

/********************************************************/
/******************** Interactions **********************/
/********************************************************/
    static clickOnSalesOnLeftNavBar() {
        this.getSalesOnLeftNavBar().click();
    };

    static clickOnProductsOnTopNavBar() {
        this.getProductsOnTopNavBar().click();
    }

    static clickOnAddProductButton() {
        this.getAddProductButton().click();
    }

    static enterPassword(password) {
        this.getPassword().clear().type(password);
    }

    static enterProductNameInput(randomProductName) {
        this.getProductNameInput().clear().type(randomProductName);
    }

    static selectCategory() {
        this.getCategory().select('drinks', {force: true})
    }

    static enterPrice(randomPrice) {
        this.getProductPrice().clear().type(randomPrice);
    }

    static enterInventorySku(randomInventorySku) {
        this.getInventoryInput().clear().type(randomInventorySku);
    }

    static clickOnSaveProductButton(){
        this.getSaveProductButton().click();
    }

/******************** End Interactions **************************/
}