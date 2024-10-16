
// first example 
function myMult(num: number): number{
    return (5 * num);
}
console.log("result-1 : ",myMult(5));

// second example 
const myData = (name: string, email: string, isWorking:boolean = false): void => {
    console.log("\nresult-2 :");
    console.log(name);
    console.log(email);
    console.log(isWorking);
};
myData("mayur", "mk@gmail.com")

// third example (Map functions)
let myArr = ["Navneet", "Meet", "Rohanshu"];
// here data type of 'data' is correctly infered automatically 
let result3 = myArr.map((data): string =>{
    return `Hello Mr. ${data}`;
});
console.log("\nresult-3: ", result3);

// never return type -> when function never return anthing. (different then void);
// only applicable when -> function throws error or infinite loop 
const neverFunc = (num: number) : never =>{
    console.log("hello");

    throw Error("not well");
}

neverFunc(1);

export {};