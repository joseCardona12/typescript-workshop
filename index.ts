// Variables - constantes - type
const nameUser: string = "Jose";
let age: number = 20;

type Product ={
    id: number,
    name: string,
    price: number
}

// Operadores (Aritmética, booleanos)

let sum:number = 5 + 10;
let isValid: boolean = sum > 10 && sum < 20;

// Estructuras de decisión
console.log("Number par and impar -------------->");
const verifyNumberPar = (data: number):string =>{
    if(data % 2 !== 0){
        return ("Number impar");
    }
    return ("Number par");
}

console.log(verifyNumberPar(6));

// Estructura de iteración (While, for, forEach, map)
console.log("Number Clasifications ----------------->")
const clasificationNumbers = (data: number):string =>{
    if(data > 0){
        return ("Number positive");
    }
    if(data < 0){
        return("Number negative");
    }

    switch(data){
        case 0:
            return("Number cero");
        default:
            return("Number invalido");
    }

}

console.log(clasificationNumbers(3));
console.log(clasificationNumbers(-1));
console.log(clasificationNumbers(0));

console.log("Iterable structures ------------------>");
const showArray = (array: string[]) =>{
    console.log("Using forEach");
    array.forEach(name=>{
        console.log(name);
    });
    
    console.log("Using for");
    for(let i= 0; i < array.length; i++){
        console.log(array[i])
    }
}
showArray(["jose", "cardona", "juan"]);

console.log("data structures and functions ------------------>");

console.log("Homework 1 ");
const array: number[] = [1,2,3,5,6,7,8,9,10];
const sumArray = (array: number[]):number =>{
    const sum = array.reduce((accum,value)=>{
        return accum + value
    },0)
    return sum;
}
console.log(sumArray(array));

console.log("Homework 2 ");
const names = ["jose", "cardona", "junior"];
const concatNames = (array: string[]):string =>{
    const concatNames = array.reduce((accum,value)=>accum+""+ value);
    return concatNames;
}
console.log(concatNames(names));


console.log("Homework 3 ");
interface User {
    id:number,
    name:string
}
const users:User[] = [
    {
        id: 1,
        name: "jose",
    },
    {
        id: 2,
        name: "cardona"
    }
]

const showNameUsers = (array:User[]):void =>{
    array.forEach(nameUser=>console.log(nameUser.name));
}
showNameUsers(users);

console.log("Homework 4 ");
const numbers:number[] = [1,8,3,4,5,6,7];

const numberGreater = (array: number[]):number =>{
    let valueGreater = 0;
    array.forEach(number=>{
        if(number > valueGreater){
            valueGreater = number;
        }
    })
    return valueGreater;
}
const numberGreaterTwo = (array: number[]):void => console.log(Math.max(...array));
numberGreater(numbers);
numberGreaterTwo(numbers)

console.log("Objects --------------->");
console.log("Practive exercise");
console.log("Homework 1 ");

interface Car{
    brand: string,
    model: string,
    year: number
}

const car: Car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
}
const {brand, model, year} = car;
console.log(brand, model, year);

console.log("Homework 2 ");
class Car{
    constructor(){

    }
    static getData(car: Car){
        return "brand: " + car.brand + " model: " + car.model + " year: " + car.year
    }
}
console.log(Car.getData(car));

console.log("Homework 3 ");
const incrementYearCar = (car:Car):Car =>{
    car = {
        brand: car.brand,
        model: car.model,
        year: car.year + 1
    }
    return car
}
console.log(incrementYearCar(car));

// Funciones
console.log("Functions --------------->");
console.log("Homework 1 ");

const arrayNumber: number[] = [1,8,3,4,5,6,7];
const greaterThan = (array: number[]):number =>{
    let valueGreater = 0;
    array.forEach(number=>{
        if(number > valueGreater){
            valueGreater = number;
        }
    })
    return valueGreater;
}
console.log("Value greater: " + greaterThan(arrayNumber));

console.log("Homework 2");

const testDataType = (...numbers: (string | number | boolean)[]) =>{
    const [typeOne, typeTwo, ...rest] = numbers;
    
    if(typeof typeOne !== typeof typeTwo){
        return ("The first paraments are different types");
    }
    if(typeof typeOne === typeof typeTwo){ // Second condition
        console.log("The first paraments are same types");
        const result = rest.some(number=>typeof number !== typeof typeOne);
        if(!result){
            return("All paraments are same types")
        }
        return "--------- Error -----------";
        
    }
}

console.log(testDataType(1,2,"jose"));
console.log(testDataType(1,2,2));
console.log(testDataType(1,"jose",2));

console.log("Homework 3");
const matrizCuadrada: number[][] = [
    [1,2], 
    [3,4]
];

const newMatrizCuadrada: number[][] = [
    [0,0],
    [0,0]
]

for(let i = 0; i < matrizCuadrada.length; i++){
    for(let j = 0; j < matrizCuadrada.length; j++){
        newMatrizCuadrada[i][j] = matrizCuadrada[j][i];
    }
}

newMatrizCuadrada.forEach(row => console.log(row.reverse()));
console.log(newMatrizCuadrada);

//Clases, Interfaces, métodos, constructores, Pilares del POO
class Animal{
    protected name: string;
    constructor(name: string){
        this.name = name;
    }

    getName(): string{
        return this.name;
    }
}

class Dog extends Animal{
    constructor(name:string){
        super(name);
    }

    getName(): string {
        return this.name
    }
}
const animal = new Animal("Lion");
const dog = new Dog("Lucas");
console.log(animal.getName())
console.log(dog.getName());

//
