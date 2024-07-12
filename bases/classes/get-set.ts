(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      // console.log("Constructor Avenger llamado");
    }
    protected getFullName() {
      return `${this.name} | ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      // console.log("Constructor XMEN llamado");
    }

    public get fullName(): string {
      return `Getter y Setter: ${this.name} - ${this.realName}`;
    }

    public set fullName(name: string) {
      if (name.length < 4) {
        throw new Error("El nombre debe tener más de 4 caracteres");
      }
      this.name = name;
    }

    getFullNameDesdeXmen() {
      console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);
  // console.log(wolverine);
  // wolverine.getFullNameDesdeXmen()
  // wolverine.fullName = "pezha";
  // console.log(wolverine.fullName);
})();
