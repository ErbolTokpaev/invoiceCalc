export interface IProduct {
  name?: string;
  quantity?: number | null;
  price?: number | null;
  readonly sum: number;
  readonly id?: number;
}
export class Product implements IProduct {
  constructor(
    public name?: string,
    public price?: number | null,
    public quantity?: number | null,
    public id?: number
  ) {}

  get sum(): number {
    if (typeof this.quantity === "number" && typeof this.price === "number") {
      return this.quantity * this.price;
    }
    return 0;
  }
  get sumString(): string {
    return `$${this.sum}`;
  }
}
export type IProducts = Array<IProduct>;
