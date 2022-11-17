import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from 'services/firebase';

const getAllPosts = async () => {
  const invitationsRef = collection(doc(db, 'users', userUid), 'invitations');

  const querySnapshot = await getDocs(collection(db, "cities"));


  const existingInviteQuery = query(
    invitationsRef,
    where('accepted', '==', false)
  );

  return existingInviteQuery;
};

export default getAllPosts;