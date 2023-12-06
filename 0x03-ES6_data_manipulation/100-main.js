/* eslint-disable import/extensions */
import queryAPI from './100-weak.js';
import weakMap from './100-weak.js';

const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

// console.log(queryAPI(endpoint));
// const sample = weakMap.get(endpoint);
// console.log(sample);
console.log(weakMap.get(endpoint));
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
