const arr1: number[] = []; // only numbers will be allowed
const arr2: string[] = []; // only string will be allowed
let arr3: string | number[]; // either single string or number array allowed
const arr4: string[] | number[] = []; // either all string or all numbers 
const arr5: (string | number)[] = []; // both number and strings are allowed