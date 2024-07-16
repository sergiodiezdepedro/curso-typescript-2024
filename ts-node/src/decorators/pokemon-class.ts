function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = ( print: boolean = false ):Function => {
    if ( print ) {
        return printToConsole;
    }else {
        return () => {}
    }
}


// @printToConsole
@printToConsoleConditional( false )
export class Pokemon {
  public publicApi: string = "https://pokeapi.co";

  constructor(public name: string) {}
}
