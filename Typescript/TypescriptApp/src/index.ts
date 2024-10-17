// // console.log("hello world");
// // for(var i=0;i<2;i++){
// //     console.log(i);
// // }

// function fun1(a: number,b: number):number{
//     return a*b;
// }
// const res = fun1(10,20);
// console.log(res);

// // Classes and interface
// interface regDetails{
//     fname: string;
//     lname: string;
//     age: number;
// }
// const regdetails: regDetails = {
//     fname: "Nitish",
//     lname: "Veni",
//     age: 22
// };
// console.log(regdetails);

// // Inheritance
// class Animal{
//     constructor(public name: string){}
//     makeSound(): void{
//         console.log(`${this.name}makes some sound`);
//     }
// }
// class Dog extends Animal{
//     makeSound():void{
//         console.log(`${this.name}barks`);
//     }
// }
// const animal = new Animal("Cat");
// animal.makeSound();
// const dog = new Dog("Scooby ");
// dog.makeSound();

// // Generics
// function identity<T>(arg: T):T{
//     return arg;
// }
// const num = identity<number>(9);
// const str = identity<string>("Pranav");
// console.log(num);
// console.log(str);

// // Enums
// enum Direction{
//     // up=5,
//     up,
//     down,
//     right,
//     left
// }
// console.log(Direction.up);
// console.log(Direction.down);
// console.log(Direction[0]);
// console.log(Direction[1]);
// console.log(Direction[2]);
// console.log(Direction[3]);

// Type-Inference
let x = 10;
x = 5;
let y = "String";
let z: number;
z = 25;

let a: number=10;
let b: string ="hello";
let c: boolean=true;
let d: any=10;
let e: any="Hello";
let f: any=false;
let g: number[]=[10,20,30];
let h: string[]=["Hello","World"];
let i: boolean[]=[true,false];
let j: any[]=["hello",1,true];
let k: [string, number]=["Hello",10];//tuple
let l: object={
    name:"Nitish",age:22,
    EmailId:{
        email:"nit@gmail.com",
    },
    preferences:["Sports","Movies"]
};

console.log(l);

console.log(`a: ${typeof a}`);
console.log(`b: ${typeof b}`);
console.log(`c: ${typeof c}`);
console.log(`d: ${typeof d}`);
console.log(`e: ${typeof e}`);
console.log(`f: ${typeof f}`);
console.log(`g: ${typeof g}`);
console.log(`h: ${typeof h}`);
console.log(`i: ${typeof i}`);
console.log(`j: ${typeof j}`);
console.log(`k: ${typeof k}`);
console.log(`l: ${typeof l}`);


console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);
console.log(`d: ${d}`);
console.log(`e: ${e}`);
console.log(`f: ${f}`);
console.log(`g: ${g}`);
console.log(`h: ${h}`);
console.log(`i: ${i}`);
console.log(`j: ${j}`);
console.log(`k: ${k}`);
console.log(`l: ${l}`);

// Union-Types

// 7. Union Types
// Union types allow you to specify that a variable can have multiple types.
// This is useful when a function can accept different types of input.
// For example, you can define a function that takes a string or a number as an argument.
function printId(id: string | number) {
    console.log(id);
}
printId("101"); // Output: 101
printId(101); // Output: 101

interface Circle {
    kind: "circle";
    radius: number;
}
interface Square {
    kind: "square";
    sideLength: number;
}


function getArea(shape: Circle | Square): number {
    switch (shape.kind) {
        case "circle":
            // ** is the exponentiation operator in TypeScript, which raises the base to the power of the exponent.
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}

const circle: Circle = { kind: "circle", radius: 10 };
const square: Square = { kind: "square", sideLength: 10 };

console.log("area of circle " , getArea(circle)); // Output: 314.1592653589793
console.log("area of squard " , getArea(square)); // Output: 100