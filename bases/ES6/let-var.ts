(() => {
  let a: number = 5;
  const name: string = "pezhammer";

  const getName = (): void => {
    console.log("getName 1");
  };

  // ? Si se añadiera esto TS marcaría como error y al transpilar a ES6 daría error en la consola y no se ejecutaría
  // ?   getName = () => {
  // ?     console.log("getName 2");
  // ?  };

  // ?   getName();
})();
