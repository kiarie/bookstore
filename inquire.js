var inquire = require("inquirer");
module.exports = {
    chooseBooks: (store) => {
        var books = []
        store.map((elem) => {
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
                    return (isNaN(value) || value.length < 1) ? 'Please enter a Number for Duration' : true;
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
    },
    chooseCategory: () => {
        var question = [{
            name: 'type',
            type: "list",
            message: "Select A Category",
            choices: ["regular", "fiction", "novel"]
        }]
        return inquire.prompt(question).then((answer) => {
            return answer
        })

    }
}