(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "pezhammer";
  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: "Bruce Wayne",
    age: 25,
    powers: [1],
  };
  console.log(typeof myCustomVariable);
  console.log(myCustomVariable);
})();
