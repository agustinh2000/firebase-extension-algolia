import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { storage } from 'services/firebase';

const uploadImage = async (file) => {
  const storageRef = ref(
    storage,
    `posts/${parseInt(new Date().getTime() / 1000, 10)}`
  );

  await uploadBytesResumable(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

export default uploadImage;
