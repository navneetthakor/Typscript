const arr: [string, number, number] = ['nk',2,1];
console.log(arr);

// since we have define tuple type, we cannot add extra values in array by 
// arr[3] = 5; 
//     -> gives error 

// but if we use methods availbale with Array then it will not stop us 
// like 
arr.push(1);
console.log(arr)

arr.unshift(2.5);
console.log(arr);

// we not have any solution for it.
// stackoverflow thread on this topic : 
// https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array

export {};
