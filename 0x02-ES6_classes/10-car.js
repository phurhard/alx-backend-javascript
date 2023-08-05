/* eslint-disable class-methods-use-this */
const cloneCarSymbol = Symbol('cloneCar');
export default class Car {
  constructor(brand, motor, color) {
    this._brand = this._validateString(brand, 'Brand');
    this._motor = this._validateString(motor, 'Motor');
    this._color = this._validateString(color, 'Color');
  }

  _validateString(attr, attrName) {
    if (typeof attr !== 'string') {
      throw new Error(`${attrName} must be string`);
    }
    return attr;
  }

  [cloneCarSymbol]() {
    return new Car(this._brand, this._motor, this._color);
  }

  cloneCar() {
    return this[cloneCarSymbol]();
  }
}
