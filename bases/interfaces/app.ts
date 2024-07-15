// * Crear interfaces

// * Crear una interfaz para validar el auto (el valor enviado por parametro)

interface Car {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

const conducirBatmovil = (car: Car): void => {
  car.encender = true;
  car.velocidadMaxima = 100;
  car.acelerar();
};

const batmovil: Car = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  },
};

// * Crear una interfaz que permita utilizar el siguiente objeto utilizando propiedades opcionales

interface Joker {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const joker: Joker = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (joker: Joker): void => {
  if (joker.reir) {
    console.log("JAJAJAJA");
  }
};

// * Crear una interfaz para la siguiente funcion

interface GothamCityFunction {
  (ciudadanos: string[]): number;
}

const gothamCity: GothamCityFunction = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// * Crear una interfaz que obligue crear una clase con las siguientes propiedades y metodos

interface PersonaInterface {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

class Persona implements PersonaInterface {
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string
  ) {}
  imprimirBio(): void {
    
  }
}
