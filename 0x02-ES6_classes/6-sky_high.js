/* eslint-disable class-methods-use-this */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = this._validateNumber(floors, 'Floors');
  }

  _validateNumber(input, str) {
    if (typeof input !== 'number') {
      throw new Error(`${str} must be number`);
    }
    return input;
  }

  get floors() {
    return this._floors;
  }

  get sqrt() {
    return super._sqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
