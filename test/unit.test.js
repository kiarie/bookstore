//Unit Tests
var compute = require('../compute');
var books, charges

describe("TEST CASE ONE", () => {
    beforeAll(() => {
        books = [{
            name: "book1",
            type: "regular",
            duration: 1
        }, {
            name: "book4",
            type: "novel",
            duration: 1
        }, {
            name: "book5",
            type: "fiction",
            duration: 3
        }, {
            name: "book6",
            type: "novel",
            duration: 1
        }];
        charges = { regular: 1.5, fiction: 3, novel: 1.5 }
    })
    afterAll(() => {
        books = {}, charges = {}
    })
    test("Story One: customer is Charged Rs 1 per day per book", () => {
        expect(compute.regularBooks(books, charges)).toBe(6)
    })
    test("Story Two: Customer gets charged differently per Category", () => {
        expect(compute.differentBooks(books, charges)).toBe(13.5)
    })
    test("Story Three: Customer gets Charged Minimum charges and offers", () => {
        expect(compute.differentBookOffers(books, charges)).toBe(20)
    })
})
describe("TEST CASE #2", () => {
    beforeAll(() => {
        books = [{
            name: "book1",
            type: "wrong type",
            duration: 4
        }, {
            name: "book5",
            type: "fiction",
            duration: 1
        }, {
            name: "book6",
            type: "novel",
            duration: 2
        }];
        charges = { regular: 1.5, fiction: 3, novel: 1.5 }
    })
    afterAll(() => {
        books = {}, charges = {}
    })
    test("Story One: customer is Charged Rs 1 per day per book", () => {
        expect(compute.regularBooks(books, charges)).toBe(7)
    })
    test("Story Two: Should fail with wrong type of book passed needed for computing price", () => {
        expect(compute.differentBooks(books, charges)).toBeNaN()
    })
    test("Story Three: Should fail with wrong type of book passed needed for compute", () => {
        expect(compute.differentBookOffers(books, charges)).toBeNaN()
    })
})