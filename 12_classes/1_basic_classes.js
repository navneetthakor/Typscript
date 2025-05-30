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
