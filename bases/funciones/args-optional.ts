(() => {
    const fullName = (firstName: string, lastName?: string): string => {
      return `${firstName} ${lastName || "XXX"}`;
    };
  
    const name = fullName("Peter");
  
    console.log({ name });
  })();
  