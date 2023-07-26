import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  const [signUpResult, uploadResult] = await Promise.allSettled([
    signUpPromise,
    uploadPromise,
  ]);

  const results = [
    {
      status: signUpResult.status,
      value: signUpResult.status === 'fulfilled' ? signUpResult.value : signUpResult.reason,
    },
    {
      status: uploadResult.status,
      value: uploadResult.status === 'fulfilled' ? uploadResult.value : uploadResult.reason,
    },
  ];

  return results;
}
