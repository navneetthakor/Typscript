// enum is used for giving limited and fixed number of choices or values 
var Data;
(function (Data) {
    Data[Data["num1"] = 0] = "num1";
    Data[Data["num2"] = 1] = "num2";
    Data[Data["num3"] = 2] = "num3";
})(Data || (Data = {}));
// -> number, string, bigint and computed expressions like "5 + 9" are only applicable to enum
// -> here if we used const before enum then it will generate less code in js 
// -> with const - it will simply put corresponding values where needed 
// -> else it will write IIFE 
// ---- (see in correspoind js file)----
// how to use it (--difference in JS file ---)
var myName = Data.num2;
var myName2 = "nk" /* Data2.num2 */;
