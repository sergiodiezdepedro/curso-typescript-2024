(() => {
  let avengers: number = 10;
  console.log({ avengers });

  const villains: number = 20;

  if (avengers < villains) {
    console.log("Tenemos un problema");
  } else {
    console.log("Podemos sobrevivir");
  }

  avengers = Number("123A");
  // * Esto devuelve NaN (Not a Number), que es un número en JS
  console.log({ avengers });
})();
