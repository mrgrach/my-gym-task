/********************************************************/
/********************** UI Objects **********************/
/********************************************************/
export default class SigninPage {
    static visitUrl() {
        cy.visit(`https://gymdesk.com/login`)
        return '/login';
    };

    static getEmail() {
        return cy.get('input[name="email"]')
    };
      
    static getPassword() {
        return cy.get('input[name="password"]')
    };
      
    static getSignin() {
        return cy.get('button[type=submit]').contains('Sign-in');
    }

/******************** End Objects **************************/

/********************************************************/
/******************** Interactions **********************/
/********************************************************/
    static enterEmail(email) {
        this.getEmail().clear().type(email);
    }

    static enterPassword(password) {
        this.getPassword().clear().type(password);
    }

    static clickSignin() {
        this.getSignin().click();
    }

    static login(email, password) {
        this.visitUrl();
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickSignin();
    }
}
/******************** End Interactions **************************/

