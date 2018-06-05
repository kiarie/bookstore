var chalk = require('chalk'),
    Store = require("./books"),
    compute = require("./compute"),
    inquires = require("./inquire"),
    charges = Store.charges,
    booksBought = [];
module.exports = {
    firststory: function firststory() {
        inquires.chooseBooks(Store.books).then((book) => {
            if (checkIsInCart(book, booksBought)) {//if the book already exists in cart do not add it again
                booksBought.push(book)
            }
            inquires.chooseAnother().then((answer) => {
                if (answer) { firststory() } //if answer is yes i.e true repeat selection new of book to rent
                else {
                    var total = compute.regularBooks(booksBought, charges)
                    return console.log(chalk.yellow.bold("Total Cost of Books chosen:", total))
                }
            })
        })
    },
    secondStory: function secondStory() {
        inquires.chooseCategory().then((category) => {
            var store = Store.books.filter((elemn) => elemn.type == category.type)
            inquires.chooseBooks(store).then((book) => {
                if (checkIsInCart(book, booksBought)) {//if the book already exists in cart do not add it again
                    booksBought.push(Object.assign(book, { type: category.type }));//make sure the type is passed for computation
                    //so that it pushes something like { name: 'book-fiction', duration: '2', type: 'fiction' }
                }
                inquires.chooseAnother().then((answer) => {
                    if (answer) { secondStory() } //if answer is yes i.e true repeat selection new of book to rent
                    else {
                        var total = compute.differentBooks(booksBought, charges)
                        return console.log(chalk.yellow.bold("Total Cost of Books chosen:", total))
                    }
                })
            })

        })

    }
}
function checkIsInCart(book, booksBought) {
    var filtered = booksBought.filter((elemn) => elemn.name == book.name)
    return (filtered.length < 1)
}