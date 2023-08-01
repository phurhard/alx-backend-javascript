export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const data = { id: 1 };
    resolve(data);
    reject(new Error('Failed to fetch from API'));
  });
}

// getResponseFromAPI()
//   .then((data) => {
//     // console.log('Succesful ', data);
//   })
//   .catch((error) => {
//     // console.log('Error in fetching data', error.message);
//   });
