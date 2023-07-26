import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((responses) => {
    responses.forEach((response) => {
      console.log(response.body, response.lastName, response.firstName);
    });
  }).catch(() => {
    console.error('Signup system offline');
  });
}
