(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    constructor(
      public age: number,
      public name: string,
      public realName: string
    ) {}

    mutantPower(id: number) {
      return `${this.name} ${this.realName}`;
    }
  }

  // ? Implementación de la clase
  // ?  const ciclope = new Mutant(28, "Cíclope", "Scott Summers");
  // ?  console.log(ciclope.name, ciclope.realName, ciclope.age);
  // ?  console.log(`Retorno función: ${ciclope.mutantPower(10)}`)
})();
