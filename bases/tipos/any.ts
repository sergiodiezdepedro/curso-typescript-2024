(() => {
  let avenger: any = 123;
  // let avenger: string;
  //   let avenger: number;
  let exists;
  let power;

  avenger = "Doctor Strange";
  //   console.log(avenger.charAt(1).toUpperCase());
  console.log((avenger as string).charAt(2).toUpperCase());

  avenger = 150.2338566574;
  //   console.log(avenger.toFixed(2));
  console.log(<number>avenger.toFixed(2));

  console.log(exists);
  console.log(power);
})();
