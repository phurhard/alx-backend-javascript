/* eslint-disable class-methods-use-this */
export default class Building {
  constructor(sqft) {
    this._sqft = this._validateNumber(sqft, 'sqft');
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending  Building must override evacuationWarningMessage');
    }
  }

  _validateNumber(input, str) {
    if (typeof input !== 'number') {
      throw new Error(`${str} must be number`);
    }
    return input;
  }

  //   setter and getter
  set sqft(x) {
    this._sqft = this._validateNumber(x, 'sqft');
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
