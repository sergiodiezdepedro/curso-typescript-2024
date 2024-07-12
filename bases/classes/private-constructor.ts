(() => {
  class Apocalipsis {
    static instance: Apocalipsis;
    private constructor(public name: string) {}

    static callApocalipsis(name: string): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis(name);
      }

      return Apocalipsis.instance;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis("El primer Apocalipsis");
  const apocalipsis2 = Apocalipsis.callApocalipsis("Sabina");
  const apocalipsis3 = Apocalipsis.callApocalipsis(
    "Tortilla de patatas sin cebolla"
  );
  console.log(apocalipsis1);
  console.log(apocalipsis2);
  console.log(apocalipsis3);
})();

// ? En este ejemplo, el método 'callApocalipsis' ahora acepta un parámetro 'name' que se pasa al constructor de Apocalipsis. Sin embargo, debido a que estamos implementando un patrón Singleton, sólo se creará una instancia de Apocalipsis, por lo que los parámetros adicionales en las llamadas subsiguientes a 'callApocalipsis' no tendrán efecto en la instancia creada inicialmente.

// ? La salida del console.log será algo así:

//? Apocalipsis { name: 'El Primer Apocalipsis' } Apocalipsis { name: 'El Primer Apocalipsis' } Apocalipsis { name: 'El Primer Apocalipsis' }

// ? Como se puede observar, todos los objetos apocalipsis1, apocalipsis2 y apocalipsis3 son la misma instancia de Apocalipsis, y su propiedad name es "El Primer Apocalipsis".
