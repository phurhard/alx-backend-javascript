import { uploadPhoto, createUser } from './utils';
// import createUser from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto, createUser])
    .then((values) => console.log(values))//, values[1].firstName, values[1].lastName))
    .catch(() => console.log('Signup system offline'));
}
