export interface IProduct {
  readonly id: number;
  name: string;
  quantity: number | null;
  price: number | null;
}
export interface IProducts extends Array<IProduct>{}
