(() => {
  class Avenger {
    name;
    power;
    constructor(name = "No Name", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  const hulk = new Avenger("Hulk", 1000);
  console.log(hulk);

  class FlyingAvenger extends Avenger {
    flying;

    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const falcon = new FlyingAvenger("Falcon", 50);
  console.log(falcon.name, falcon.power);
})();
