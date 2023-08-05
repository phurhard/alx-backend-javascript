/* eslint-disable import/extensions */
import Currency from './3-currency.js';

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());
console.log(typeof dollar);
console.log(dollar.constructor.name);
