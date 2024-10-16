// We not have control over array that, at what position which data_type value should come 
const arr1: (string | number)[] = []; // anywhere in array we can add string or number

// Typescript provides `TUPLE` to overcome this problem 
let arr2: [string, number];
arr2 = ['navneet', 1]; 
    // -> here if we add more or less values or inapropriate values then it will give error 

// arr2[0] = true // gives error 
// arr[2] = 1 // error -> adding more values
export {};