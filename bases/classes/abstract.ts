(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return "¡¡¡Mundo salvado!!!";
    }
  }
  class Villain extends Mutante {
    conquistarMundo() {
      return "Mundo conquistado";
    }
  }

  const wolverine = new Xmen("Lobezno", "Logan");
  const magneto = new Villain("Magneto", "Max Eisenhardt");
  //   console.log(wolverine.salvarMundo());
  //   console.log(magneto.conquistarMundo());
//   const printName = (character: Mutante) => {
//     console.log(character.realName);
//   };
//   printName(magneto);
})();

// ? Más información sobre clases abstractas en TS: https://chatgpt.com/share/471598af-ce6a-486a-b6d9-ebdef0674ea5
