(() => {
  const avengers: [string, boolean, number] = [
    "Captain America",
    true,
    150.6524,
  ];

  const [soyUnString, soyUnBoolean, soyUnNumber] = avengers;
  console.log({ soyUnString, soyUnNumber });
})();
