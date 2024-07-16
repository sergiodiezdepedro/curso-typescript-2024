// ? Importar con un alias
// ? import { Hero as SuperHero } from "./classes/Hero";
// * Importar todo lo que se exporta desde un archivo
// * import * as HeroClasses from "./classes/Hero";
// * Importar lo definido como default en un archivo
// * import powers from "./data/powers";
// * import { Hero } from "./classes/Hero";
import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Hero, Villain } from "../interfaces";

// const Hero = "lorem ipsum";
// const ironman = new Hero("Iron Man", 1, 35)
// const ironman = new SuperHero("Iron Man", 1, 35)
// const ironman = new HeroClasses.Hero("Iron Man", 1, 35);

//console.log({ ironman });
//console.log(ironman.power);
// console.log(powers);
// printObject(123.45);
// printObject("Hola Mundo");
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject(["W", "X", "Y", "Z"]);

// console.log(`genericFunction: ${genericFunction(3.141516).toFixed(2)}`);
// console.log(`genericFunction: ${genericFunction(new Date).getUTCFullYear()}`);
// console.log(`genericFunction: ${genericFunction("Hola Mundo").toUpperCase()}`);

// console.log(`genericFunctionArrow: ${genericFunctionArrow(3.141516).toFixed(2)}`);
// console.log(`genericFunctionArrow: ${genericFunctionArrow(new Date).getUTCFullYear()}`);
// console.log(`genericFunctionArrow: ${genericFunctionArrow("Hola Mundo").toUpperCase()}`);

const deadpool = {
    name: "Deadpool",
    realName: "Wade Winston Wilson",
    dangerLevel: 200,
}

console.log(genericFunctionArrow<Hero>(deadpool).realName);
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);