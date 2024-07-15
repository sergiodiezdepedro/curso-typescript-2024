// ? Importar con un alias
// ? import { Hero as SuperHero } from "./classes/Hero";
// * Importar todo lo que se exporta desde un archivo
import * as HeroClasses from "./classes/Hero";
import powers from "./data/powers";

const Hero = "lorem ipsum";

// const ironman = new SuperHero("Iron Man", 1, 35)
const ironman = new HeroClasses.Hero("Iron Man", 1, 35);

console.log({ ironman });
console.log(powers);
