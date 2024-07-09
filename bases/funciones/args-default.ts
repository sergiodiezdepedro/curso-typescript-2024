(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${firstName} ${lastName || "XXX"}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || "XXX"}`;
    }
  };

//*  const name = fullName("Peter", "Stark");
  const name = fullName("Peter", "Stark", true);

  console.log({ name });
})();
