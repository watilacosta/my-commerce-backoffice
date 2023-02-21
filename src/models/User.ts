export class User {
  private readonly _id: string;
  private _firstname: string;
  private _lastname: string;
  private _email: string;
  private _profile: string;
  private _active: boolean;
  private _name: string;

  constructor(
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    profile: string,
    active: boolean,
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

  set name(name: string) {
    this._name = name;
  }

  get id(): string {
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

  set firstname(firstname: string) {
    this._firstname = firstname;
  }

  set lastname(lastname: string) {
    this._lastname = lastname;
  }

  set active(value: boolean) {
    this._active = value;
  }

  set profile(value: string) {
    this._profile = value;
  }

  set email(value: string) {
    this._email = value;
  }
}
