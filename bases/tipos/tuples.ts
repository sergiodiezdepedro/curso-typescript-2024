(() => {
  const hero: [string, number, boolean] = ["Doctor Strange", 100, true];

  // * Typescript marca como incorrectas las dos líneas siguientes
  // * hero[0] = 50;
  // * hero[1] = "Thor";
  hero[1] = 50;
  hero[0] = "Thor";
  hero[2] = false;
  console.log({ hero });
})();
