/* eslint-disable class-methods-use-this */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = this._validateNumber(size, 'Size');
    this._location = this._validateString(location, 'Location');
  }

  _validateNumber(input, str) {
    if (typeof input !== 'number') {
      throw new Error(`${str} must be number`);
    }
    return input;
  }

  _validateString(attr, attrName) {
    if (typeof attr !== 'string') {
      throw new Error(`${attrName} must be string`);
    }
    return attr;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
