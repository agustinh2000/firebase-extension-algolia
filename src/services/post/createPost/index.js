import { addDoc, collection } from 'firebase/firestore';
import { db } from 'services/firebase';

const postCreation = async (content, user, imageUrl) =>
  addDoc(collection(db, 'posts'), {
    content,
    authorName: user.displayName,
    authorId: user.uid,
    photoURL: imageUrl,
  });

export default postCreation;
