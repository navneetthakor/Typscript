/*
abstract class :
    - it's blue print that other classes which are extending it must follow
    - all the abstract method of abstract class must be define in child class
    - we can't create object of abstact class

*/
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
var MyAbstract = /** @class */ (function () {
    function MyAbstract(name) {
        this.name = name;
        this.sample = "sample";
    }
    MyAbstract.prototype.sayHello = function () {
        console.log("Hello");
        console.log(this.sample);
        console.log("\n");
    };
    return MyAbstract;
}());
// gives error : can't create object of abstract class 
// const ma = new MyAbstract("nk")
// child class which extends abstract class 
var DerivedClass = /** @class */ (function (_super) {
    __extends(DerivedClass, _super);
    function DerivedClass(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    // if we not implement this method then it will throw error 
    DerivedClass.prototype.sayMyName = function () {
        console.log(this.name);
    };
    return DerivedClass;
}(MyAbstract));
var dc = new DerivedClass("Navneet");
dc.sayHello();
dc.sayMyName();
