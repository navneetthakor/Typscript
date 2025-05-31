/*

Generics:
    - Generics = Write once, use with any type.
    - it's type are defined when using it
*/
// generic function 
function sayDataType(val) {
    return val;
}
// T -> string 
var myName;
myName = sayDataType("Navneet");
// T -> number 
var myNumber;
myNumber = sayDataType(5);
// similarlly for all other data type even if it's custom type 
/*
generics with class
*/
var MyGenericClass = /** @class */ (function () {
    function MyGenericClass(val) {
        this.val = val;
    }
    return MyGenericClass;
}());
var mgc = new MyGenericClass("navneet");
console.log(typeof (mgc.val));
/*
ristricting generics
    - we can restrict generics by using syntax that discussed below where
    we are talling that type must be extend something that we are telling other type of types are not allowed
*/
function Hello(val) {
    console.log(val);
}
Hello(4.5);
// Hello("Navneet") // error is as string not extends number
