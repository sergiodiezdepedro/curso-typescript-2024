(() => {
  const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  };

  const name = fullName("Peter", "Parker");
  // *  Si no se declara uno de los argumentos TypeScript marca el error de que se esperaban 2 y sólo llega 1
  //* const name = fullName("Parker");

  console.log({ name });
})();
