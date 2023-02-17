export class User {
  private readonly _id: string;
  private _firstname: string;
  private _lastname: string;
  private readonly _email: string;
  private readonly _profile: string;
  private readonly _active: boolean;

  constructor(
    id: string,
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
  }

  public get id(): string {
    return this._id;
  }

  public get fullname() {
    return `${this._firstname} ${this._lastname}`;
  }

  public get email(): string {
    return this._email;
  }

  public get profile(): string {
    return this._profile;
  }

  public get active(): boolean {
    return this._active;
  }

  public set firstname(firstname: string) {
    this._firstname = firstname;
  }

  public set lastname(lastname: string) {
    this._lastname = lastname;
  }
}
