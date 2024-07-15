(() => {
  interface Client {
    name: string;
    age?: number;
    adress: Adress;
  }

  interface Adress {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "pezhammer",
    age: 62,
    adress: {
      id: 809,
      zip: "89AA34",
      city: "Ontario",
    },
  };
})();
