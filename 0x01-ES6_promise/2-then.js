/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    resolve({
      status: 200,
      body: 'success',
    });

    reject(Error());
  })
    .then(console.log('Got a response from the API'));
}
