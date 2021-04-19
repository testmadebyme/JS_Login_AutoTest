const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const ErrorMess = require('../pageobjects/error.mess');

// Get the credentials from the JSON file
let { username, password } = require("../helpers/right-login-data.json");
// let { username, password } = require("../helpers/error-login-data.json");
let { long_username, long_password } = require("../helpers/long-login-data.json");
let { special_username, special_password } = require("../helpers/special-login-data.json");

describe('My Login application', () => {


    // it('should login with valid credentials', () => {
    //     LoginPage.open();

    //     LoginPage.login('tomsmith', 'SuperSecretPassword!');
    //     expect(SecurePage.SuccMessage).toBeExisting();
    //     expect(SecurePage.SuccMessage).toHaveTextContaining(
    //         'You logged into a secure area!');
    // });

    // it('should login with only username', () => {
    //     LoginPage.open();

    //     LoginPage.login('tomsmith', '');
    //     //expect(ErrorMess.helpMessage).toBeExisting();
    //     expect(ErrorMess.helpMessage).toHaveTextContaining(
    //         '','Please enter your password');
    // });

    it('should login with only pass', () => {
        LoginPage.open();

        LoginPage.login('', 'password');
        expect(ErrorMess.helpMessage).toHaveTextContaining(
            'Please enter username');
    });

    // it('should login with empty data', () => {
    //     LoginPage.open();

    //     LoginPage.login('', '');
    //     expect(ErrorMess.helpMessage).toHaveTextContaining(
    //         'Please enter username', 'Please enter your password');

    // });

    // it('should login with invalid credentials', () => {
    //     LoginPage.open();

    //     LoginPage.login('qwerty', '123');
    //     expect(ErrorMess.helpMessage).toHaveTextContaining(
    //         'No account found with that username.');
    // });

    //     it('should login with invalid password only', () => {
    //     LoginPage.open();

    //     LoginPage.login(password, username);
    //     expect(ErrorMess.helpMessage).toHaveTextContaining(
    //         'Please enter your password');
    // });

    it('should login with invalid credentials', () => {
        LoginPage.open();

        LoginPage.login(password, username);
        expect(ErrorMess.helpMessage).toHaveTextContaining(
            'No account found with that username.');
    });

    it('should login with long data credentials', () => {
        LoginPage.open();

        LoginPage.login(long_password, long_username);
        expect(ErrorMess.helpMessage).toHaveTextContaining(
            'No account found with that username.');
    });

    it('should login with specials credentials', () => {
        LoginPage.open();

        LoginPage.login(special_password, special_username);
        expect(ErrorMess.helpMessage).toHaveTextContaining(
            'No account found with that username.');
    });

    // it('should find Relative Xpath for ClickToGetAlert Button and Then click on it',() => {
    //     browser.url('http://omayo.blogspot.com')
    //     $('#selenium143').click()
    //     browser.pause(3000); 
    //     });

});



