export class User {
  private _secondName: string;

  constructor(private name: string, private lastname: string, private age: number) {
  }

  get fullName() {
    return this.name + ' ' + (this.secondName ? this.secondName + ' ' : '') + this.lastname;
  }

  set secondName(value: string) {
    this._secondName = value;
  }

  get secondName() {
    return this._secondName;
  }
}
