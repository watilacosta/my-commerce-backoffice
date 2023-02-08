export class UserType {
  private readonly _id: number;
  private readonly _firstname: string;
  private readonly _lastname: string;
  private readonly _email: string;
  private _profile: string;
  private _status: string;

  constructor(
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    profile: string,
    status: string
  ) {
    this._id = id;
    this._firstname = firstname;
    this._lastname = lastname;
    this._email = email;
    this._profile = profile;
    this._status = status;
  }

  get fullName() {
    return `${this._firstname} ${this._lastname}`;
  }

  get email() {
    return this._email;
  }
}
