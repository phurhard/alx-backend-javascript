/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  const pro = new Promise((resolve, reject) => {
    resolve({
      status: 200,
      body: 'success',
    });

    reject(Error());
  });

  promise.then(console.log('Got a response from the API'));
}
