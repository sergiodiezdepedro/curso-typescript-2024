(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironMan: Avenger = {
    name: "Iron Man",
    weapon: "Inteligent Armor",
  };
  const captainAmerica: Avenger = {
    name: "Captain America",
    weapon: "Shield",
  };
  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  const avengers: Avenger[] = [thor, captainAmerica, ironMan];

  for (const avenger of avengers) {
    // console.log(avenger);
    console.log(avenger.name.toUpperCase(), avenger.weapon);
  }
})();
