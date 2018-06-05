var inquire = require("inquirer");
module.exports = {
    chooseBooks: (store) => {
        var books = []
        store.books.map((elem) => {
            books.push(elem.name)
        })
        var question = [
            {
                type: 'list',
                name: 'name',
                message: 'Select book you wish to Rent:',
                choices: books
            },
            {
                name: 'duration',
                type: 'input',
                message: 'Days of Renting the Book:',
                validate: function (value) {
                    return (isNaN(value)) ? 'Please enter a Number for Duration' : true;
                }
            }
        ]
        return inquire.prompt(question).then((answer) => {
            return answer
        })

    },
    chooseAnother: () => {
        var question = [
            {
                type: 'list',
                name: 'another',
                message: 'Choose another Book to Rent?',
                choices: ['yes', 'no']
            }
        ]
        return inquire.prompt(question).then((answer) => {
            return (answer.another == 'yes') ? true : false
        })

    }
}