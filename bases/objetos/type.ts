(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Supervelocidad", "Viajar en el tiempo"],
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 30,
    powers: ["Superfuerza", "Volar"],
    getName() {
      return this.name;
    },
  };
})();
