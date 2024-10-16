"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// passing object to function 
function func1(obj) {
    console.log(obj.username);
}
// returning object from function 
function func2() {
    return { username: "navneet", email: "n@n.com", ispaid: true };
}
// passing function with extra params (bad behaviour)
// func1({username:"navneet", email:"n@n.com", ispaid:true, isActive: true}); // gives error 
var temp = { username: "navneet", email: "n@n.com", ispaid: true, isActive: true };
func1(temp); // no error but we have same params as above
