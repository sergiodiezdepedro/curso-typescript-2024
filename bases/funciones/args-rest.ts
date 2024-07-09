(() => {
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(" ")}`;
  };

  const superman = fullName("Clark", "Joseph", "Kent", "de Pedro");
  //* Esto también es válido
  //* const superman = fullName("Clark", "Kent");
  console.log({ superman });
})();
