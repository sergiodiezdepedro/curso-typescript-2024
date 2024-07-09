(() => {
  const error = (message: string): never => {
    throw new Error(message);
  };

//  * const error = (message: string): never | number => {
//  *  if (false) {
//  *     throw new Error(message);
//  *  }
//  *   return 1;
//  * };

  error("Auxilio");
  
// *  A partir de este punto la ejecución se detiene con el Error
  console.log("Hola Mundo");
})();
