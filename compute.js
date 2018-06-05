module.exports = {
    regularBooks: (books, charges) => {
        return books.reduce((acc, curentElem) => {
            return acc + curentElem.duration * 1
        }, 0)

    },
    differentBooks: (books, charges) => {
        return books.reduce((acc, curentElem) => {
            return acc + curentElem.duration * charges[curentElem.type]
        }, 0)

    },
    differentBookOffers: (books, charges) => {
        return books.reduce((acc, curentElem) => {
            var charge;
            switch (curentElem.type) {
                case "regular":
                    if (curentElem.duration > 2) {
                        var daysAfter = curentElem.duration - 2
                        charge = 2 + daysAfter * charges.regular;
                    } else { //charge minimum if equal less than 2 days
                        charge = 2
                    }
                    break;
                case "novel":
                    charge = (curentElem.duration < 3) ? 4.5 : charges.novel * curentElem.duration
                    break;
                default:
                    charge = curentElem.duration * charges[curentElem.type]
                    break;
            }
            return acc + charge;
        }, 0)

    }
}