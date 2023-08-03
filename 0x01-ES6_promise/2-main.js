import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
const pro = Promise.reject();
handleResponseFromAPI(promise);
handleResponseFromAPI(pro);
