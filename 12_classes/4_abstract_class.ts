/*
abstract class :
    - it's blue print that other classes which are extending it must follow
    - all the abstract method of abstract class must be define in child class
    - we can't create object of abstact class

*/

abstract class MyAbstract{
    // private and protected variables are allowed here 
    private sample: string

    public name: string

    constructor(name: string){
        this.name = name
        this.sample = "sample";
    }

    sayHello(): void{
        console.log("Hello")
        console.log(this.sample)
        console.log("\n")
    }

    abstract sayMyName():void;

}

// gives error : can't create object of abstract class 
// const ma = new MyAbstract("nk")

// child class which extends abstract class 
class DerivedClass extends MyAbstract{
    constructor(
        public name:string
    ){
        super(name)
    }


    // if we not implement this method then it will throw error 
    sayMyName(): void {
        console.log(this.name)
    }
}


const dc = new DerivedClass("Navneet");
dc.sayHello()
dc.sayMyName()
