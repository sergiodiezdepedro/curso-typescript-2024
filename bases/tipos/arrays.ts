(() => {
  //   const numbers: (string | number | boolean)[] = [1, 2, 3, 4, "5", 6, 7, 8, 9, 10];
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numbers.push(11);
  console.log({ numbers });
  //   numbers.push("12");
  //   console.log({ numbers });
  //   numbers.push(false);
  //   console.log({ numbers });
  const villains: string[] = ["Joker", "Magneto", "Green Goblin", "Thanos"];
  villains.forEach((v) => console.log(v.toUpperCase()));
})();
