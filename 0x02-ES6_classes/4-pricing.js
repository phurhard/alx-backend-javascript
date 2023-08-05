/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this._validateAmount(amount, 'Amount');
    this._currency = this._validateCurrency(currency, 'Currency');
  }

  // Validation
  _validateAmount(attr, attrName) {
    if (typeof attr !== 'number') {
      throw new Error(`${attrName} must be number`);
    }
    return attr;
  }

  _validateCurrency(attr, attrName) {
    if (attr.constructor.name !== 'Currency') {
      throw new Error(`${attrName} must be of type currency`);
    }
    return attr;
  }

  // getter and setters
  set amount(x) {
    this._amount = this._validateAmount(x, 'Amount');
  }

  set currency(x) {
    this._currency = this._validateCurrency(x, 'Currency');
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // methods
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    this.conversionRate = this._validateAmount(conversionRate, 'conversionRate');
    this.amount = this._validateAmount(amount, 'Amount');
    return `${amount * conversionRate}`;
  }
}
