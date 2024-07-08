(() => {
  function callBatman(): void {}

  const callSuperman = (): void => {};

  const a = callBatman();
  const b = callSuperman();
  
  console.log({ a });
  console.log({ b });
})();
