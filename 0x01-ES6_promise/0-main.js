// eslint-disable-next-line import/extensions
import getResponseFromAPI from './0-promise.js';

const response = getResponseFromAPI();
console.log(response instanceof Promise);
console.log(response)