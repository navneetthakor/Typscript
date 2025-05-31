/*

Generics:
    - Generics = Write once, use with any type.
    - it's type are defined when using it
*/

// generic function 
function sayDataType<T>(val: T): T{
    return val
}

// T -> string 
let myName : string;
myName = sayDataType("Navneet")

// T -> number 
let myNumber : number;
myNumber = sayDataType(5)

// similarlly for all other data type even if it's custom type 

/*
generics with class
*/

class MyGenericClass<T>{
    public val : T

    constructor(val : T){
        this.val = val;
    }
}

const mgc = new MyGenericClass<string>("navneet");
console.log(typeof(mgc.val))



/*
ristricting generics
    - we can restrict generics by using syntax that discussed below where 
    we are talling that type must be extend something that we are telling other type of types are not allowed
*/

function Hello<T extends number>(val:T){
    console.log(val)
}

Hello(4.5)
// Hello("Navneet") // error is as string not extends number
