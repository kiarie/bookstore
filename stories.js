var chalk = require('chalk'),
    Store = require("./books"),
    compute = require("./compute"),
    inquires = require("./inquire"),
    charges = Store.charges,
    booksBought = [];
module.exports = {
    firststory: function firststory() {
        inquires.chooseBooks(Store).then((books) => {
            var filtered = booksBought.filter((elemn) => elemn.name == books.name)
            if (filtered.length < 1) {
                booksBought.push(books)
            }
            inquires.chooseAnother().then((answer) => {
                if (answer) { firststory() }
                else {
                    var total = compute.regularBooks(booksBought, charges)
                    return console.log(chalk.yellow.bold("Total Cost of Books chosen:", total))
                }
            })
        })
    }
}