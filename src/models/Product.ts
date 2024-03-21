export class Product {
  private readonly _id: number;
  private _title: string;
  private _description: string;
  private _price: number;
  private _quantity: number;
  private _in_stock: boolean;
  private _brand_id: number;
  private _category_id: number;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    quantity: number,
    in_stock: boolean,
    brand_id: number,
    category_id: number
  ) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._price = price;
    this._quantity = quantity;
    this._in_stock = in_stock;
    this._brand_id = brand_id;
    this._category_id = category_id;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): number {
    return this._price
  }

  set price(value: number) {
    this._price = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get in_stock(): boolean {
    return this._in_stock;
  }

  get brand_id(): number {
    return this._brand_id;
  }

  set brand_id(value: number) {
    this._brand_id = value;
  }

  get category_id(): number {
    return this._category_id;
  }

  set category_id(value: number) {
    this._category_id = value;
  }
}
