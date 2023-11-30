import { uploadPhoto, createUser } from './utils';
// import createUser from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([values, u]) => console.log(values.body, u.firstName, u.lastName))
    .catch(() => console.log('Signup system offline'));
}
