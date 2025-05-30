/*
getter - setter function are very important to access private properties
*/
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "getMyAge", {
        // getter-setter method for private mebmer `age`
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setMyAge", {
        // setter doesn't have return type at all 
        set: function (newAge) {
            if (newAge <= 0)
                throw new Error("age must be postive integer");
            this.age = newAge;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
