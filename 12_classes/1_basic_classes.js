/*
Classes syntax is much similar to javascript but the only difference is that all the variables
that we want to create in that class, those must be declare in class before constructor
*/
var User = /** @class */ (function () {
    function User(name, age, greetMessage) {
        this.name = name;
        this.age = age;
        this.greet = greetMessage;
    }
    // staic variables or class variables
    User.numberOfUsers = 0;
    return User;
}());
/*
in produciton level we write this class by following structure in below class
both are valid structure and will produce correct js code
*/
var Car = /** @class */ (function () {
    function Car(brand, name) {
        this.brand = brand;
        this.name = name;
    }
    return Car;
}());
var car = new Car("Nexa", "Baleno");
// car.name = "hello" # error because readonly
// export {}
