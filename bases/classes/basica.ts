(() => {
  class Avenger {
    private name: string;
    private team: string;
    public realName?: string;
    static avgAge: number = 35;

    constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  // const antman: Avenger = new Avenger("Ant-Man", "Capitán");
  // console.log(antman);
})();
