/* eslint-disable class-methods-use-this */
export default class Currency {
  constructor(code, name) {
    this._code = this._validateString(code, 'Code');
    this._name = this._validateString(name, 'Name');
  }

  //   validation
  _validateString(attr, attrName) {
    if (typeof attr !== 'string') {
      throw new Error(`${attrName} must be string`);
    }
    return attr;
  }

  // Getter and setter
  set name(x) {
    this._name = this._validateString(x, 'Name');
  }

  set code(x) {
    this._code = this._validateString(x, 'Code');
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
