export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const data = { id: 1 };
    resolve(data);
    reject(new Error('Failed to fetch from API'));
  });
}
