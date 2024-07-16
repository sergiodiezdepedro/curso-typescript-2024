import powers from "../data/powers";

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}
  get power(): string {
    return (
      powers.find((power) => power.id === this.powerId)?.description ||
      "not found"
    );
   
  }
}

export const PI = 3.141516;
