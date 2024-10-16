// enum is used for giving limited and fixed number of choices or values 
enum Data {
    num1,
    num2,
    num3,
}
    // -> by default they have numeric value starting from 0 
    // -> we can modify it 
            // -> when we assign integer value to anyone, then remaining will get value incremental model 
            // -> if it encounter string value anywhere then remaining value needs to assign until anyone get integer value 

const enum Data2 {
    num1,
    num2 = "nk",
    num3 = "true",
    num4 = 5,
    num5,
    num6
}

    // -> number, string, bigint and computed expressions like "5 + 9" are only applicable to enum
    // -> here if we used const before enum then it will generate less code in js 
            // -> with const - it will simply put corresponding values where needed 
            // -> else it will write IIFE 
            // ---- (see in correspoind js file)----

// how to use it (--difference in JS file ---)
const myName = Data.num2;
const myName2 = Data2.num2

export {};

