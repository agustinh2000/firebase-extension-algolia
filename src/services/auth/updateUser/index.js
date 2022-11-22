import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

import { db, storage } from 'services/firebase';

const updateUser = async (user, displayName, file) => {
  const storageRef = ref(storage, `users/${user.uid}`);

  await uploadBytesResumable(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  await setDoc(doc(db, 'users', user.uid), {
    displayName,
    email: user.email,
    photoURL: downloadURL,
  });
  return downloadURL;
};

export default updateUser;
