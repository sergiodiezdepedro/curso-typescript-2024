(() => {
  class Avenger {
    // * Cuando una propiedad es 'static' se deja en este sitio, antes del constructor
    static avgAge: number = 35;
    constructor(
      private name: string,
      private team: string,
      public realName?: string,
      avgAge: number = 27
    ) {
      Avenger.avgAge = avgAge;
    }
  }

  // const antman: Avenger = new Avenger("Ant-Man", "Capitán", "Scott Lang");
  // console.log(antman);
  // console.log(Avenger.avgAge);
})();
