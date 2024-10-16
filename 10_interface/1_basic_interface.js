"use strict";
// it's lose form of class 
Object.defineProperty(exports, "__esModule", { value: true });
var nk = {
    _id: 1,
    name: "navneet",
    email: 'n@n.com',
    // getHello: () => {    // no error
    //     return "Hello";
    // }
    // getHello: (nk: number) => {  //error due to value type mismatch
    //     return "Hello";
    // }
    // getHello: (name: string, mk: number) => { //though it have extra values, not giving error
    //     return "Hello";
    // }
    getHello: function (nk) {
        return "Hello";
    }
};
