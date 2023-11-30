import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
const reject = Promise.reject();

handleResponseFromAPI(promise);
handleResponseFromAPI(reject);
