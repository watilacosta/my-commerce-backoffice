export class User {
  private readonly _id: number;
  private _firstname: string;
  private _lastname: string;
  private _email: string;
  private _profile: string;
  private _active: boolean;
  private _name: string;

  constructor(
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    profile: string,
    active: boolean
  ) {
    this._id = id;
    this._firstname = firstname;
    this._lastname = lastname;
    this._email = email;
    this._profile = profile;
    this._active = active;
    this._name = `${firstname} ${lastname}`;
  }

  get name(): string {
    return this._name;
  }
  get id(): number {
    return this._id;
  }
  get email(): string {
    return this._email;
  }
  get profile(): string {
    return this._profile;
  }
  get active(): boolean {
    return this._active;
  }
  get lastname(): string {
    return this._lastname;
  }
  get firstname(): string {
    return this._firstname;
  }

  set name(name: string) {
    this._name = name;
  }
  set email(value: string) {
    this._email = value;
  }
  set profile(value: string) {
    this._profile = value;
  }
  set active(value: boolean) {
    this._active = value;
  }
  set lastname(lastname: string) {
    this._lastname = lastname;
  }
  set firstname(firstname: string) {
    this._firstname = firstname;
  }
}
