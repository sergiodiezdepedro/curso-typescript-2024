(() => {
  interface Xmen {
    nombre: string;
    nombreReal: string;
    regenerar(nombreReal: string): void;
  }
  let wolverine: Xmen = {
    nombre: "Wolverine",
    nombreReal: "Logan",
    regenerar(nombreReal: string) {
      console.log(`Se ha regenerado ${this.nombre}`);
    },
  };
  wolverine.regenerar(wolverine.nombreReal);
})();
