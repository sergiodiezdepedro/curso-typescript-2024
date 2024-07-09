(() => {
  let nada: undefined = undefined;

  //* Esto no es posible
  //* let nada: number = undefined;

  let isActive: boolean | undefined = undefined;

  console.log({ nada });
  console.log({ isActive });

  // * Con 'null' la sintaxis y restricciones son similares
  // * Y muy importante, no olvidemos que 'null' no es igual a 'undefined'
  // * null !== undefined
})();
