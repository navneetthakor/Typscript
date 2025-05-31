var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, birthyear) {
        this.name = name;
        this.age = new Date().getFullYear();
        this.birthyear = birthyear;
    }
    Object.defineProperty(User.prototype, "getBirthYear", {
        // getter-setter method to access and set private members 
        // use it only if you want other wise it's not compolsury 
        get: function () {
            return this.birthyear;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setBirthYear", {
        set: function (newBirthYear) {
            if (newBirthYear > 2003) {
                throw new Error("Birth year must be lesser then 2003");
            }
            this.birthyear = newBirthYear;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
/*
just for bassic understanding of getter and setter below 3-4 lines are written
*/
var myUser = new User("Navneet", 2003);
// console.log(myUser.birthyear) // gives error
console.log(myUser.getBirthYear);
// myUser.setBirthYear = 2022 // also give error due to condtion that we written in setter
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser(name, birthyear, sui) {
        var _this = _super.call(this, name, birthyear) || this;
        _this.sui = sui;
        // private not accessable here 
        // console.log(this.birthYear)
        // public and protected are accessable here 
        console.log(_this.age);
        console.log(_this.name);
        return _this;
    }
    return SubUser;
}(User));
var subUser = new SubUser("Navneet", 2003, 421);
// only public members are accesseble 
console.log(subUser.name);
console.log(subUser.sui);
// private and protected are not accessable 
// console.log(subUser.age)
// console.log(subUser.birthYear)
