/* eslint-disable class-methods-use-this */
export default class Airport {
  constructor(name, code) {
    this._name = this._validateString(name, 'Name');
    this._code = this._validateString(code, 'Code');
  }

  _validateString(attr, attrName) {
    if (typeof attr !== 'string') {
      throw new Error(`${attrName} must be string`);
    }
    return attr;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
