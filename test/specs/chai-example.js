

// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');
// const ErrorMess = require('../pageobjects/error.mess');

// // Get the credentials from the JSON file
// let { username, password } = require("../helpers/right-login-data.json");
// // let { username, password } = require("../helpers/error-login-data.json");
// let { long_username, long_password } = require("../helpers/long-login-data.json");
// let { special_username, special_password } = require("../helpers/special-login-data.json");

// describe('My Login application with chai example', () => {

//     it('should login with only pass', () => {
        
//         LoginPage.open();
//         expect(browser).toHaveUrlContaining('registerlogin')

//     });







// });

import { expect as chaiExpect} from 'chai';

const LoginPage = require('../pageobjects/login.page');

describe('My Login application', () => { 
    
    it('title should not be empty', () => {
        chaiExpect(browser).to.not.be.empty;
    });
});