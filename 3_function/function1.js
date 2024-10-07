"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// first example 
function myMult(num) {
    return (5 * num);
}
console.log("result-1 : ", myMult(5));
// second example 
var myData = function (name, email, isWorking) {
    if (isWorking === void 0) { isWorking = false; }
    console.log("\nresult-2 :");
    console.log(name);
    console.log(email);
    console.log(isWorking);
};
myData("mayur", "mk@gmail.com");
// third example (Map functions)
var myArr = ["Navneet", "Meet", "Rohanshu"];
// here data type of 'data' is correctly infered automatically 
var result3 = myArr.map(function (data) {
    return "Hello Mr. ".concat(data);
});
console.log("\nresult-3: ", result3);
