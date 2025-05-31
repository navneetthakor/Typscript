class User{
    // public data member (accessable directly anywhere)
    public name: string;
    
    // protected member only accessable from this call and any class deriving this class 
    protected age: number;

    // private member are only accessable from this class 
    private birthyear: number;

    constructor(name:string,birthyear: number){
     this.name = name;
     this.age = new Date().getFullYear();
     this.birthyear = birthyear;
    }

    // getter-setter method to access and set private members 
    // use it only if you want other wise it's not compolsury 
    get getBirthYear():number{
        return this.birthyear;
    }


    set setBirthYear(newBirthYear: number){
        if(newBirthYear > 2003){
            throw new Error("Birth year must be lesser then 2003");
        }

        this.birthyear = newBirthYear;
    }


}

/*
just for bassic understanding of getter and setter below 3-4 lines are written
*/

const myUser = new User("Navneet",2003)
// console.log(myUser.birthyear) // gives error
console.log(myUser.getBirthYear)
// myUser.setBirthYear = 2022 // also give error due to condtion that we written in setter

class SubUser extends User{
    public sui: number

    constructor(name:string, birthyear: number, sui: number){
        super(name,birthyear)
        this.sui = sui

        // private not accessable here 
        // console.log(this.birthYear)

        // public and protected are accessable here 
        console.log(this.age)
        console.log(this.name)
    }
}

const subUser = new SubUser("Navneet", 2003,421)

// only public members are accesseble 
console.log(subUser.name)
console.log(subUser.sui)


// private and protected are not accessable 
// console.log(subUser.age)
// console.log(subUser.birthYear)

