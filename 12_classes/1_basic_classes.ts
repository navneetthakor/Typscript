/*
Classes syntax is much similar to javascript but the only difference is that all the variables 
that we want to create in that class, those must be declare in class before constructor
*/


class User{
    // instance variables (public)
    name : string

    // instance variables (private)
        /* -> by default tsconfig follows `ES5` version but this private variables was introduced in `ES2015` and later so 
                -> either update tsconfig.target 
                -> or instead of '#' use 'private' keyword provided by typscript
                        -> but 'private' makes varible private only for compile time, in js it's public instance variable
        */
    // #age : number
    private age: number

    // staic variables or class variables
    static numberOfUsers : number = 0

    // readonly variables 
        // -> (typscript specific, no significants in js)
        // -> in js it's normal instance variable
    readonly greet : string

    constructor(name: string, age : number, greetMessage : string){
        this.name = name
        this.age = age
        this.greet = greetMessage
    }

    // gives error that `greet is readonly`
    // changeGreet(newGreet:string) {
    //     this.greet = newGreet
    // }

}