(() => {
  const hero: string = "Flash";
  function returName(): string {
    return hero;
  }

  const activateBatisignal = (): string => {
    return "Batiseñal activada";
  };

  console.log(typeof activateBatisignal);

  const heroName = returName();

  console.log(heroName);
})();
