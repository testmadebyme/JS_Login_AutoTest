const LoginPage = require('../pageobjects/login.page');

describe('My Login application', () => {

    it('should have the right page link', () => {
        LoginPage.open();
        expect(browser).toHaveUrlContaining('registerlogin')
    });

    it('should have the right page title', () => {
        expect(browser).toHaveTitle(
            'Login'
        );
    });

    it ('logo shold be visible', () => {
        const img = $('#logomini');
        expect(img).toBeVisible();
    });

    it ('H1 shold be visible & right', () => {
        const h1 = $('h1');
        expect(h1).toBeVisible();
        expect(h1).toHaveTextContaining('QA Portal Login');
    });


    it ('input shold be visible', () => {
        const input = $('input');
        expect(input).toBeVisible()
    });

    it('should click on the input field', () => {    
        const field = $('input');
        expect(field).toBeClickable();
    });

    it('should detect if an input field username is enabled', () => {
        let elem = $('[name="username"]')
        let isEnabled = elem.isEnabled();
        console.log(isEnabled); // outputs: true
    });

    it('should detect if input field are existing', () => {
    
        let elem = $('#input')
        let isExisting = elem.isExisting()
        console.log(isExisting); // outputs: true visibility: blue
    });

    it('should detect if an input field username is enabled', () => {
        let elem = $('[name="password"]')
        let isEnabled = elem.isEnabled();
        console.log(isEnabled); // outputs: true
    });

    it('should detect if input field are existing', () => {
    
        let elem = $('[name="password"]')
        let isExisting = elem.isExisting()
        console.log(isExisting); // outputs: true visibility: blue
    });


    it('should click on the button', () => {
       // LoginPage.open();
        const loginButton = $('[value="Login"]');
        expect(loginButton).toBeClickable();
        //expect(loginButton).toBeExisting();
        
    });

    
});