const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ErrorMess extends Page {
    /**
     * define selectors using getter methods
     */
    get helpMessage () { return $('.help-block') }
}

module.exports = new ErrorMess();