(() => {
  type Heroes = {
    nick: string;
    ironman: string;
    vision: string;
    activo?: boolean;
    poder?: number;
  };

  const avengers: Heroes = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    // activo: true,
    poder: 500.34645,
  };

  const { poder, nick } = avengers;
  console.log(poder?.toFixed(2), nick.toUpperCase());

  //   const printAvenger = (avengers: Heroes): void => {
  //     console.log(avengers.vision.toUpperCase());
  //   };

  //? Lo siguiente también es otra forma de desestructurar argumentos de un objeto
  //?  const printAvenger = ({ ironman }: Heroes): void => {
  //?     console.log(ironman);
  //?   };

  //*   Con argumento tipo 'rest' (...lorem)
  const printAvenger = ({ ironman, ...resto }: Heroes): void => {
    console.log(ironman, resto);
  };

  printAvenger(avengers);
})();
