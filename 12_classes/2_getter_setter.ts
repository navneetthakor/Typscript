/*
getter - setter function are very important to access private properties
*/

class Person{
    name : string
    private age: number

    constructor(name:string, age:number){
        this.name = name;
        this.age = age
    }

    // getter-setter method for private mebmer `age`
    get getMyAge():number {
        return this.age;
    }

    // setter doesn't have return type at all 
    set setMyAge(newAge:number){
        if(newAge <= 0)
            throw new Error("age must be postive integer")

        this.age = newAge
    }
}