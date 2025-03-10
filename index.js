"use strict";
// Variables - constantes - type
const nameUser = "Jose";
let age = 20;
// Operadores (Aritmética, booleanos)
let sum = 5 + 10;
let isValid = sum > 10 && sum < 20;
// Estructuras de decisión
console.log("Number par and impar -------------->");
const verifyNumberPar = (data) => {
    if (data % 2 !== 0) {
        console.log("Number impar");
        return;
    }
    console.log("Number par");
};
verifyNumberPar(6);
// Estructura de iteración (While, for, forEach, map)
console.log("Number Clasifications ----------------->");
const clasificationNumbers = (data) => {
    if (data > 0) {
        console.log("Number positive");
        return;
    }
    if (data < 0) {
        console.log("Number negative");
        return;
    }
    switch (data) {
        case 0:
            console.log("Number cero");
            break;
        default:
            console.log("Number invalido");
    }
};
clasificationNumbers(3);
clasificationNumbers(-1);
clasificationNumbers(0);
console.log("Iterable structures ------------------>");
const showArray = (array) => {
    console.log("Using forEach");
    array.forEach(name => {
        console.log(name);
    });
    console.log("Usign map");
    const names = array.map(name => console.log(name));
    console.log("Using for");
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
showArray(["jose", "cardona", "juan"]);
console.log("data structures and functions ------------------>");
console.log("Homework 1 ");
const array = [1, 2, 3, 5, 6, 7, 8, 9, 10];
const sumArray = (array) => {
    const sum = array.reduce((accum, value) => {
        return accum + value;
    }, 0);
    console.log(sum);
};
sumArray(array);
console.log("Homework 2 ");
const names = ["jose", "cardona", "junior"];
const concatNames = (array) => {
    const concatNames = array.reduce((accum, value) => accum + "" + value);
    console.log(concatNames);
};
concatNames(names);
console.log("Homework 3 ");
const users = [
    {
        id: 1,
        name: "jose",
    },
    {
        id: 2,
        name: "cardona"
    }
];
const showNameUsers = (array) => {
    array.forEach(nameUser => console.log(nameUser.name));
};
showNameUsers(users);
console.log("Homework 4 ");
const numbers = [1, 8, 3, 4, 5, 6, 7];
const numberGreater = (array) => {
    let valueGreater = 0;
    array.forEach(number => {
        if (number > valueGreater) {
            valueGreater = number;
        }
    });
    console.log(valueGreater);
};
const numberGreaterTwo = (array) => console.log(Math.max(...array));
numberGreater(numbers);
numberGreaterTwo(numbers);
console.log("Objects --------------->");
console.log("Practive exercise");
console.log("Homework 1 ");
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};
const { brand, model, year } = car;
console.log(brand, model, year);
console.log("Homework 2 ");
class Car {
    constructor() {
    }
    static getData(car) {
        return "brand: " + car.brand + " model: " + car.model + " year: " + car.year;
    }
}
console.log(Car.getData(car));
console.log("Homework 3 ");
const incrementYearCar = (car) => {
    car = {
        brand: car.brand,
        model: car.model,
        year: car.year + 1
    };
    return car;
};
console.log(incrementYearCar(car));
// Funciones
console.log("Functions --------------->");
console.log("Homework 1 ");
const arrayNumber = [1, 8, 3, 4, 5, 6, 7];
const greaterThan = (array) => {
    let valueGreater = 0;
    array.forEach(number => {
        if (number > valueGreater) {
            valueGreater = number;
        }
    });
    return valueGreater;
};
console.log("Value greater: " + greaterThan(arrayNumber));
console.log("Homework 2");
const testDataType = (...numbers) => {
    const [typeOne, typeTwo, ...rest] = numbers;
    if (typeof typeOne !== typeof typeTwo) {
        return ("The first paraments are different types");
    }
    if (typeof typeOne === typeof typeTwo) { // Second condition
        console.log("The first paraments are same types");
        const result = rest.some(number => typeof number !== typeof typeOne);
        if (!result) {
            return ("All paraments are same types");
        }
        return "--------- Error -----------";
    }
};
console.log(testDataType(1, 2, "jose"));
console.log(testDataType(1, 2, 2));
console.log(testDataType(1, "jose", 2));
console.log("Homework 3");
const matrizCuadrada = [
    [1, 2],
    [3, 4]
];
const newMatrizCuadrada = [
    [0, 0],
    [0, 0]
];
for (let i = 0; i < matrizCuadrada.length; i++) {
    for (let j = 0; j < matrizCuadrada.length; j++) {
        newMatrizCuadrada[i][j] = matrizCuadrada[j][i];
    }
}
newMatrizCuadrada.forEach(row => console.log(row.reverse()));
console.log(newMatrizCuadrada);
//Clases, Interfaces, métodos, constructores, Pilares del POO
class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    getName() {
        return this.name;
    }
}
const animal = new Animal("Lion");
const dog = new Dog("Lucas");
console.log(animal.getName());
console.log(dog.getName());
//
//# sourceMappingURL=index.js.map