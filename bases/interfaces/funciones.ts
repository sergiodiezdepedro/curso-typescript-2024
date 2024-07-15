(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbersFunction: addTwoNumbers;

  addNumbersFunction = (a: number, b: number) => {
    return a + b;
  };

  console.log(`El resultado de la función es: ${addNumbersFunction(99, 1)}`);
})();
