import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([body, firstname, lastname]) => console.log({ body.body }, { firstname }, { lastname }));
    // .catch(() => console.log('Signup system offline'));
}
