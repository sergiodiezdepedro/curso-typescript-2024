(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greetings = (name: string) => `Hola ${name}.`;
  const saveTheWorld = () => `¡El mundo se ha salvado!`;

  //* Ejemplo 1

  //* let myFunction: Function;

  //* TypeScript no acepta esto porque está esperando una función
  //* myFunction = 10;
  //* console.log(myFunction);

  //* myFunction = addNumbers
  //* console.log(myFunction(1, 2));

  //* myFunction = greetings
  //* console.log(myFunction("pezhammer"));

  //* myFunction = saveTheWorld
  //* console.log(myFunction());

  //? Ejemplo 2
  //? let myFunction: (a:number, b: number) => number;

  //? myFunction = addNumbers
  //? console.log(myFunction(1, 2));

  //? Las dos funciones siguientes no son válidas porque no devuelven un número
  //? myFunction = greetings
  //? console.log(myFunction("pezhammer"));

  //? myFunction = saveTheWorld
  //? console.log(myFunction());

  // * Ejemplo 3
  // * let myFunction: (greeting: string) => string;

  // * myFunction = greetings
  // * console.log(myFunction("pezhammer"));

  // * Esta función no se admite porque devuelve un número
  // * myFunction = addNumbers
  // * console.log(myFunction(1, 2));
  // * Esta función no se admite porque se esperaba un argumento y no se le pasa ninguno
  // * myFunction = saveTheWorld
  // * console.log(myFunction());

  //!   Ejemplo 4
  let myFunction: () => string;
  myFunction = saveTheWorld;
  console.log(myFunction());
})();
