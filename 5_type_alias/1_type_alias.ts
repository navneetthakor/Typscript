// type alias is exact name for any type 
// means we can refer any time with different name 

// for normal data type 
type Mystring = string;

// for union data type 
type myUninon = string | boolean;

// for object 
type Point = {
    x: number;
    y: number;
}

// let see simple example 
function myFunc (obj: Point){
    console.log(obj.x);
}

myFunc({x: 1, y: 1});