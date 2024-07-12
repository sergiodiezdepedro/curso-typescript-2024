(() => {
  class Avenger {
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name;
    }
    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    public bio() {
      return `Nombre:${this.name} | Equipo:${this.team}`;
    }
  }

  // const antman: Avenger = new Avenger("Ant-Man", "Capitán", "Scott Lang");
  // console.log(antman.bio());
  // console.log(Avenger.getAvgAge());
})();
